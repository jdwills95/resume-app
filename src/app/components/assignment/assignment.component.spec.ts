import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentComponent } from './assignment.component';

import { RemoveSpacingAndCapFirstLetter } from 'src/app/services/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.service';

describe('AssignmentComponent', () => {
  let component: AssignmentComponent;
  let fixture: ComponentFixture<AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [RemoveSpacingAndCapFirstLetter],
      declarations: [AssignmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
