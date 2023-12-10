import { HighlightFilterPipe } from './highlight-filter.pipe';

describe('HighlightFilterPipe', () => {
  const mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['sanitize', 'bypassSecurityTrustHtml']);

  it('create an instance', () => {
    const pipe = new HighlightFilterPipe(mockSanitizer);
    expect(pipe).toBeTruthy();
  });
});
