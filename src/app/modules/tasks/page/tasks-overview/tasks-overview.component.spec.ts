import { ComponentFixture, TestBed, fakeAsync, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TasksOverviewComponent } from './tasks-overview.component';
import { of } from 'rxjs';
import { mockTasks } from './mock-tasks';
import { Store } from '@ngrx/store';
import { HighlightFilterPipe } from '@shared/pipes/highlight-filter.pipe';
import { FormsModule } from '@angular/forms';
import { GET_ALL_TASKS_ACTION } from '@shared/store/actions/tasks.actions';

class MockStore {
  select = jasmine.createSpy().and.returnValue(of(mockTasks()));
  dispatch = jasmine.createSpy();
}

describe('TasksComponent', () => {
  let component: TasksOverviewComponent;
  let fixture: ComponentFixture<TasksOverviewComponent>;
  let store: MockStore;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TasksOverviewComponent, HighlightFilterPipe],
      providers: [{ provide: Store, useClass: MockStore }],
      imports: [FormsModule, RouterTestingModule],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksOverviewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as unknown as MockStore;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise the tasks with data from the store', async () => {
    expect(component.tasks$).toBeDefined();
    expect(store.select).toHaveBeenCalledTimes(1);
  });

  it('should dispatch the getAllTasksAction in ngOnInit', () => {
    expect(store.dispatch).toHaveBeenCalledOnceWith(jasmine.objectContaining({ type: GET_ALL_TASKS_ACTION }));
  });

  it('should initialise the searchValue as an empty string', () => {
    expect(component.searchValue).toEqual('');
  });
});
