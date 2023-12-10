import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { TasksState, tasksFeatureKey } from '../state/tasks.state';
import { Task } from '@shared/types/task.type';

export const tasksFeatureStateSelector = createFeatureSelector<TasksState>(tasksFeatureKey);

export const allTasksSelector = (): MemoizedSelector<object, Task[]> => {
  return createSelector(tasksFeatureStateSelector, (state) => state.tasks);
};

export const getTaskByIdSelector = (taskId: Task['id']): MemoizedSelector<object, Task | undefined> => {
  return createSelector(tasksFeatureStateSelector, (state) => state.tasks.find((task) => task.id === taskId));
};
