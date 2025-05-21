import { Injectable } from '@angular/core';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: ITask[] = [];

  public getTasks(): ITask[] {
    return this.tasks;
  }

  public addTask(task: ITask): void {
    this.tasks.push(task);
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}