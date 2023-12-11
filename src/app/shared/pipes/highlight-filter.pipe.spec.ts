import { TestBed } from '@angular/core/testing';
import { HighlightFilterPipe } from './highlight-filter.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { Task } from '@shared/types/task.type';
import { mockTasks } from './mock-tasks';

describe('HighlightFilterPipe', () => {
  let pipe: HighlightFilterPipe<Task>;
  let sanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(() => {
    const mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['sanitize', 'bypassSecurityTrustHtml']);

    TestBed.configureTestingModule({
      providers: [HighlightFilterPipe, { provide: DomSanitizer, useValue: mockSanitizer }],
    });

    sanitizer = TestBed.inject(DomSanitizer) as jasmine.SpyObj<DomSanitizer>;
    pipe = new HighlightFilterPipe(sanitizer);
  });

  it('create an instance', () => {
    const pipe = new HighlightFilterPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });

  it('should return the items as is if there is no search text', () => {
    const mockSearchText = '';
    const mockTestTasks: Task[] = mockTasks();

    const expected = mockTestTasks;

    const highlightedItems = pipe.transform(mockTestTasks, mockSearchText);

    expect(highlightedItems).toEqual(expected);
  });

  it('should highlight search text in an array', () => {
    const mockSearchText = 'mock';
    const mockTestTasks: Task[] = mockTasks();
    mockTestTasks[0].description = 'some mock text';

    const expected = mockTestTasks;
    expected[0].description = 'some <strong style="background-color: var(--primary-color)">mock</strong> text';

    sanitizer.bypassSecurityTrustHtml.and.returnValues(
      'some <strong style="background-color: var(--primary-color)">mock</strong> text',
    );

    const highlightedItems = pipe.transform(mockTestTasks, mockSearchText);

    expect(highlightedItems).toEqual([expected[0]]);
  });
});
