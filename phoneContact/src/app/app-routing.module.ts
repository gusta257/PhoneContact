import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'people', loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule) },
  { path: 'information', loadChildren: () => import('./pages/information/information.module').then(m => m.InformationModule) },
  { path: '**', redirectTo: '/people', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
