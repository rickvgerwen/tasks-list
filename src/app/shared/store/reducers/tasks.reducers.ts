import { createReducer, on } from '@ngrx/store';
import { addNewTaskAction, getAllTasksSuccessAction } from '../actions/tasks.actions';
import { initialTasksState } from '../state/tasks.state';

export const tasksReducer = createReducer(
  initialTasksState,
  on(getAllTasksSuccessAction, (state, { tasks }) => ({
    ...state,
    tasks,
  })),
  on(addNewTaskAction, (state, { newTask }) => ({
    ...state,
    tasks: [...state.tasks, newTask],
  })),
);
