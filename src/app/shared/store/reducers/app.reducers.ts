import { ActionReducerMap } from '@ngrx/store';
import { TasksState, tasksFeatureKey } from '../state/tasks.state';
import { tasksReducer } from './tasks.reducers';

export interface AppState {
  [tasksFeatureKey]: TasksState;
}

export const appReducers: ActionReducerMap<AppState> = {
  [tasksFeatureKey]: tasksReducer,
};
