import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';
import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';
import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  let mockGetDataService;

  const mockSkillsData = {
    languages: ['testLanguage01', 'testLanguage02'],
    frameworks: ['testFrameworks01', 'testFrameworks02'],
    softwareTools: ['testSoftwareTools01', 'testSoftwareTools02'],
    methods: ['testMethods01', 'testMethods02'],
  };

  beforeEach(async () => {
    mockGetDataService = jasmine.createSpyObj(['getSkillsData']);
    mockGetDataService.getSkillsData.and.returnValue(mockSkillsData);

    await TestBed.configureTestingModule({
      providers: [
        ArrayToStringService,
        CurrentScreenWidthService,
        GetDataService,
        { provide: GetDataService, useValue: mockGetDataService },
      ],
      declarations: [SkillsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set mock data to ISkill object', () => {
    component.setSkills(mockSkillsData);

    const expectedSkills = {
      languages: 'testLanguage01, testLanguage02',
      languagesAry: ['testLanguage01', 'testLanguage02'],
      frameworks: 'testFrameworks01, testFrameworks02',
      frameworksAry: ['testFrameworks01', 'testFrameworks02'],
      softwareTools: 'testSoftwareTools01, testSoftwareTools02',
      softwareToolsAry: ['testSoftwareTools01', 'testSoftwareTools02'],
      methods: 'testMethods01, testMethods02',
      methodsAry: ['testMethods01', 'testMethods02'],
    };

    expect(component.skills).toEqual(expectedSkills);
  });

  it('should have <h5> with "KEY SKILLS"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const h5 = assignmentElement.querySelector('#keySkillsSecTitleId');
    if (h5 != null) {
      expect(h5.textContent).toEqual(' KEY SKILLS ');
    } else {
      fail('h5 with "KEY SKILLS" not found');
    }
  });

  it('should have <strong> with "Languages"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector('#langSubSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Languages');
    } else {
      fail('strong with "Languages" not found');
    }
  });

  it('should have <div> with "Languages testLanguage01, testLanguage02."', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#langSubSecId');
    if (div != null) {
      expect(div.textContent).toEqual(
        'Languages testLanguage01, testLanguage02. '
      );
    } else {
      fail('div with "Languages testLanguage01, testLanguage02." not found');
    }
  });

  it('should have <strong> with "Frameworks"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector('#frameworksSubSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Frameworks');
    } else {
      fail('strong with "Frameworks" not found');
    }
  });

  it('should have <div> with "Frameworks testFrameworks01, testFrameworks02."', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#frameworksSubSecId');
    if (div != null) {
      expect(div.textContent).toEqual(
        'Frameworks testFrameworks01, testFrameworks02. '
      );
    } else {
      fail(
        'div with "Frameworks testFrameworks01, testFrameworks02." not found'
      );
    }
  });

  it('should have <strong> with "Software/Tools"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector('#softToolsSubSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Software/Tools');
    } else {
      fail('strong with "Software/Tools" not found');
    }
  });

  it('should have <div> with "Software/Tools testSoftwareTools01, testSoftwareTools02."', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#softToolsSubSecId');
    if (div != null) {
      expect(div.textContent).toEqual(
        'Software/Tools testSoftwareTools01, testSoftwareTools02. '
      );
    } else {
      fail(
        'div with "Software/Tools testSoftwareTools01, testSoftwareTools02." not found'
      );
    }
  });

  it('should have <strong> with "Methodologies"', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const strong = assignmentElement.querySelector('#methodsSubSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Methodologies');
    } else {
      fail('strong with "Methodologies" not found');
    }
  });

  it('should have <div> with "Methodologies testMethods01, testMethods02. "', () => {
    const assignmentElement: HTMLElement = fixture.nativeElement;
    const div = assignmentElement.querySelector('#methodsSubSecId');
    if (div != null) {
      expect(div.textContent).toEqual(
        'Methodologies testMethods01, testMethods02. '
      );
    } else {
      fail('div with "Methodologies testMethods01, testMethods02." not found');
    }
  });
});
