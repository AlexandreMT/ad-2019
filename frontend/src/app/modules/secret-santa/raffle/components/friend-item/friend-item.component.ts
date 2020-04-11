import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FriendInterface} from "../../../../../core/interfaces/FriendInterface";

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {
  @Input() friends: FriendInterface[];
  @Output() deleteFriendEmitter = new EventEmitter();
  @Output() updateFriendEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  updateFriend(_id: string) {
    this.updateFriendEmitter.emit(_id);
  }

  deleteFriend(_id: string) {
    this.deleteFriendEmitter.emit(_id);
  }
}
