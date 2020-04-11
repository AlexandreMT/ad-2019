import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretSantaRoutingModule } from './secret-santa-routing.module';
import { SecretSantaComponent } from './secret-santa.component';
import { RaffleComponent } from './raffle/raffle.component';
import { FriendFormComponent } from './raffle/components/friend-form/friend-form.component';
import { FriendItemComponent } from './raffle/components/friend-item/friend-item.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SecretSantaComponent,
    RaffleComponent,
    FriendFormComponent,
    FriendItemComponent
  ],
  imports: [
    CommonModule,
    SecretSantaRoutingModule,
    ReactiveFormsModule
  ]
})
export class SecretSantaModule { }
