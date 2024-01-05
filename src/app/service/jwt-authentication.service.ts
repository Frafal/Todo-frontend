import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { map } from 'rxjs/operators';

export const AUTHENTICATED_USER = 'authenticatedUser';
export const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  constructor(private http:HttpClient) { }
  // private http = inject(HttpClient);

  executeJwtAuthenticationService(username : string, password : string){

    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    // let headers = new HttpHeaders({Authorization: basicAuthHeaderString})

    return this.http.post<any>
           (`${API_URL}/oidc/authenticate`, {username, password})
           .pipe(
                  map(
                    data => {
                      sessionStorage.setItem(AUTHENTICATED_USER, username);
                      var token = data.access_token.trim().replace(/\n/g, "");
                      sessionStorage.setItem(TOKEN, `Bearer ${token}`);
                      return data;
                    }
                  )
           )
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN)
    } 
    return null; 
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  // executeJwtLogoutService(

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}


// function inject(HttpClient: typeof HttpClient) {
//   throw new Error('Function not implemented.');
// }

