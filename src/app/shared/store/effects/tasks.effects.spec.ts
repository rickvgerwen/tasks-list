import { provideMockActions } from '@ngrx/effects/testing';
import { TasksEffects } from './tasks.effects';
import { TasksService } from '@data/services/tasks.service';
import { Task } from '@shared/types/task.type';
import { Observable, of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { mockTasks } from './mock-tasks';
import {
  addNewTaskAction,
  addNewTaskSuccessAction,
  getAllTasksAction,
  getAllTasksSuccessAction,
} from '../actions/tasks.actions';

describe('Tasks Effects', () => {
  let actions$: Observable<unknown>;
  let effects: TasksEffects;
  let tasksService: jasmine.SpyObj<TasksService>;
  let consoleErrorSpy: jasmine.Spy;

  beforeEach(() => {
    const tasksServiceSpy = jasmine.createSpyObj('TasksService', ['getAllTasks', 'addNewTask']);

    TestBed.configureTestingModule({
      providers: [
        TasksEffects,
        provideMockActions(() => actions$),
        { provide: TasksService, useValue: tasksServiceSpy },
      ],
    });

    effects = TestBed.inject(TasksEffects);
    tasksService = TestBed.inject(TasksService) as jasmine.SpyObj<TasksService>;
    consoleErrorSpy = spyOn(console, 'error');
  });

  afterEach(() => {
    consoleErrorSpy.calls.reset();
  });

  describe('getTasks$', () => {
    it('should return the getAllTasksSuccessAction on success', () => {
      const mockedTasks: Task[] = mockTasks();

      tasksService.getAllTasks.and.returnValue(of(mockedTasks));

      actions$ = of(getAllTasksAction());

      effects.getTasks$.subscribe((result) => {
        expect(result).toEqual(getAllTasksSuccessAction({ tasks: mockTasks() }));
      });
    });

    it('should return EMPTY on error', () => {
      tasksService.getAllTasks.and.returnValue(throwError(() => new Error('Internal Server Error')));

      actions$ = of(getAllTasksAction());

      effects.getTasks$.subscribe(() => {
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy.calls.mostRecent().args[0]).toEqual('Internal Server Error');
      });
    });
  });

  describe('addTask$', () => {
    const mockNewTask: Task = {} as Task;

    it('should return the addNewTaskSuccessAction on success', () => {
      tasksService.addNewTask.and.returnValue(of());

      actions$ = of(addNewTaskAction({ newTask: mockNewTask }));

      effects.addTask$.subscribe((result) => {
        expect(result).toEqual(addNewTaskSuccessAction({ newTask: mockNewTask }));
      });
    });

    it('should return EMPTY on error', () => {
      tasksService.addNewTask.and.returnValue(throwError(() => new Error('Internal Server Error')));

      actions$ = of(addNewTaskAction({ newTask: mockNewTask }));

      effects.addTask$.subscribe(() => {
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy.calls.mostRecent().args[0]).toEqual('Internal Server Error');
      });
    });
  });

  // let actions$: ActionsSubject;
  // let effects: TasksEffects;
  // let result: Action[];

  // describe('getTasks$', () => {
  //   beforeEach(() => {
  //     result = [];
  //     actions$ = new ActionsSubject();
  //   });

  //   it('should dispatch the addNewTaskSuccessAction', () => {
  //     effects = new TasksEffects(actions$, newTasksService());

  //     const action = getAllTasksAction();
  //     actions$.next(action);

  //     effects.getTasks$.subscribe((action) => {
  //       result.push(action);
  //     });

  //     expect(result).toEqual([getAllTasksSuccessAction({ tasks: [] as Task[] })]);
  //   });

  //   it('should dispatch an error on failure', () => {
  //     const failingTasksService = newTasksService();
  //     failingTasksService.getAllTasks = () => {
  //       throw new Error('I failed');
  //     };

  //     effects = new TasksEffects(actions$, failingTasksService);

  //     effects.getTasks$.subscribe((action) => {
  //       result.push(action);
  //     });

  //     const action = getAllTasksAction();
  //     actions$.next(action);

  //     expect(result).toEqual([]);
  //   });
  // });
});
