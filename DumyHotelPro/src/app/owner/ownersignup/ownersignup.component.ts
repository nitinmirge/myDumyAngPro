import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommanApiCallService } from 'src/app/comman/comman-api-call.service';
import { CommanService } from 'src/app/comman/comman.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {

  signUpForm!:FormGroup;
  jorney!:string;
  postResponse:any;
  constructor(private fb:FormBuilder,
               private router:Router,
               private commanService:CommanService,
               private commanApiCallService:CommanApiCallService){}

               ngOnInit(){
                this.jorney=this.commanService.journey;
                console.log('this.journey',this.jorney);

                this.FormDetails();

               }

               FormDetails(){
                this.signUpForm = this.fb.group({
                  name:['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-z]*'),this.commanService.whiteSpaceValidator]],
                  email:['',[]],
                  mobileNumber:['',[]],
                  password:['',[]],
                  gender:['',[]]
                })

               }
                submit(){
                let request = {
                  UserName:this.signUpForm.value.name?.replace(/\s+/g, " ").trim(),
                  Email:this.signUpForm.value.email,
                  Mobile:this.signUpForm.value.mobile,
                  Password:this.signUpForm.value.password,
                  Gender:this.signUpForm.value.gender
                }

                  this.commanApiCallService.postApiCall(this.jorney,request).subscribe(resp=>{
                   console.log(resp);
                   this.postResponse = resp;
                 // })
                //  this.postResponse = await this.commanApiCallService.postApiCall(this.jorney,request).toPromise()
               })
              //  if(this.postResponse?.id){
                   this.router.navigateByUrl('/owner/ownersuccess')
              //  }
               }

               back(){
                this.router.navigateByUrl('owner/ownerhome')
               }
}
