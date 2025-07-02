import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [
    FormsModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  title = '';
  category = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if(!this.title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      category: this.category,
      completed: false
    };

    this.taskService.addTask(newTask);
    this.title = '';
    this.category = '';
  }
}
