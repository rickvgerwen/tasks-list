import { createReducer, on } from '@ngrx/store';
import { getAllTasksSuccessAction } from '../actions/tasks.actions';
import { initialTasksState } from '../state/tasks.state';

export const tasksReducer = createReducer(
  initialTasksState,
  on(getAllTasksSuccessAction, (state, { tasks }) => ({
    ...state,
    tasks,
  })),
);
