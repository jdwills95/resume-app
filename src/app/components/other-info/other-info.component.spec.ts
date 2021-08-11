import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInfoComponent } from './other-info.component';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('OtherInfoComponent', () => {
  let component: OtherInfoComponent;
  let fixture: ComponentFixture<OtherInfoComponent>;

  let mockGetDataService;

  const mockOtherInfoData = {
    operatingSystems: {
      advanced: [
        'testOperatingSystemsAdvanced01',
        'testOperatingSystemsAdvanced02',
      ],
      intermediate: [
        'testOperatingSystemsIntermediate01',
        'testOperatingSystemsIntermediate02',
      ],
      beginner: [
        'testOperatingSystemsBeginner01',
        'testOperatingSystemsBeginner02',
      ],
    },
    software: {
      advanced: ['testSoftwareAdvanced01', 'testSoftwareAdvanced02'],
      intermediate: [
        'testSoftwareIntermediate01',
        'testSoftwareIntermediate02',
      ],
      beginner: ['testSoftwareBeginner01', 'testSoftwareBeginner02'],
    },
    certifications: ['testCertifications01', 'testCertifications02'],
    businessKnowledge: ['testBusinessKnowledge01', 'testBusinessKnowledge02'],
  };

  beforeEach(async () => {
    mockGetDataService = jasmine.createSpyObj(['getOtherData']);
    mockGetDataService.getOtherData.and.returnValue(mockOtherInfoData);

    await TestBed.configureTestingModule({
      providers: [
        GetDataService,
        { provide: GetDataService, useValue: mockGetDataService },
      ],
      declarations: [OtherInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set mock data to IOther object', () => {
    component.setOtherInfoSkills(mockOtherInfoData);

    expect(component.otherInfoSkills).toEqual(mockOtherInfoData);
  });

  it('should return skill if exist', () => {
    const testObj = {
      operatingSystems: {},
      software: {
        advanced: [
          'testOperatingSystemsAdvanced01',
          'testOperatingSystemsAdvanced02',
        ],
      },
      certifications: [],
      businessKnowledge: [],
    };

    expect(component.existCheck(testObj, 'software', 'advanced')).toEqual([
      'testOperatingSystemsAdvanced01',
      'testOperatingSystemsAdvanced02',
    ]);
  });

  it('should return undefined if exist does not exist', () => {
    const testObj = {
      operatingSystems: {},
      software: {},
      certifications: [],
      businessKnowledge: [],
    };

    expect(component.existCheck(testObj, 'software', 'advanced')).toEqual(
      undefined
    );
  });

  it('should have <h5> with "OTHER INFORMATION AND SKILLS"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const h5 = assignmentElement.querySelector('#otherInfoSkillsSecTitleId');
    if (h5 != null) {
      expect(h5.textContent).toEqual(' OTHER INFORMATION AND SKILLS ');
    } else {
      fail('h5 with "OTHER INFORMATION AND SKILLS" not found');
    }
  });

  it('should have <strong> with "Operating Systems"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector('#oSSubSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Operating Systems');
    } else {
      fail('strong with "Operating Systems" not found');
    }
  });

  it('should have <div> with "ADVANCED"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#oSSubSecAdvTitleId');
    if (div != null) {
      expect(div.textContent).toEqual(' ADVANCED ');
    } else {
      fail('div with "ADVANCED" not found');
    }
  });

  it('should have <div> with "testOperatingSystemsAdvanced01"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector(
      '#skillOStestOperatingSystemsAdvanced01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testOperatingSystemsAdvanced01 ');
    } else {
      fail('div with "testOperatingSystemsAdvanced01" not found');
    }
  });
});
