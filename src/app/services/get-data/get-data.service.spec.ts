import { TestBed } from '@angular/core/testing';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

import { ParseDataService } from 'src/app/services/parse-data/parse-data.service';

describe('GetDataService', () => {
  let service = GetDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ParseDataService],
    }).compileComponents();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
