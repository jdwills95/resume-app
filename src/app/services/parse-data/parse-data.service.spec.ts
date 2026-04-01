import { TestBed } from '@angular/core/testing';

import { IAssignmentJSON } from 'src/app/interfaces/assignment';
import { IOther } from 'src/app/interfaces/other';
import { ISkillJson } from 'src/app/interfaces/skills';
import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';
import { ParseDataService } from './parse-data.service';

describe('ParseDataService', () => {
  let service: ParseDataService;
  let arrayToStringServiceSpy: jasmine.SpyObj<ArrayToStringService>;

  beforeEach(() => {
    arrayToStringServiceSpy = jasmine.createSpyObj<ArrayToStringService>(
      'ArrayToStringService',
      ['arrayToString']
    );
    arrayToStringServiceSpy.arrayToString.and.callFake((value: string[]) =>
      value.join(', ')
    );

    TestBed.configureTestingModule({
      providers: [
        ParseDataService,
        { provide: ArrayToStringService, useValue: arrayToStringServiceSpy },
      ],
    });

    service = TestBed.inject(ParseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map assignments and format environments as a string', () => {
    const assignments: IAssignmentJSON[] = [
      {
        startDate: '2024-01',
        endDate: '2024-12',
        title: 'Engineer',
        employer: 'Example Co',
        desc: 'Built features',
        environments: ['Angular', 'TypeScript'],
      },
    ];

    const result = service.setAssignments(assignments);

    expect(arrayToStringServiceSpy.arrayToString).toHaveBeenCalledWith([
      'Angular',
      'TypeScript',
    ]);
    expect(result[0].environments).toBe('Angular, TypeScript');
    expect(result[0].title).toBe('Engineer');
  });

  it('should return undefined in existCheck when nested field is missing', () => {
    const other: IOther = {
      operatingSystems: {},
      software: {},
      certifications: [],
      businessKnowledge: [],
    };

    const result = service.existCheck(other, 'operatingSystems', 'advanced');

    expect(result).toBeUndefined();
  });

  it('should map skills and keep both string and array forms', () => {
    const skills: ISkillJson = {
      languages: ['TypeScript', 'JavaScript'],
      frameworks: ['Angular'],
      softwareTools: ['Git'],
      methods: ['Agile'],
    };

    const result = service.setSkills(skills);

    expect(arrayToStringServiceSpy.arrayToString).toHaveBeenCalledTimes(4);
    expect(result.languages).toBe('TypeScript, JavaScript');
    expect(result.languagesAry).toEqual(['TypeScript', 'JavaScript']);
    expect(result.frameworks).toBe('Angular');
    expect(result.softwareTools).toBe('Git');
    expect(result.methods).toBe('Agile');
  });
});
