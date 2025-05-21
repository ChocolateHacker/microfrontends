import { Component, OnInit } from '@angular/core';
import { ITask } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  standalone: true,
  imports: [
    TaskFormComponent,
    NgForOf,
  ],
})
export class TaskListComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onTaskAdded(task: ITask) {
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
  }

  onDeleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}