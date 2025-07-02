import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  toggle(task: Task) {
    this.taskService.toggleComplete(task.id);
    this.tasks = this.taskService.getTasks();
  }

  delete(task: Task) {
    this.taskService.deleteTask(task.id);
    this.tasks = this.taskService.getTasks();
  }
}
