import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

///JB added 20-02-2018
// AGM libraries
import { GeoService } from './services/geo.service';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxPaginationModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    //JB 27-02-2018 Modified API Key
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2nZKKz6bdaYuVUP9VcI1MoNxvzUvFvxY',
      libraries: ["places"]
    }),
    
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},

      { path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuardService]
      },

      { path: 'signup', 
        component: SignupComponent,
        canActivate: [AuthGuardService]
      },


      { path: '', 
        component: LoginComponent,
        canActivate: [AuthGuardService]
      } 

    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    GeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }