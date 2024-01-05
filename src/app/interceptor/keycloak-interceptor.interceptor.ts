import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

export const keycloakInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const keycloak: KeycloakService = inject(KeycloakService);
  // const login:LoginComponent = new LoginComponent();

  if (keycloak.isLoggedIn()) {
    let token = "Bearer ";
    token += keycloak.getKeycloakInstance().token?.trim().replace(/\n/g, "");
    req = req.clone({
      setHeaders: {
        Authorization: token
      }
    });

  }

  // console.log("request : " + req.headers.get("Authorization"));
  return next(req);

};


