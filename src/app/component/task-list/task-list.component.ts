import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
tasks:Task[]=[];
inputtask:string = "";
  constructor() { }

  ngOnInit(): void {
    this.tasks=[
      {
        content:'First Task',
        completed:false
      },
      {
        content:'Second Task',
        completed:true
      }
    ]
  }
  toggleDone (id:number) {
    this.tasks.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
  deleteTodo (id:number) {
    this.tasks = this.tasks.filter((v, i) => i !== id);
  }
  addTodo () {
    this.tasks.push({
      content: this.inputtask,
      completed: false
    });

    this.inputtask = "";
  }

}
