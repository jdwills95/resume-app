import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerHistoryComponent } from './employer-history.component';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('EmployerHistoryComponent', () => {
  let component: EmployerHistoryComponent;
  let fixture: ComponentFixture<EmployerHistoryComponent>;

  let mockGetDataService;

  const mockEmployerHistoryData = [
    {
      endDate: 'testEndDate01',
      startDate: 'testStartDate01',
      employer: 'testEmployer01',
      jobTitle: 'testJobTitle01',
      location: 'testLocation01',
      desc: {
        desct: 'testDesc01Desct',
        task: ['testDesc01Task01', 'testDesc01Task02'],
      },
    },
    {
      endDate: 'testEndDate02',
      startDate: 'testStartDate02',
      employer: 'testEmployer02',
      jobTitle: 'testJobTitle02',
      location: 'testLocation02',
      desc: {
        desct: 'testDesc02Desct',
        task: ['testDesc02Task01', 'testDesc02Task02'],
      },
    },
  ];

  beforeEach(async () => {
    mockGetDataService = jasmine.createSpyObj(['getEmployerHistoryData']);
    mockGetDataService.getEmployerHistoryData.and.returnValue(
      mockEmployerHistoryData
    );

    await TestBed.configureTestingModule({
      providers: [
        GetDataService,
        { provide: GetDataService, useValue: mockGetDataService },
      ],
      declarations: [EmployerHistoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign data to employers', () => {
    component.setEmployers(mockEmployerHistoryData);

    expect(component.employers[0].endDate).toBe('testEndDate01');
    expect(component.employers[0].startDate).toBe('testStartDate01');
    expect(component.employers[0].employer).toBe('testEmployer01');
    expect(component.employers[0].jobTitle).toBe('testJobTitle01');
    expect(component.employers[0].location).toBe('testLocation01');
    expect(component.employers[0].desc.desct).toBe('testDesc01Desct');
    expect(component.employers[0].desc.task).toEqual([
      'testDesc01Task01',
      'testDesc01Task02',
    ]);

    expect(component.employers[1].endDate).toBe('testEndDate02');
    expect(component.employers[1].startDate).toBe('testStartDate02');
    expect(component.employers[1].employer).toBe('testEmployer02');
    expect(component.employers[1].jobTitle).toBe('testJobTitle02');
    expect(component.employers[1].location).toBe('testLocation02');
    expect(component.employers[1].desc.desct).toBe('testDesc02Desct');
    expect(component.employers[1].desc.task).toEqual([
      'testDesc02Task01',
      'testDesc02Task02',
    ]);
  });

  it('should have <h5> with "EMPLOYMENT HISTORY"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const h5 = employmentElement.querySelector('#employmentHisSecTitleId');
    if (h5 != null) {
      expect(h5.textContent).toEqual('EMPLOYMENT HISTORY');
    } else {
      fail('h5 with "EMPLOYMENT HISTORY" not found');
    }
  });

  it('should have <strong> with "testJobTitle01"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const strong = employmentElement.querySelector(
      '#employmenttestJobTitle01Id'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual('testJobTitle01');
    } else {
      fail('strong with "testJobTitle01" not found');
    }
  });

  it('should have <strong> with "testEmployer01 - testLocation01"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const strong = employmentElement.querySelector(
      '#employmenttestLocation01Id'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual('testEmployer01 - testLocation01');
    } else {
      fail('strong with "testEmployer01 - testLocation01" not found');
    }
  });

  it('should have <strong> with "testStartDate01 - testEndDate01"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const strong = employmentElement.querySelector(
      '#employmenttestJobTitle01DateId'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual(' testStartDate01 - testEndDate01 ');
    } else {
      fail('strong with "testStartDate01 - testEndDate01" not found');
    }
  });

  it('should have <p> with "testDesc01Desct"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const p = employmentElement.querySelector(
      '#employmenttestJobTitle01DescriptionId'
    );
    if (p != null) {
      expect(p.textContent).toEqual('Description:  testDesc01Desct ');
    } else {
      fail('p with "testDesc01Desct" not found');
    }
  });

  it('should have <ul> with "testDesc01Task01testDesc01Task02"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const ul = employmentElement.querySelector(
      '#employmenttestJobTitle01TaskId'
    );
    if (ul != null) {
      expect(ul.textContent).toEqual('testDesc01Task01testDesc01Task02');
    } else {
      fail('ul with "testDesc01Task01testDesc01Task02" not found');
    }
  });

  it('should have <strong> with "testJobTitle02"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const strong = employmentElement.querySelector(
      '#employmenttestJobTitle02Id'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual('testJobTitle02');
    } else {
      fail('strong with "testJobTitle02" not found');
    }
  });

  it('should have <strong> with "testEmployer02 - testLocation02"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const strong = employmentElement.querySelector(
      '#employmenttestLocation02Id'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual('testEmployer02 - testLocation02');
    } else {
      fail('strong with "testEmployer02 - testLocation02" not found');
    }
  });

  it('should have <strong> with "testStartDate02 - testEndDate02"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const strong = employmentElement.querySelector(
      '#employmenttestJobTitle02DateId'
    );
    if (strong != null) {
      expect(strong.textContent).toEqual(' testStartDate02 - testEndDate02 ');
    } else {
      fail('strong with "testStartDate02 - testEndDate02" not found');
    }
  });

  it('should have <p> with "testDesc02Desct"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const p = employmentElement.querySelector(
      '#employmenttestJobTitle02DescriptionId'
    );
    if (p != null) {
      expect(p.textContent).toEqual('Description:  testDesc02Desct ');
    } else {
      fail('p with "testDesc02Desct" not found');
    }
  });

  it('should have <ul> with "testDesc02Task01testDesc02Task02"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const ul = employmentElement.querySelector(
      '#employmenttestJobTitle02TaskId'
    );
    if (ul != null) {
      expect(ul.textContent).toEqual('testDesc02Task01testDesc02Task02');
    } else {
      fail('ul with "testDesc02Task01testDesc02Task02" not found');
    }
  });
});
