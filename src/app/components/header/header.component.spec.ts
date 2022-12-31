import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [NavBarService],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <strong> with "Joey Wills - Developer"', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const strong = employmentElement.querySelector('#siteHeaderId');
    if (strong != null) {
      expect(strong.textContent).toEqual('Joey Wills - Developer ');
    } else {
      fail('strong with "Joey Wills - Developer" not found');
    }
  });

  it('should have <img>', () => {
    const employmentElement: HTMLElement = fixture.nativeElement;
    const img = employmentElement.querySelector('#navIconId');

    expect(img != null).toBe(true);
  });
});
