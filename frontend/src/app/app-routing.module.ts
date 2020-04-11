import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'secret-santa/raffle'
  },
  {
    path: 'secret-santa',
    loadChildren: () => import('./modules/secret-santa/secret-santa.module')
      .then((module) => module.SecretSantaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
