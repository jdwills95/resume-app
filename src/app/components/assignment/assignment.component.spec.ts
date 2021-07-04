import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentComponent } from './assignment.component';

import { RemoveSpacingAndCapFirstLetter } from 'src/app/services/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.service';
import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';

describe('AssignmentComponent', () => {
  let component: AssignmentComponent;
  let fixture: ComponentFixture<AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [RemoveSpacingAndCapFirstLetter, ArrayToStringService],
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

  it('should map abd return IAssignmentJSON array to IAssignment array', () => {
    const testAssignmentJSON = [
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

    const getAssignmentsResults = component.getAssignments(testAssignmentJSON);

    expect(getAssignmentsResults[0].endDate).toBe('test01EndDate');
    expect(getAssignmentsResults[0].startDate).toBe('test01StartDate');
    expect(getAssignmentsResults[0].title).toBe('test01Title');
    expect(getAssignmentsResults[0].employer).toBe('test01Employer');
    expect(getAssignmentsResults[0].desc).toBe('test01Desc');
    expect(getAssignmentsResults[0].environments).toBe(
      'test01Evn01, test01Evn02'
    );

    expect(getAssignmentsResults[1].endDate).toBe('test02EndDate');
    expect(getAssignmentsResults[1].startDate).toBe('test02StartDate');
    expect(getAssignmentsResults[1].title).toBe('test02Title');
    expect(getAssignmentsResults[1].employer).toBe('test02Employer');
    expect(getAssignmentsResults[1].desc).toBe('test02Desc');
    expect(getAssignmentsResults[1].environments).toBe(
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
    const h5 = assignmentElement.querySelector('h5');
    if (h5 != null) {
      expect(h5.textContent).toEqual('ASSIGNMENT HISTORY');
    } else {
      fail('h5 is null');
    }
  });
});
