import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanService } from '../comman/comman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router,
               private commanService:CommanService){}

   journey(journey:string){
    if(journey === 'admin'){
        this.commanService.journey = 'admin'
        this.router.navigateByUrl('admin')
    }
    else if(journey === 'owner'){
        this.commanService.journey = 'owner'
        this.router.navigateByUrl('owner')
    }
    else{
        this.commanService.journey = 'user'
        this.router.navigateByUrl('user')
    }
   }
}
