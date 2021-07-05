import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerHistoryComponent } from './employer-history.component';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('EmployerHistoryComponent', () => {
  let component: EmployerHistoryComponent;
  let fixture: ComponentFixture<EmployerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [GetDataService],
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
});
