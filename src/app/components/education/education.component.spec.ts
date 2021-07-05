import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [GetDataService],
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
});
