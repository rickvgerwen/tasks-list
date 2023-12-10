import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksOverviewComponent } from './tasks-overview.component';

describe('TasksComponent', () => {
  let component: TasksOverviewComponent;
  let fixture: ComponentFixture<TasksOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksOverviewComponent],
    });
    fixture = TestBed.createComponent(TasksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
