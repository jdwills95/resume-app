import { TestBed } from '@angular/core/testing';

import { NavBarService } from './nav-bar.service';

describe('NavBarService', () => {
  let service: NavBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavBarService],
    });

    service = TestBed.inject(NavBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle nav bar state when button is clicked', () => {
    expect(service.getIsNavbarOpen()).toBeFalse();

    service.onNavBarButtonClicked();
    expect(service.getIsNavbarOpen()).toBeTrue();

    service.onNavBarButtonClicked();
    expect(service.getIsNavbarOpen()).toBeFalse();
  });

  it('should close nav bar', () => {
    service.onNavBarButtonClicked();
    expect(service.getIsNavbarOpen()).toBeTrue();

    service.closeNavBar();
    expect(service.getIsNavbarOpen()).toBeFalse();
  });
});
