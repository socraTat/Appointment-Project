import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { from, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /*Current User which is observable*/

  currentUsers = authState(this.auth);


  constructor(private auth: Auth) {}

  signIn(email: string, password: string){
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signOut(){
    return from(this.auth.signOut());
  }

  signUp(name: string, email: string, password: string){
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({ user }) => updateProfile(user, {displayName: name }))
    );
  }
}
