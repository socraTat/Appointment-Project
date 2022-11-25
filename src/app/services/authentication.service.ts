import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) {}

  signIn(email: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, email, password)) 
  }

  signOut(){
    return from(this.auth.signOut());
  }
}
