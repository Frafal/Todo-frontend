import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

//wellcame
const routes: Routes = [
  {path:'', component: LoginComponent},  //canActivate, RouteGuardService
  {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  {path:'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  //Deve essere l'ultima altrimenti metcha prima della prossima rotta, cioè non dovrebbe funzionare la rotta che segue.
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
