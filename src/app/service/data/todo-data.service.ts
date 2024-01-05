import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../todo/todo.component';
import { TODO_JPA_API_URL } from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retriveAllTodos(username:string){
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
  }

  retriveTodo(username:string, id:number){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username:string, id:number, todo:Todo){
    return this.http.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo)
  }

  createTodo(username:string, todo:Todo){
    return this.http.post<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos`,todo)
  }

  deleteTodo(username:string, id:number){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }
  
}
