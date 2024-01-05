import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';
import { inject } from '@angular/core';

export const httpJwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
      // var jwtAuthenticationService : JwtAuthenticationService = new JwtAuthenticationService(http:HttpClient);
     // const username = inject(JwtAuthenticationService.getAuthenticatedUser());
      const jwtservice:JwtAuthenticationService = new JwtAuthenticationService(inject(HttpClient));

      let token = jwtservice.getAuthenticatedToken();
      let username = jwtservice.getAuthenticatedUser();

      if(token && username){
        req = req.clone({
          setHeaders: {
            Authorization: token
          }
        })
      }
  return next(req);
};
