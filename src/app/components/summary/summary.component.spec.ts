import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
import { SummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let getDataServiceSpy: jasmine.SpyObj<GetDataService>;

  beforeEach(async () => {
    getDataServiceSpy = jasmine.createSpyObj<GetDataService>('GetDataService', [
      'getSummaryData',
    ]);
    getDataServiceSpy.getSummaryData.and.returnValue(
      of('Test professional summary')
    );

    await TestBed.configureTestingModule({
      declarations: [SummaryComponent],
      providers: [{ provide: GetDataService, useValue: getDataServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load summary text on init', () => {
    expect(getDataServiceSpy.getSummaryData).toHaveBeenCalled();
    expect(component.summary).toBe('Test professional summary');
  });
});
