import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTrainingComponent } from './course-training.component';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('CourseTrainingComponent', () => {
  let component: CourseTrainingComponent;
  let fixture: ComponentFixture<CourseTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [GetDataService],
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
});
