import { GetDataService } from 'src/app/services/get-data/get-data.service';

import { ParseDataService } from 'src/app/services/parse-data/parse-data.service';
import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';

describe('GetDataService', () => {
  let arrayToStringService = new ArrayToStringService();
  let parseDataService = new ParseDataService(
    arrayToStringService as ArrayToStringService
  );
  let service = new GetDataService(parseDataService as ParseDataService);

  beforeEach(() => {
    service = new GetDataService(parseDataService as ParseDataService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
