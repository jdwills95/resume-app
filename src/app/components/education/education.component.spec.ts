import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  let mockGetDataService;

  const mockEducationData = [
    {
      degree: 'testDegree01',
      field: 'testField01',
      school: {
        name: 'testSchoolName01',
        location: 'testSchoolLocation01',
      },
      graduationYear: 'testGraduationYear01',
    },
    {
      degree: 'testDegree02',
      field: 'testField02',
      school: {
        name: 'testSchoolName02',
        location: 'testSchoolLocation02',
      },
      graduationYear: 'testGraduationYear02',
    },
  ];

  beforeEach(async () => {
    mockGetDataService = jasmine.createSpyObj(['getEducationData']);
    mockGetDataService.getEducationData.and.returnValue(mockEducationData);

    await TestBed.configureTestingModule({
      providers: [
        GetDataService,
        { provide: GetDataService, useValue: mockGetDataService },
      ],
      declarations: [EducationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign data to education', () => {
    component.setEducation(mockEducationData);

    expect(component.education[0].degree).toBe('testDegree01');
    expect(component.education[0].field).toBe('testField01');
    expect(component.education[0].school.name).toBe('testSchoolName01');
    expect(component.education[0].school.location).toBe('testSchoolLocation01');
    expect(component.education[0].graduationYear).toBe('testGraduationYear01');

    expect(component.education[1].degree).toBe('testDegree02');
    expect(component.education[1].field).toBe('testField02');
    expect(component.education[1].school.name).toBe('testSchoolName02');
    expect(component.education[1].school.location).toBe('testSchoolLocation02');
    expect(component.education[1].graduationYear).toBe('testGraduationYear02');
  });

  it('should have <h5> with "EDUCATION"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const h5 = courseTrainingElement.querySelector('#educationSecTitleId');
    if (h5 != null) {
      expect(h5.textContent).toEqual('EDUCATION');
    } else {
      fail('h5 with "EDUCATION" not found');
    }
  });

  it('should have <div> with "testDegree01 - testField01 testSchoolName01 - testSchoolLocation01"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const div = courseTrainingElement.querySelector(
      '#degreetestDegree01testField01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(
        'testDegree01 - testField01 testSchoolName01 - testSchoolLocation01 '
      );
    } else {
      fail(
        'div with "testDegree01 - testField01 testSchoolName01 - testSchoolLocation01" not found'
      );
    }
  });

  it('should have <div> with "testDegree02 - testField02 testSchoolName02 - testSchoolLocation02"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const div = courseTrainingElement.querySelector(
      '#degreetestDegree02testField02Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(
        'testDegree02 - testField02 testSchoolName02 - testSchoolLocation02 '
      );
    } else {
      fail(
        'div with "testDegree02 - testField02 testSchoolName02 - testSchoolLocation02" not found'
      );
    }
  });
});
