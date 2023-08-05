import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {

    constructor(private router:Router){}

  hotelRegistration(){
    this.router.navigateByUrl('/owner/newhotelregistration')
  }
}
