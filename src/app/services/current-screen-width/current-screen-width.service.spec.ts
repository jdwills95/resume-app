import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';

describe('CurrentScreenWidthService', () => {
  const service = new CurrentScreenWidthService();

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when set to window innerWidth is 576', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 576,
    });

    expect(service.isScreenWidthPhoneOrBigger()).toBe(true);
  });

  it('should return false when set to window innerWidth is 575', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 575,
    });

    expect(service.isScreenWidthPhoneOrBigger()).toBe(false);
  });

  it('should return true when set to window innerWidth is 768', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    });

    expect(service.isScreenWidthTabletOrBigger()).toBe(true);
  });

  it('should return false when set to window innerWidth is 767', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });

    expect(service.isScreenWidthTabletOrBigger()).toBe(false);
  });

  it('should return true when set to window innerWidth is 992', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 992,
    });

    expect(service.isScreenWidthDesktopOrBigger()).toBe(true);
  });

  it('should return false when set to window innerWidth is 991', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 991,
    });

    expect(service.isScreenWidthDesktopOrBigger()).toBe(false);
  });

  it('should return true when set to window innerWidth is 1200', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1200,
    });

    expect(service.isScreenWidthLargeDesktopOrBigger()).toBe(true);
  });

  it('should return false when set to window innerWidth is 1199', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1199,
    });

    expect(service.isScreenWidthLargeDesktopOrBigger()).toBe(false);
  });
});
