import { RemoveSpacingCapFirstLetterPipe } from 'src/app/pipes/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.pipe';

describe('RemoveSpacingCapFirstLetterPipe', () => {
  const pipe = new RemoveSpacingCapFirstLetterPipe();

  it('transforms "test" to "Test"', () => {
    expect(pipe.transform('test')).toBe('Test');
  });

  it('transforms "test Test" to "TestTest"', () => {
    expect(pipe.transform('test Test')).toBe('TestTest');
  });
});
