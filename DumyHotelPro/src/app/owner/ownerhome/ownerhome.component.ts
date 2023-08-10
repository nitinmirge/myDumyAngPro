import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
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
  userName!:string

  constructor(private router:Router,
              private commanService:CommanService,
              private fb:FormBuilder,
              private commanApiCallService:CommanApiCallService){}

        ngOnInit(){
          this.endPoint = this.commanService.journey;
          // this.forgotPassword = this.commanService.forgotPassword;
          // this.userName = this.commanService.userName;
          console.log('endPoint....',this.endPoint);
          this.loginFormDetarls();

        }

       loginFormDetarls(){
        this.loginForm = this.fb.group({
          userName:['',[Validators.required]],
          password:['',[Validators.required]]
        })
       }

      //  forgotPasswordFormDetails(){
      //   this.forgetPasswordForm = this.fb.group({
      //     newPassword:[],
      //     confirmPassword:[]
      //   })
      //  }

       login(){
        console.log(this.loginForm.value);
        this.commanService.userName=this.loginForm.value.userName
        this.getOwnerApiData();
        console.log('this.ownerData',this.ownerData);
        if(this.ownerData){
          this.isValidUser();
          if(this.validUser){
            this.router.navigateByUrl('owner/ownersuccess')
         }
          else{
            this.router.navigateByUrl('owner/ownerhome')
          }
        }

         }

       back(){
        this.router.navigateByUrl('home')
        }


   getOwnerApiData() {
    this.commanApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
      this.ownerData = getOwnerResponse;
    })
      console.log('this.ownerData..',this.ownerData);

   }
  isValidUser(){

    this.ownerData.forEach((element:any) => {
      if( element.UserName === this.loginForm.value.userName &&
        element.Password === this.loginForm.value.password){

          this.validUser = true;

           }

          });
          return

  }

}
