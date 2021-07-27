import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTrainingComponent } from './course-training.component';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('CourseTrainingComponent', () => {
  let component: CourseTrainingComponent;
  let fixture: ComponentFixture<CourseTrainingComponent>;

  let mockGetDataService;

  const mockCourseTrainingData = {
    badges: ['testBadges01', 'testBadges02'],
    training: ['testTraining01', 'testTraining02'],
  };

  beforeEach(async () => {
    mockGetDataService = jasmine.createSpyObj(['getCourseTrainingData']);
    mockGetDataService.getCourseTrainingData.and.returnValue(
      mockCourseTrainingData
    );

    await TestBed.configureTestingModule({
      providers: [
        GetDataService,
        { provide: GetDataService, useValue: mockGetDataService },
      ],
      declarations: [CourseTrainingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign data to courseTraining', () => {
    component.setCoursesTraining(mockCourseTrainingData);

    expect(component.courseTraining.badges[0]).toBe('testBadges01');
    expect(component.courseTraining.badges[1]).toBe('testBadges02');
    expect(component.courseTraining.training[0]).toBe('testTraining01');
    expect(component.courseTraining.training[1]).toBe('testTraining02');
  });

  it('should have <h5> with "COURSES AND TRAINING"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const h5 = courseTrainingElement.querySelector(
      '#coursesAndTrainingSecTitleId'
    );
    if (h5 != null) {
      expect(h5.textContent).toEqual('COURSES AND TRAINING');
    } else {
      fail('h5 with "COURSES AND TRAINING" not found');
    }
  });

  it('should have <strong> with "TRAINING"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const strong = courseTrainingElement.querySelector('#trainingSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('TRAINING');
    } else {
      fail('strong with "TRAINING" not found');
    }
  });

  it('should have <div> with "testTraining01"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const div = courseTrainingElement.querySelector(
      '#trainingItemtestTraining01Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testTraining01 ');
    } else {
      fail('div with "testTraining01" not found');
    }
  });

  it('should have <div> with "testTraining02"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const div = courseTrainingElement.querySelector(
      '#trainingItemtestTraining02Id'
    );
    if (div != null) {
      expect(div.textContent).toEqual(' testTraining02 ');
    } else {
      fail('div with "testTraining02" not found');
    }
  });

  it('should have <strong> with "BADGES"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const strong = courseTrainingElement.querySelector('#badgesSecTitleId');
    if (strong != null) {
      expect(strong.textContent).toEqual('BADGES');
    } else {
      fail('strong with "BADGES" not found');
    }
  });

  it('should have <div> with "testBadges01"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const div = courseTrainingElement.querySelector('#badgetestBadges01Id');
    if (div != null) {
      expect(div.textContent).toEqual(' testBadges01 ');
    } else {
      fail('div with "testBadges01" not found');
    }
  });

  it('should have <div> with "testBadges02"', () => {
    const courseTrainingElement: HTMLElement = fixture.nativeElement;
    const div = courseTrainingElement.querySelector('#badgetestBadges02Id');
    if (div != null) {
      expect(div.textContent).toEqual(' testBadges02 ');
    } else {
      fail('div with "testBadges02" not found');
    }
  });
});
