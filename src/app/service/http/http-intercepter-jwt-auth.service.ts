import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtAuthenticationService } from '../jwt-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterJwtAuthService implements HttpInterceptor {

  constructor(private JwtAuthenticationService: JwtAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
      // let username = 'user'
      // let password = 'password'
      // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
      let token = this.JwtAuthenticationService.getAuthenticatedToken();
      let username = this.JwtAuthenticationService.getAuthenticatedUser();

      if(token && username){
        request = request.clone({
          setHeaders: {
            Authorization: token
          }
        })
      }
      
      return next.handle(request);
      
  }
}
