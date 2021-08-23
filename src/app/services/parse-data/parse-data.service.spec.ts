import { ParseDataService } from 'src/app/services/parse-data/parse-data.service';

import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';

describe('ParseDataService', () => {
  let arrayToStringService = new ArrayToStringService();
  let service = new ParseDataService(
    arrayToStringService as ArrayToStringService
  );

  beforeEach(() => {
    service = new ParseDataService(
      arrayToStringService as ArrayToStringService
    );
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
