import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) { }
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!:number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private login:LoginComponent,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', '', new Date(), false);
    if(this.id != -1){
      this.todoService.retriveTodo(this.login.getUsername(), this.id).subscribe(
          data => this.todo = data
            // ,response => console.log(response)
      )
    }
  }

  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo(this.login.getUsername(), this.todo).subscribe(
        data => 
          this.router.navigate(['todos'])

      )
    } else {
      this.todoService.updateTodo(this.login.getUsername(), this.id, this.todo).subscribe(
        data => 
          this.router.navigate(['todos'])
      )
    }
    
  }

}
