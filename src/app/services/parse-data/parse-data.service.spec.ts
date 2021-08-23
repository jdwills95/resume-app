import { ParseDataService } from 'src/app/services/parse-data/parse-data.service';

import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';

describe('ParseDataService', () => {
  const mockAssignmentData = [
    {
      endDate: 'test01EndDate',
      startDate: 'test01StartDate',
      title: 'test01Title',
      employer: 'test01Employer',
      desc: 'test01Desc',
      environments: ['test01Evn01', 'test01Evn02'],
    },
    {
      endDate: 'test02EndDate',
      startDate: 'test02StartDate',
      title: 'test02Title',
      employer: 'test02Employer',
      desc: 'test02Desc',
      environments: ['test02Evn01', 'test02Evn02'],
    },
  ];

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
    const results = service.setAssignments(mockAssignmentData);

    expect(results[0].endDate).toBe('test01EndDate');
    expect(results[0].startDate).toBe('test01StartDate');
    expect(results[0].title).toBe('test01Title');
    expect(results[0].employer).toBe('test01Employer');
    expect(results[0].desc).toBe('test01Desc');
    expect(results[0].environments).toBe('test01Evn01, test01Evn02');

    expect(results[1].endDate).toBe('test02EndDate');
    expect(results[1].startDate).toBe('test02StartDate');
    expect(results[1].title).toBe('test02Title');
    expect(results[1].employer).toBe('test02Employer');
    expect(results[1].desc).toBe('test02Desc');
    expect(results[1].environments).toBe('test02Evn01, test02Evn02');
  });
});
