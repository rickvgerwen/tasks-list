import { Task } from '@shared/types/task.type';
import { addNewTaskAction, getAllTasksSuccessAction } from '../actions/tasks.actions';
import { TasksState } from '../state/tasks.state';
import { mockTasksFeatureState } from './mock-tasks-state';
import { tasksReducer } from './tasks.reducers';

describe('Tasks Reducers', () => {
  describe('getAllTasksSuccessAction', () => {
    it('should adds tasks to the state', () => {
      const actual = tasksReducer({} as TasksState, getAllTasksSuccessAction({ tasks: mockTasksFeatureState().tasks }));
      const expected: TasksState = {
        tasks: [...mockTasksFeatureState().tasks],
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('addNewTaskAction', () => {
    it('should adds tasks to the state', () => {
      const mockNewTask = {} as Task;

      const actual = tasksReducer(mockTasksFeatureState(), addNewTaskAction({ newTask: mockNewTask }));
      const expected: TasksState = {
        tasks: [...mockTasksFeatureState().tasks, mockNewTask],
      };

      expect(actual).toEqual(expected);
    });
  });
});
