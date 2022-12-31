import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';

describe('ArrayToStringService', () => {
  const service = new ArrayToStringService();

  const testArray = ['test01', 'test02'];

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('transforms array to string', () => {
    expect(service.arrayToString(testArray)).toBe('test01, test02');
  });
});
