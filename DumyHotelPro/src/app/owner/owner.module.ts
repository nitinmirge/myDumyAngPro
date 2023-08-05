import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';

import { SharedModule } from '../comman/shared/shared.module';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { NewhotelregistrationComponent } from './newhotelregistration/newhotelregistration.component';



@NgModule({
  declarations: [
    OwnerhomeComponent,
    OwnersignupComponent,
    OwnerSuccessComponent,
    NewhotelregistrationComponent,


  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
