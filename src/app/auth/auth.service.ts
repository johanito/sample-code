import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  //when user login
  public admin: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) {
    this.admin = afAuth.authState;
  }

  //login using email and password
  login(email, password): Observable<any>{
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    );
  }

  //Signup using email and password
  signup(email, password): Observable<any>{
    return Observable.fromPromise(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }


  //function to authenticate to tell user login or not
  isAuthenticated(): Observable<boolean>{
    return this.admin.map(user => user && user.uid !== undefined);
  }

  //logout user
  logout(){
    this.afAuth.auth.signOut();
  }
}
