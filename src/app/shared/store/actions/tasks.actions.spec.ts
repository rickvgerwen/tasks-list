import { Task } from '@shared/types/task.type';
import {
  ADD_NEW_TASK_ACTION,
  ADD_NEW_TASK_SUCCESS_ACTION,
  GET_ALL_TASKS_ACTION,
  GET_ALL_TASKS_SUCCESS_ACTION,
  addNewTaskAction,
  addNewTaskSuccessAction,
  getAllTasksAction,
  getAllTasksSuccessAction,
} from './tasks.actions';

describe('Task Actions', () => {
  describe('getAllTasksAction', () => {
    it('should have the correct type', () => {
      const action = getAllTasksAction();

      const expected = GET_ALL_TASKS_ACTION;

      expect(action.type).toEqual(expected);
    });
  });

  describe('getAllTasksSuccessAction', () => {
    it('should have the correct type', () => {
      const action = getAllTasksSuccessAction({ tasks: [] as Task[] });

      const expected = GET_ALL_TASKS_SUCCESS_ACTION;

      expect(action.type).toEqual(expected);
    });
  });

  describe('addNewTaskAction', () => {
    it('should have the correct type', () => {
      const action = addNewTaskAction({ newTask: {} as Task });

      const expected = ADD_NEW_TASK_ACTION;

      expect(action.type).toEqual(expected);
    });
  });

  describe('addNewTaskSuccessAction', () => {
    it('should have the correct type', () => {
      const action = addNewTaskSuccessAction({ newTask: {} as Task });

      const expected = ADD_NEW_TASK_SUCCESS_ACTION;

      expect(action.type).toEqual(expected);
    });
  });
});
