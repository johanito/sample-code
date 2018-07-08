import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.css']
})
  export class NavbarComponent {

  techId;
  isLoggedIn;
  isCollapsed = true;
  //techId;
  admin$: Observable<firebase.User>;


  constructor(private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth) {

    authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );

      //displaying usersname when logged in
    //  this.techId=this.afAuth.auth.currentUser.uid;
      this.admin$ = afAuth.authState;
  }

  logout(){
    this.techId=this.afAuth.auth.currentUser.uid;
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
