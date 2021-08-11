import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentComponent } from './assignment.component';

import { RemoveSpacingAndCapFirstLetter } from 'src/app/services/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.service';
import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';
import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('AssignmentComponent', () => {
  let component: AssignmentComponent;
  let fixture: ComponentFixture<AssignmentComponent>;

  let mockGetDataService;

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

  beforeEach(async () => {
    mockGetDataService = jasmine.createSpyObj(['getAssignmentData']);
    mockGetDataService.getAssignmentData.and.returnValue(mockAssignmentData);

    await TestBed.configureTestingModule({
      providers: [
        RemoveSpacingAndCapFirstLetter,
        ArrayToStringService,
        GetDataService,
        { provide: GetDataService, useValue: mockGetDataService },
      ],
      declarations: [AssignmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map and return IAssignmentJSON array to IAssignment array', () => {
    component.setAssignments(mockAssignmentData);

    expect(component.assignments[0].endDate).toBe('test01EndDate');
    expect(component.assignments[0].startDate).toBe('test01StartDate');
    expect(component.assignments[0].title).toBe('test01Title');
    expect(component.assignments[0].employer).toBe('test01Employer');
    expect(component.assignments[0].desc).toBe('test01Desc');
    expect(component.assignments[0].environments).toBe(
      'test01Evn01, test01Evn02'
    );

    expect(component.assignments[1].endDate).toBe('test02EndDate');
    expect(component.assignments[1].startDate).toBe('test02StartDate');
    expect(component.assignments[1].title).toBe('test02Title');
    expect(component.assignments[1].employer).toBe('test02Employer');
    expect(component.assignments[1].desc).toBe('test02Desc');
    expect(component.assignments[1].environments).toBe(
      'test02Evn01, test02Evn02'
    );
  });

  it('should remove spacing capitalize each letter', () => {
    const testImputStr = 'test test test';

    expect(component.removeSpacingCapEachLetter(testImputStr)).toBe(
      'TestTestTest'
    );
  });

  it('should have <h5> with "ASSIGNMENT HISTORY"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const h5 = assignmentElement.querySelector('#assignmentHistorySecTitleId');
    if (h5 != null) {
      expect(h5.textContent).toEqual('ASSIGNMENT HISTORY');
    } else {
      fail('h5 with "ASSIGNMENT HISTORY" not found');
    }
  });

  it('should have <strong> with "test01Title"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector(
      '#assignmenttitleTest01titleId'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual('test01Title');
    } else {
      fail('strong with "test01Title" not found');
    }
  });

  it('should have <strong> with "test01Employer"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector(
      '#assignmentTest01titleTest01employerId'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual('test01Employer ');
    } else {
      fail('strong with "test01Employer" not found');
    }
  });

  it('should have <strong> with "test01StartDate - test01EndDate"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector(
      '#assignmentTest01titleTest01employerDatesId'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual(' test01StartDate - test01EndDate ');
    } else {
      fail('strong with "test01StartDate - test01EndDate" not found');
    }
  });

  it('should have <p> with "test01Desc"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const p = assignmentElement.querySelector(
      '#assignmentTest01titleTest01employerDescId'
    );
    if (p != null) {
      expect(p.textContent).toEqual(' test01Desc ');
    } else {
      fail('p with "test01Desc" not found');
    }
  });

  it('should have <p> with "Environments:  test01Evn01, test01Evn02 ', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const p = assignmentElement.querySelector(
      '#assignmentTest01titleTest01employerEnvironmentsId'
    );
    if (p != null) {
      expect(p.textContent).toEqual('Environments:  test01Evn01, test01Evn02 ');
    } else {
      fail('p with "Environments:  test01Evn01, test01Evn02" not found');
    }
  });

  it('should have <strong> with "test02Title"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector(
      '#assignmenttitleTest02titleId'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual('test02Title');
    } else {
      fail('strong with "test02Title" not found');
    }
  });

  it('should have <strong> with "test02Employer"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector(
      '#assignmentTest02titleTest02employerId'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual('test02Employer ');
    } else {
      fail('strong with "test02Employer" not found');
    }
  });

  it('should have <strong> with "test02StartDate - test02EndDate"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector(
      '#assignmentTest02titleTest02employerDatesId'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual(' test02StartDate - test02EndDate ');
    } else {
      fail('strong with "test02StartDate - test02EndDate" not found');
    }
  });

  it('should have <p> with "test02Desc"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const p = assignmentElement.querySelector(
      '#assignmentTest02titleTest02employerDescId'
    );
    if (p != null) {
      expect(p.textContent).toEqual(' test02Desc ');
    } else {
      fail('p with "test02Desc" not found');
    }
  });

  it('should have <p> with "Environments:  test02Evn01, test02Evn02 ', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const p = assignmentElement.querySelector(
      '#assignmentTest02titleTest02employerEnvironmentsId'
    );
    if (p != null) {
      expect(p.textContent).toEqual('Environments:  test02Evn01, test02Evn02 ');
    } else {
      fail('p with "Environments:  test02Evn01, test02Evn02" not found');
    }
  });
});
