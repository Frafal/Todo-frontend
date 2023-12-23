import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  // Dependecy injection
  constructor(private router: Router,
     private hardcodededAuthenticationService : HardcodedAuthenticationService,
     private basicAuthenticationService : BasicAuthenticationService,
     private jwtAuthenticationService : JwtAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {

    // console.log(this.username, this.password);

    if(this.hardcodededAuthenticationService.authenticate(this.username,this.password)) {
      //redirect to welcome page (Dependency injection)
      
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    console.log(this.username, this.password);
      this.basicAuthenticationService
      .executeBasicAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome',this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
  }

  handleJwtAuthLogin() {
    console.log(this.username, this.password);
      this.jwtAuthenticationService
      .executeJwtAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome',this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
      
  }

}
