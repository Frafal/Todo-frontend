import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { JwtAuthenticationService } from '../service/jwt-authentication.service';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private login : LoginComponent,
    // private jwtAuthenticationService : JwtAuthenticationService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.login.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;
  }
}
