import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAllTasksAction } from '@shared/store/actions/tasks.actions';
import { getTaskByIdSelector } from '@shared/store/selectors/tasks.selectors';
import { Task } from '@shared/types/task.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  public task$?: Observable<Task | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getAllTasksAction());

    this.activatedRoute.paramMap.subscribe((params) => {
      const routeTaskId = params.get('id');

      if (routeTaskId) {
        this.task$ = this.store.select(getTaskByIdSelector(+routeTaskId));
      }
    });
  }

  public backToOverview(): void {
    this.router.navigateByUrl('/tasks');
  }
}
