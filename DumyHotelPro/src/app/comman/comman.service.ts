import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanService {
    journey!:string;
    userName!:string;
    forgotPassword!:boolean
  constructor() { }

  whiteSpaceValidator(nameFieldValue:any){
    let data = nameFieldValue.value;
    let newdata = data?.trim();
    let isNotValid = data.length != newdata.length;

    return isNotValid ? {whiteSpace:true}:null;
  }
}
