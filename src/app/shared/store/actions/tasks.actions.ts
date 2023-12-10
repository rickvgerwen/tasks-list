import { createAction, props } from '@ngrx/store';
import { Task } from '@shared/types/task.type';

const tasksActionPrefix = '[Tasks]';

export const GET_ALL_TASKS_ACTION = `${tasksActionPrefix} get tasks`;
export const GET_ALL_TASKS_SUCCESS_ACTION = `${GET_ALL_TASKS_ACTION} success`;
export const ADD_NEW_TASK_ACTION = `${tasksActionPrefix} add new task`;
export const ADD_NEW_TASK_SUCCESS_ACTION = `${ADD_NEW_TASK_ACTION} success`;

export const getAllTasksAction = createAction(GET_ALL_TASKS_ACTION);

export const getAllTasksSuccessAction = createAction(
  GET_ALL_TASKS_SUCCESS_ACTION,
  props<{
    tasks: Task[];
  }>(),
);

export const addNewTaskAction = createAction(ADD_NEW_TASK_ACTION, props<{ newTask: Task }>());

export const addNewTaskSuccessAction = createAction(ADD_NEW_TASK_SUCCESS_ACTION);
