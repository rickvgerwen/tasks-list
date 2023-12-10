import { TaskPriority } from './task-priority.type';
import { TaskStatus } from './task-status.type';

export type Task = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
};
