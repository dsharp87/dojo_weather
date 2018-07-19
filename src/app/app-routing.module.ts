import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'seattle',
    pathMatch: 'full',
  },
  {
    path:':location',
    pathMatch: 'full',
    component: LocationComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
