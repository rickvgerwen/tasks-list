import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksService } from '@data/services/tasks.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, EMPTY } from 'rxjs';
import {
  addNewTaskAction,
  addNewTaskSuccessAction,
  getAllTasksAction,
  getAllTasksSuccessAction,
} from '../actions/tasks.actions';

@Injectable()
export class TasksEffects {
  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllTasksAction),
      mergeMap(() => {
        return this.tasksService.getAllTasks().pipe(
          map((tasks) => getAllTasksSuccessAction({ tasks: tasks })),
          catchError((e: HttpErrorResponse) => {
            console.error(e);
            return EMPTY;
          }),
        );
      }),
    ),
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addNewTaskAction),
      mergeMap(({ newTask }) => {
        return this.tasksService.addNewTask(newTask).pipe(
          map((newTask) => addNewTaskSuccessAction({ newTask: newTask })),
          catchError((e: HttpErrorResponse) => {
            console.error(e);
            return EMPTY;
          }),
        );
      }),
    ),
  );

  constructor(
    private actions$: Actions,
    private tasksService: TasksService,
  ) {}
}
