import { allTasksSelector, getTaskByIdSelector, tasksFeatureStateSelector } from './tasks.selectors';
import { mockTasksFeatureState } from './mock-tasks-state';
import { AppState } from '../reducers/app.reducers';

describe('Task Selectors', () => {
  let mockState: AppState;

  beforeEach(() => {
    mockState = {
      tasks: mockTasksFeatureState(),
    };
  });

  describe('tasksFeatureStateSelector', () => {
    it('should return the tasks feature state', () => {
      const actual = tasksFeatureStateSelector(mockState);
      const expected = mockState.tasks;

      expect(actual).toEqual(expected);
    });
  });

  describe('allTasksSelector', () => {
    it('should return all tasks in the state', () => {
      const actual = allTasksSelector().projector(mockState.tasks);
      const expected = mockState.tasks.tasks;

      expect(actual).toEqual(expected);
    });
  });

  describe('getTaskByIdSelector', () => {
    it('should return tasks with the corresponding id', () => {
      const mockId = mockTasksFeatureState().tasks[3].id;

      const actual = getTaskByIdSelector(mockId).projector(mockState.tasks);
      const expected = mockState.tasks.tasks[3];

      expect(actual).toEqual(expected);
    });
  });
});
