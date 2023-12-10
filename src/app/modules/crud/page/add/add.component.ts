import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addNewTaskAction } from '@shared/store/actions/tasks.actions';
import { TaskPriority } from '@shared/types/task-priority.type';
import { TaskStatus } from '@shared/types/task-status.type';
import { Task } from '@shared/types/task.type';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  public taskStatus: TaskStatus = 'ToDo';
  public taskPriority: TaskPriority = 'medium';

  public newTaskSuccess = false;

  public addTaskFormGroup: FormGroup = this.setInitialFormValues();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router,
  ) {}

  private setInitialFormValues(): FormGroup {
    return this.formBuilder.group({
      taskTitle: new FormControl(null, [Validators.required]),
      taskDescription: new FormControl(null),
      taskStatus: new FormControl(this.taskStatus),
      taskPriority: new FormControl(this.taskPriority),
    });
  }

  public logForm(): void {
    console.log(this.addTaskFormGroup);
  }

  public submitAddTaskForm(): void {
    if (this.addTaskFormGroup.invalid) {
      alert('Please fill in the form correctly.');
      return;
    }

    const randomId = Math.floor(Math.random() * 100000000) + 10000;

    const newTask: Task = {
      id: randomId,
      title: this.addTaskFormGroup.controls['taskTitle'].value,
      description: this.addTaskFormGroup.controls['taskDescription'].value,
      status: this.addTaskFormGroup.controls['taskStatus'].value,
      priority: this.addTaskFormGroup.controls['taskPriority'].value,
    };

    console.log({ newTask });

    this.store.dispatch(addNewTaskAction({ newTask: newTask }));

    this.timeoutTaskSuccess();
  }

  private timeoutTaskSuccess(): void {
    this.newTaskSuccess = true;

    setTimeout(() => {
      this.newTaskSuccess = false;
    }, 3000);
  }

  public backToOverview(): void {
    this.router.navigateByUrl('/tasks');
  }
}
