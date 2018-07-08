import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    //authentication status of the current user
    //to redirect anonymous user when access links inside website
    return this.auth.admin.map(admin =>{
      if (admin) return true;

      this.router.navigate(['/login']);
      return false;
    })
  }

}
