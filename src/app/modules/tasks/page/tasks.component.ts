import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllTasksAction } from '@shared/store/actions/tasks.actions';
import { allTasksSelector } from '@shared/store/selectors/tasks.selectors';
import { Task } from '@shared/types/task.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public tasks$: Observable<Task[]> = this.store.select(allTasksSelector);

  public searchValue = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getAllTasksAction());
  }
}
