import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TasksState, tasksFeatureKey } from '../state/tasks.state';

export const tasksFeatureStateSelector = createFeatureSelector<TasksState>(tasksFeatureKey);

export const allTasksSelector = createSelector(tasksFeatureStateSelector, (state) => state.tasks);
