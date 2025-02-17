import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUserComponent } from './pages/app-user/app-user.component';
import { DetailsObjectComponent } from './pages/object/details-object/details-object.component';
import { ObjectComponent } from './pages/object/list-objet/list-object.component';


const routes: Routes = [
  {path:"user", component:AppUserComponent},
  {path:"object", component:ObjectComponent},
  {path:"details-object/:id", component:DetailsObjectComponent},
  {path:"**", redirectTo:"user"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
