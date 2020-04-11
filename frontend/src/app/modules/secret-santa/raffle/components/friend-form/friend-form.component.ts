import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FriendInterface} from "../../../../../core/interfaces/FriendInterface";
import {RaffleComponent} from "../../raffle.component";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css']
})
export class FriendFormComponent implements OnInit {
  public postAction = 'new';
  public friendForm: FormGroup;
  @Output() friendEmitter = new EventEmitter();

  constructor(
    private raffleComponent: RaffleComponent,
    private fb: FormBuilder
  ) {
    this.friendForm = this.fb.group({
      _id: new FormControl(''),
      name: new FormControl('', [
        Validators.min(3),
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
    this.subscribeOnUpdateFriend();
  }

  postFriend(): void {
    this.friendEmitter.emit({ friend: this.friendForm.value, action: this.postAction });
    this.reset();
  }

  subscribeOnUpdateFriend(): void {
    this.raffleComponent.updateFriendEmitter
      .subscribe((friend: FriendInterface) => {
        this.postAction = 'update';
        this.friendForm.controls._id.setValue(friend._id);
        this.friendForm.controls.name.setValue(friend.name);
        this.friendForm.controls.email.setValue(friend.email);
      });
  }

  reset(): void {
    this.friendForm.reset();
    this.postAction = 'new';
  }
}
