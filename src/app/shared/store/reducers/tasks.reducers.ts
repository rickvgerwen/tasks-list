import { createReducer, on } from '@ngrx/store';
import { addNewTaskSuccessAction, getAllTasksSuccessAction } from '../actions/tasks.actions';
import { initialTasksState } from '../state/tasks.state';

export const tasksReducer = createReducer(
  initialTasksState,
  on(getAllTasksSuccessAction, (state, { tasks }) => ({
    ...state,
    tasks: tasks,
  })),
  on(addNewTaskSuccessAction, (state, { newTask }) => ({
    ...state,
    tasks: [...state.tasks, newTask],
  })),
);
