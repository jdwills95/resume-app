import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';

describe('NavBarService', () => {
  let service = new NavBarService();

  beforeEach(() => {
    service = new NavBarService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should be false be default', () => {
    expect(service.getIsNavbarOpen()).toBeFalse();
  });

  it('should be true when onNavBarButtonClicked called once', () => {
    service.onNavBarButtonClicked();

    expect(service.getIsNavbarOpen()).toBeTrue();
  });

  it('should be true when onNavBarButtonClicked called twice', () => {
    service.onNavBarButtonClicked();
    service.onNavBarButtonClicked();

    expect(service.getIsNavbarOpen()).toBeFalse();
  });

  it('should be false when onNavBarButtonClicked called then closeNavBar is called', () => {
    service.onNavBarButtonClicked();
    service.closeNavBar();

    expect(service.getIsNavbarOpen()).toBeFalse();
  });
});
