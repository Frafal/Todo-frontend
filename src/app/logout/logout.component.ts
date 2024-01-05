import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';
import { LoginComponent } from '../login/login.component';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private login : LoginComponent) { }

  ngOnInit() {
    this.login.endSession();
  }

}
