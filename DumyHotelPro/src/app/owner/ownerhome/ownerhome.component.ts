import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommanApiCallService } from 'src/app/comman/comman-api-call.service';
import { CommanService } from 'src/app/comman/comman.service';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {

  loginForm!:FormGroup
  endPoint!:string
  ownerData!:any
  validUser:boolean=false
  forgetPasswordForm!:FormGroup
  showForgetPasswordForm:boolean=false
  forgotPassword:boolean=false

  constructor(private router:Router,
              private commanService:CommanService,
              private fb:FormBuilder,
              private commanApiService:CommanApiCallService){}


  //      loginFormDetarls(){
  //       this.loginForm = this.fb.group({
  //         username:[],
  //         password:[]
  //       })
  //      }

  //      forgotPasswordFormDetails(){
  //       this.forgetPasswordForm = this.fb.group({
  //         newPassword:[],
  //         confirmPassword:[]
  //       })
  //      }

  //      login(){
  //       console.log(this.loginForm.value);
  //       if(this.loginForm.value.username){
  //         this.commanService
  //       }

  //      }


  login(){
     this.router.navigateByUrl('owner/ownerlogin');
  }
  back(){
        this.router.navigateByUrl('home')
  }
}
