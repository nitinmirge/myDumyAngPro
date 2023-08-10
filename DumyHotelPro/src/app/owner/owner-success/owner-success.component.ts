import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanApiCallService } from 'src/app/comman/comman-api-call.service';
import { CommanService } from 'src/app/comman/comman.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {
  hotelDetails:any;
  userName!: string;
  userHotelDetails:any[]=[];
    constructor(private router:Router,
                private commonApiCallService:CommanApiCallService,
                private commonService:CommanService){}

   ngOnInit(){
    console.log('onInit called..');
    this.userName = this.commonService.userName
   }

  hotelRegistration(){
    this.router.navigateByUrl('/owner/newhotelregistration')
  }
  myHotelDetails(){
      let endpoint = 'hotelDetails';

      this.commonApiCallService.getApiCall(endpoint).subscribe(data =>{
        this.hotelDetails = data;
      })
      console.log('hotelDetails..',this.hotelDetails);

      if(this.hotelDetails){
        this.hotelDetailsByOwner();
      }
  }

  hotelDetailsByOwner(){
    this.hotelDetails.forEach((element:any) =>{
      if(element.ownerName === this.userName){
        this.userHotelDetails.push(element)
      }
    })
    console.log('this.userHotelDetails',this.userHotelDetails);

  }
}
