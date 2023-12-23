import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { Todo } from '../todo/todo.component';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[];
  //   new Todo(1,'Learn to Dance', false, new Date()),	
  message : string;
  
  constructor( private todoService:TodoDataService , private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('user').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo('user', id).subscribe(
      response => {
        // console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id:number){
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
