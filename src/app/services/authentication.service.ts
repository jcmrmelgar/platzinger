import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private aungularFireAuth: AngularFireAuth) { }

  loginWhithEmail(email:string, password: string){
    return this.aungularFireAuth.auth.signInWithEmailAndPassword(email,password);
  }

  registerWhithEmail(email:string, password: string){
    return this.aungularFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  registerWhithFb(){
    return this.aungularFireAuth.auth.signInWithPopup( new auth.FacebookAuthProvider());
  }

  getStatus(){
    return this.aungularFireAuth.authState;
  }

  logOut(){
    return this.aungularFireAuth.auth.signOut();
  }
}
