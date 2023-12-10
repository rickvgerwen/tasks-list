import { Component, OnInit } from '@angular/core';
import { TasksService } from '@data/services/tasks.service';
import { Task } from '@shared/types/task.type';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public tasks$: Observable<Task[]> = of([]);

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks$ = this.tasksService.getTasks();
  }
}
