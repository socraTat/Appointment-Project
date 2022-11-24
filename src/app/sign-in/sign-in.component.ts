import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  formSubmit(){
   /*ONPROGRESSS*/
    
    
  }



  constructor() { }

  ngOnInit(): void {
  }

  

}
