import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaskDetailComponent } from './task-detail.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { initialTasksState } from '@shared/store/state/tasks.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  beforeEach(waitForAsync(() => {
    mockActivatedRoute = {
      paramMap: of({
        get: (key: string) => {
          return '42';
        },
      } as ParamMap),
    };
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailComponent],
      providers: [
        provideMockStore({ initialState: initialTasksState }),
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
      imports: [FormsModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
