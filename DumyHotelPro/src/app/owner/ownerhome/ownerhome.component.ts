import { Component } from '@angular/core';
import { FormBuilder, FormGroup,} from '@angular/forms';
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
          this.forgotPassword = this.commanService.forgotPassword;
          this.userName = this.commanService.userName;
          console.log('endPoint....',this.endPoint);
          this.loginFormDetarls();

        }

       loginFormDetarls(){
        this.loginForm = this.fb.group({
          userName:[],
          password:[]
        })
       }

       forgotPasswordFormDetails(){
        this.forgetPasswordForm = this.fb.group({
          newPassword:[],
          confirmPassword:[]
        })
       }

       login(){
        console.log(this.loginForm.value);

        if(this.loginForm.value.username){
          this.commanService.userName = this.loginForm.value.userName;
        }

        if(this.ownerData){
              this.ownerData.find((ownerData:any) => {
                if(ownerData.userName === this.loginForm.value.userName && ownerData.password === this.loginForm.value.password){
                  this.validUser = true;
                }
              });
              if(this.validUser){
                   this.router.navigateByUrl('/owner/ownerSuccess')
              }
              else{
                alert('Username or Password is incorrect')
                // this.commanService.warningToaster('password is incorrct')
                // {
                //   timeOut: 10000,
                //   positionClass: 'toast-top-center'
                //  })

                //   this.commonService.forgotPassword = true;
                //   this.router.navigateByUrl('owner/ownerHome');
              }
        }

       }

       back(){
        this.router.navigateByUrl('home')
  }


  async getOwnerApiData() {
    // this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse=>{
    //   this.ownerData = getOwnerResponse;
    // })
    this.ownerData = await this.commanApiCallService.getApiCall(this.endPoint).toPromise()
    console.log('this.ownerData', this.ownerData);


  }

  // isValidUser(){
  //   this.ownerData.forEach((ownerData:any)=>{
  //     if(ownerData.UserName === this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password) {
  //       this.validUser = true;
  //     }
  //   });
  // }


  forgetPasswod(){
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgotPasswordFormDetails();
  }

  submit(){
     this.updatePassword();
     this.showForgetPasswordForm = !this.forgetPasswordForm;
     this.forgotPassword = false;
  }
  async updatePassword(){
    var user :any;
    this.ownerData.forEach((data:any) =>{
      if(data.username === this.userName){
         user = data;
      }
    })
    if(user){
      let request = {
        Password:this.forgetPasswordForm.value.newPassword
      }

      await this.commanApiCallService.patchApiCall(this.endPoint,request,user.id).toPromise()
    }
    else{
      alert('User is not exist')
    }
  }
}
