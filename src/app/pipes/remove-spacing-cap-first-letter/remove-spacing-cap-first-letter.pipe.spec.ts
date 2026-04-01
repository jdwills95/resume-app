import { RemoveSpacingCapFirstLetterPipe } from './remove-spacing-cap-first-letter.pipe';

describe('RemoveSpacingCapFirstLetterPipe', () => {
  let pipe: RemoveSpacingCapFirstLetterPipe;

  beforeEach(() => {
    pipe = new RemoveSpacingCapFirstLetterPipe();
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should remove spaces and capitalize each word', () => {
    expect(pipe.transform('hello angular world')).toBe('HelloAngularWorld');
  });

  it('should normalize mixed-case input', () => {
    expect(pipe.transform('aNgUlAr tEsTiNg')).toBe('AngularTesting');
  });
});
