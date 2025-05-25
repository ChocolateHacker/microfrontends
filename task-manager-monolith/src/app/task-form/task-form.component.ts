import { Component, EventEmitter, Output } from '@angular/core';
import { ITask } from '../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
  ],
})
export class TaskFormComponent {
  @Output()
  public taskAdded: EventEmitter<ITask> = new EventEmitter<ITask>();

  public newTask: ITask = { id: 0, title: '', completed: false };

  public onSubmit(): void {
    this.taskAdded.emit({ ...this.newTask, id: Date.now() });
    this.newTask = { id: 0, title: '', completed: false };
  }
}