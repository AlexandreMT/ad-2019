import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecretSantaComponent} from "./secret-santa.component";
import {RaffleComponent} from "./raffle/raffle.component";


const routes: Routes = [
  {
    path: '',
    component: SecretSantaComponent,
    children: [
      {
        path: 'raffle',
        component: RaffleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretSantaRoutingModule { }
