import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from './app.component';
import { CurrentScreenWidthService } from './services/current-screen-width/current-screen-width.service';
import { NavBarService } from './services/nav-bar/nav-bar.service';
import { ScrollService } from './services/scroll/scroll.service';
import { ThemeToggleService } from './services/theme/theme.service';
import { Theme } from './services/theme/theme-toggle.model';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let widthServiceSpy: jasmine.SpyObj<CurrentScreenWidthService>;
  let navBarServiceSpy: jasmine.SpyObj<NavBarService>;
  let scrollServiceSpy: jasmine.SpyObj<ScrollService>;
  let themeSubject: BehaviorSubject<Theme>;

  beforeEach(async () => {
    themeSubject = new BehaviorSubject<Theme>(Theme.LIGHT);
    widthServiceSpy = jasmine.createSpyObj<CurrentScreenWidthService>(
      'CurrentScreenWidthService',
      ['isScreenWidthLargeDesktopOrBigger']
    );
    navBarServiceSpy = jasmine.createSpyObj<NavBarService>('NavBarService', [
      'closeNavBar',
      'getIsNavbarOpen',
    ]);
    scrollServiceSpy = jasmine.createSpyObj<ScrollService>('ScrollService', [
      'disable',
      'enable',
    ]);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: CurrentScreenWidthService, useValue: widthServiceSpy },
        { provide: NavBarService, useValue: navBarServiceSpy },
        { provide: ScrollService, useValue: scrollServiceSpy },
        {
          provide: ThemeToggleService,
          useValue: { themeChanged$: themeSubject.asObservable() },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update layout flag on resize', () => {
    widthServiceSpy.isScreenWidthLargeDesktopOrBigger.and.returnValue(false);

    component.onResize();

    expect(component.isDesktopOrBigger).toBeFalse();
  });

  it('should track theme changes from theme service', () => {
    themeSubject.next(Theme.DARK);

    expect(component.currentTheme).toBe(Theme.DARK);
  });

  it('should close nav bar and re-enable scroll', () => {
    component.isNavbarOpen = true;

    component.closeNavBar();

    expect(scrollServiceSpy.enable).toHaveBeenCalled();
    expect(navBarServiceSpy.closeNavBar).toHaveBeenCalled();
    expect(component.isNavbarOpen).toBeFalse();
  });

  it('should disable scroll when nav state is open and checks are allowed', () => {
    component.scrollServiceCheckAllowed = true;
    navBarServiceSpy.getIsNavbarOpen.and.returnValue(true);

    const result = component.checkNavbarOpen();

    expect(result).toBeTrue();
    expect(scrollServiceSpy.disable).toHaveBeenCalled();
  });
});
