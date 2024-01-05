import { Component, inject } from '@angular/core';
import {JwtAuthenticationService} from '../service/jwt-authentication.service';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  // public login = inject(LoginComponent)
  // username : string  | undefined = '';
  constructor(

    public login : LoginComponent
    ) { }

  ngOnInit() {
  }

}
