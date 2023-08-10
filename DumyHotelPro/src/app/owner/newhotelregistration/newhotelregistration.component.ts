import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommanApiCallService } from 'src/app/comman/comman-api-call.service';
import { CommanService } from 'src/app/comman/comman.service';


@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss']
})
export class NewhotelregistrationComponent {

  hotelRegistrationForm!:FormGroup;

  constructor(private router:Router,
              private commonApiCallService:CommanApiCallService,
              private formBuilder:FormBuilder,
              private commonService:CommanService){}

  ngOnInit(){
     this.myOwnerRegistration();
  }

  myOwnerRegistration(){
    this.hotelRegistrationForm = this.formBuilder.group({
         ownerName:['',[Validators.required,Validators.minLength(5), Validators.pattern('[A-za-z ]*$')]],
         ownerPassword:['',[Validators.required,]],
         ownerContact:['',[Validators.required, Validators.pattern('[0-9]*$')]],
         hotelName:['',[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
         hotelAddress:['',[Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-z0-9 ]*$')]],
         hotelContact:['',[Validators.required,Validators.pattern('[0-9]*$')]],
         hotelMenu:['',[Validators.required,Validators.minLength(2)]],
         roomsAvailable:['',[Validators.required, Validators.pattern('[0-9]*$')]]

    })
  }
     back(){

     }
     submitDetails(){
      let endpoint = 'hotelDetails';
          console.log('form Data...',this.hotelRegistrationForm.value);

      let request = {
        ownerName:this.hotelRegistrationForm.value.ownerName,
        ownerContact:this.hotelRegistrationForm.value.ownerContact,
        hotelName:this.hotelRegistrationForm.value.hotelName,
        hotelContact:this.hotelRegistrationForm.value.hotelContact,
        hotelAddress:this.hotelRegistrationForm.value.hotelAddress,
        hotelMenu:this.hotelRegistrationForm.value.hotelMenu,
        roomsAvailabel:this.hotelRegistrationForm.value.roomsAvailabel,
        password:this.hotelRegistrationForm.value.ownerPassword
      }

      this.commonApiCallService.postApiCall(endpoint,request).subscribe((resp:any)=>{
        console.log(resp);

      })
      this.router.navigateByUrl('owner/ownersuccess')
     }
}
