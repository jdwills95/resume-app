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

  it('should have <div> with "INTERMEDIATE"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#oSSubSecIntTitleId');
    if (div != null) {
      expect(div.textContent).toEqual(' INTERMEDIATE ');
    } else {
      fail('div with "INTERMEDIATE" not found');
    }
  });

  it('should have <div> with "testOperatingSystemsIntermediate01"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector(
      '#skillOStestOperatingSystemsIntermediate01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testOperatingSystemsIntermediate01 ');
    } else {
      fail('div with "testOperatingSystemsIntermediate01" not found');
    }
  });

  it('should have <div> with "BEGINNER"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#oSSubSecBegTitleId');
    if (div != null) {
      expect(div.textContent).toEqual(' BEGINNER ');
    } else {
      fail('div with "BEGINNER" not found');
    }
  });

  it('should have <div> with "testOperatingSystemsBeginner01"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector(
      '#skillOStestOperatingSystemsBeginner01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testOperatingSystemsBeginner01 ');
    } else {
      fail('div with "testOperatingSystemsBeginner01" not found');
    }
  });

  it('should have <strong> with "Software"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector('#softwareSubSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Software');
    } else {
      fail('strong with "Software" not found');
    }
  });

  it('should have <div> with "ADVANCED"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#softwareSubSecAdvTitleId');
    if (div != null) {
      expect(div.textContent).toEqual(' ADVANCED ');
    } else {
      fail('div with "ADVANCED" not found');
    }
  });

  it('should have <div> with "testSoftwareAdvanced01"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector(
      '#skillSoftwaretestSoftwareAdvanced01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testSoftwareAdvanced01 ');
    } else {
      fail('div with "testSoftwareAdvanced01" not found');
    }
  });

  it('should have <div> with "INTERMEDIATE"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#softwareSubSecIntTitleId');
    if (div != null) {
      expect(div.textContent).toEqual(' INTERMEDIATE ');
    } else {
      fail('div with "INTERMEDIATE" not found');
    }
  });

  it('should have <div> with "testSoftwareIntermediate01"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector(
      '#skillSoftwaretestSoftwareIntermediate01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testSoftwareIntermediate01 ');
    } else {
      fail('div with "testSoftwareIntermediate01" not found');
    }
  });

  it('should have <div> with "BEGINNER"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#softwareSubSecBegTitleId');
    if (div != null) {
      expect(div.textContent).toEqual(' BEGINNER ');
    } else {
      fail('div with "BEGINNER" not found');
    }
  });

  it('should have <div> with "testSoftwareBeginner01"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector(
      '#skillSoftwaretestSoftwareBeginner01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testSoftwareBeginner01 ');
    } else {
      fail('div with "testSoftwareBeginner01" not found');
    }
  });

  it('should have <strong> with "Business Knowledge"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector('#busKnowSubSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Business Knowledge');
    } else {
      fail('strong with "Business Knowledge" not found');
    }
  });

  it('should have <div> with "testBusinessKnowledge01"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector(
      '#skillBusinesstestBusinessKnowledge01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testBusinessKnowledge01 ');
    } else {
      fail('div with "testBusinessKnowledge01" not found');
    }
  });
});
