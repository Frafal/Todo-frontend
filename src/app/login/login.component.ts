import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { JwtAuthenticationService } from '../service/jwt-authentication.service';
import { FormsModule } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

export const AUTHENTICATED_USER = 'authenticatedUser';
export const AUTHENTICATED_USERPROFILE = 'authenticatedUserProfile';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit{

  public notLoggedInMessage = 'You are not logged in!';

  // Dependecy injection
  constructor(private router: Router,
    private readonly keycloak: KeycloakService,
     ) { }    

  public ngOnInit() {
    // type userRoles = Array<{id: number, text: string}>;

    if(this.isUserLoggedIn() && this.getUsername() === '') {
      this.refreshUser();
    }
    
  }

  public refreshUser(){
    console.log("refreshUser");
    this.keycloak.loadUserProfile().then(profile => {
      sessionStorage.setItem(AUTHENTICATED_USER, profile.username as string);
      // sessionStorage.setItem(AUTHENTICATED_USERPROFILE, JSON.stringify(profile));

    });
  }

  public initSession() {
    this.keycloak.login();
  }

  public async endSession() {
    if(this.getUsername() != ''){
      sessionStorage.removeItem(AUTHENTICATED_USER)
      // sessionStorage.removeItem(AUTHENTICATED_USERPROFILE)
      this.keycloak.logout();
    } 
    // this.isUserLoggedIn();
  }

  public isUserLoggedIn(){
    return this.keycloak.isLoggedIn();
  }

  public getUsername() : string {
    return sessionStorage.getItem(AUTHENTICATED_USER) ?? ''; 
  }


    // public getUserProfile() : KeycloakProfile{
  //   if(this.isUserLoggedIn() && sessionStorage.getItem(AUTHENTICATED_USERPROFILE) == null) {
  //     console.log(" sono nell'if di userProfile " );
  //     this.refreshUser();
      
  //   }
  //   let profile : KeycloakProfile = JSON.parse(sessionStorage[AUTHENTICATED_USERPROFILE]) ;    
  //   return profile;
    
  // }

  

}
