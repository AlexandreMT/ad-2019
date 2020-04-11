import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SecretSantaService} from "../../../core/http/services/secret-santa.service";
import {SubscriptionManager} from "../../../core/classes/SubscriptionManager";
import {FriendInterface} from "../../../core/interfaces/FriendInterface";

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.css']
})
export class RaffleComponent implements OnInit {
  public loadingRaffle = false;
  private subscriptionManager = new SubscriptionManager();

  public friends: FriendInterface[] = [];

  @Output() updateFriendEmitter = new EventEmitter();

  constructor(
    private secretSantaService: SecretSantaService
  ) { }

  ngOnInit(): void {
    this.listFriends();
  }

  listFriends(): void {
    this.subscriptionManager.add(
      this.secretSantaService.listFriends()
        .subscribe((res) => {
          this.friends = res;
          this.subscriptionManager.removeByTag('listFriendsSub');
        }, () => {
          this.subscriptionManager.removeByTag('listFriendsSub');
        }),
      'listFriendsSub'
    );
  }

  postFriend({ friend, action } : { friend: FriendInterface, action: string }): void {
    action === 'new' ? this.newFriend(friend) : this.updateFriend(friend);
  }

  newFriend(friend: FriendInterface): void {
    this.subscriptionManager.add(
      this.secretSantaService.postFriend(friend)
        .subscribe((res: FriendInterface) => {
          const userExists = this.friends.find((_friend) => _friend._id === res._id);
          if (userExists) {
            return alert('Já existe usuário com esse e-mail.')
          }
  
          this.friends.push({ _id: res._id, name: res.name, email: res.email });
          this.subscriptionManager.removeByTag('postFriendSub');
        }, () => {
          this.subscriptionManager.removeByTag('postFriendSub');
        }),
      'postFriendSub'
    );
  }

  updateFriend(friend: FriendInterface): void {
    this.subscriptionManager.add(
      this.secretSantaService.putFriend(friend)
        .subscribe(() => {
          const friendIndex = this.friends.findIndex((_friend) => _friend._id === friend._id);
          this.friends[friendIndex] = friend;
          this.subscriptionManager.removeByTag('updateFriend');
          alert('Amigo atualizado.')
        }, () => {
          alert('Erro ao atualizar amigo.')
          this.subscriptionManager.removeByTag('updateFriend');
        }),
      'updateFriend'
    );
  }

  updateFriendFormFiller(_id: string): void {
    const friend = this.friends.find((friend) => friend._id === _id);
    this.updateFriendEmitter.emit(friend);
  }

  deleteFriend(_id: string): void {
    this.subscriptionManager.add(
      this.secretSantaService.deleteFriend(_id)
        .subscribe(() => {
          this.friends = this.friends.filter((friend) => friend._id !== _id);
          this.subscriptionManager.removeByTag('deleteFriendSub');
        }, () => {
          alert('Erro ao deletar amigo.')
          this.subscriptionManager.removeByTag('deleteFriendSub');
        }),
      'deleteFriendSub'
    );
  }

  raffle(): void {
    this.loadingRaffle = true;
    this.subscriptionManager.add(
      this.secretSantaService.raffle()
        .subscribe(() => {
          this.loadingRaffle = false;
          alert('Sorteio realizado e e-mails enviados.')
          this.subscriptionManager.removeByTag('raffleSub');
        }, () => {
          alert('Erro ao realizar sorteio.')
          this.loadingRaffle = false;
          this.subscriptionManager.removeByTag('raffleSub');
        }),
      'raffleSub'
    );
  }

  hasMinOfFriends(): boolean {
    return this.friends.length >= 3;
  }
}
