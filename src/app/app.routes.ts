import { Routes } from '@angular/router';
import { RouteGuardService } from './service/route-guard.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListTodosComponent } from './todo/list-todos/list-todos.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},  //canActivate, RouteGuardService
    {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
    {path:'login', component: LoginComponent},
    {path:'logout', component: LogoutComponent},
    {path:'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
    {path:'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]}

];
