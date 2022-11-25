import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastClose, HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from '../services/authentication.service';


/*CROSSFIELD Validators*/

export function passwordMatchValidator(): ValidatorFn { 
  return (control: AbstractControl) : ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return{
        passwordsDontMatch: true
      }
    }

    return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
  },{ validators: passwordMatchValidator()}
  );

  constructor(private authServ: AuthenticationService, private route: Router, private toast: HotToastService) { }

  ngOnInit(): void {
  }

  get name(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }


  signUpSubmit(){
    if(!this.signUpForm.valid){
      return;
    }

    const {name, email, password} = this.signUpForm.value;
    this.authServ.signUp(name!, email!, password!).pipe(
      this.toast.observe({
        success: 'Sign Up Completed!',
        loading: 'Submitting Form Please Wait',
        error: ({message}) => `${message}`
      })
    ).subscribe(() => {
      this.route.navigate(['/sign-in']);
    })
  }

}
