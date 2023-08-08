import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommanApiCallService } from 'src/app/comman/comman-api-call.service';


@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss']
})
export class NewhotelregistrationComponent {

  hotelRegistrationForm!:FormGroup;

  constructor(private router:Router,
              private commonApiCallService:CommanApiCallService,
              private formBuilder:FormBuilder){}

  // ngOnInit(){
  //    this.myOwnerRegistration();
  // }

  // myOwnerRegistration(){
  //   this.hotelRegistrationForm = this.formBuilder.group({

  //   })
  // }

}
