import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerloginComponent } from './ownerlogin/ownerlogin.component';

const routes: Routes =
[
  {path:'',component:OwnerhomeComponent},
  {path:'ownerhome',component:OwnerhomeComponent},
  {path:'ownersignup',component:OwnersignupComponent},
  {path:'ownerlogin',component:OwnerloginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
