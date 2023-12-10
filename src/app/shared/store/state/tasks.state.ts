import { Task } from '@shared/types/task.type';

export const tasksFeatureKey = 'tasks';

export interface TasksState {
  tasks: Task[];
}

export const initialTasksState: TasksState = {
  tasks: [],
};
