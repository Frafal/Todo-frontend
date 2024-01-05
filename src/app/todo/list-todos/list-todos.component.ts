import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../service/data/todo-data.service';
import { Router } from '@angular/router';
import { Todo } from '../todo.component';
import { JwtAuthenticationService } from '../../service/jwt-authentication.service';
import { LoginComponent } from '../../login/login.component';
import { DatePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public todos: Todo[] = [];
  //   new Todo(1,'Learn to Dance', false, new Date()),	
  message!: string;

  constructor(private todoService: TodoDataService
    , private login: LoginComponent, private router: Router) { }

  ngOnInit() {

    this.refreshTodos();

  }

  refreshTodos() {
    let user = this.login.getUsername();
    this.todoService.retriveAllTodos(user).subscribe(
      response => {
        this.todos = response;
      }
    )


  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(this.login.getUsername(), id).subscribe(
      response => {
        // console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
