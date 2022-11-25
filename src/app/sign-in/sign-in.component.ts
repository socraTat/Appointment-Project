import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  

  formSubmit(){
   /*ONPROGRESSS*/

   if(!this.signInForm.valid){
    return;
   }


   const {email, password} = this.signInForm.value;
   this.authServ.signIn(email!, password!).pipe(
    this.toast.observe({
      success: 'Sign In Successfully!',
      loading: 'Logging In...',
      error: 'There was some error'
    })
   ).subscribe(() =>{
    this.route.navigate(['main-page']);
   })
    
    
  }



  constructor(private authServ : AuthenticationService, private route: Router, private toast: HotToastService){ }

  ngOnInit(): void {
  }

  

}
