import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';
import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';
import { GetDataService } from 'src/app/services/get-data/get-data.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ArrayToStringService,
        CurrentScreenWidthService,
        GetDataService,
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
});
