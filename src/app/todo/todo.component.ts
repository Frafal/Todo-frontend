import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', '', new Date(), false);
    if(this.id != -1){
      this.todoService.retriveTodo('user', this.id).subscribe(
          data => this.todo = data
            // ,response => console.log(response)
      )
    }
  }

  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('user', this.todo).subscribe(
        data => 
          this.router.navigate(['todos'])

      )
    } else {
      this.todoService.updateTodo('user', this.id, this.todo).subscribe(
        data => 
          this.router.navigate(['todos'])
      )
    }
    
  }

}
