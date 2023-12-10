import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TasksService } from './tasks.service';

import { mockServerData } from './mock-data-tasks';
import { Task } from '@shared/types/task.type';
import { of } from 'rxjs';

describe('TasksService', () => {
  let service: TasksService;
  let httpController: HttpTestingController;

  let mockTasks: Task[];

  const url = 'http://localhost:3000';
  const tasks_endpoint = '/tasks';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(TasksService);
    httpController = TestBed.inject(HttpTestingController);

    mockTasks = mockServerData.tasks as Task[];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAlltasks', () => {
    it('should get all tasks', () => {
      const expected = mockTasks;

      service.getAllTasks().subscribe((response) => {
        expect(response).toEqual(expected);
      });

      const request = httpController.expectOne({
        method: 'GET',
        url: `${url}${tasks_endpoint}`,
      });

      request.flush(expected);
    });
  });

  describe('getTaskById', () => {
    const mockId = mockServerData.tasks[2].id;

    it('should the task with the matching id', () => {
      const expected = mockServerData.tasks[2] as Task;

      service.getTaskById(mockId).subscribe((response) => {
        expect(response).toEqual(expected);
      });

      const request = httpController.expectOne({
        method: 'GET',
        url: `${url}${tasks_endpoint}/${mockId}`,
      });

      request.flush(expected);
    });
  });

  describe('addNewTask', () => {
    const mockNewTask: Task = {
      id: 4242,
      title: 'Test a task',
      description: 'Testing',
      status: 'Doing',
      priority: 'high',
    };

    it('should add a new task', () => {
      const expected = mockNewTask;

      service.addNewTask(mockNewTask).subscribe((response) => {
        expect(response).toEqual(expected);
      });

      const request = httpController.expectOne({
        method: 'POST',
        url: `${url}${tasks_endpoint}`,
      });

      request.flush(expected);
    });
  });
});
