import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import {
  THEME_STORAGE_SERVICE,
  ThemeStorage,
} from './theme-storage-service';
import { Theme } from './theme-toggle.model';
import { ThemeToggleService } from './theme.service';

describe('ThemeToggleService', () => {
  let service: ThemeToggleService;
  let storageSpy: jasmine.SpyObj<ThemeStorage>;

  beforeEach(() => {
    storageSpy = jasmine.createSpyObj<ThemeStorage>('ThemeStorage', [
      'save',
      'get',
    ]);
    storageSpy.get.and.returnValue(Theme.LIGHT);

    TestBed.configureTestingModule({
      providers: [
        ThemeToggleService,
        { provide: DOCUMENT, useValue: document },
        { provide: THEME_STORAGE_SERVICE, useValue: storageSpy },
      ],
    });

    service = TestBed.inject(ThemeToggleService);
  });

  afterEach(() => {
    document.body.classList.remove(Theme.LIGHT, Theme.DARK);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with stored light theme', () => {
    expect(service.themeIsLight).toBeTrue();
    expect(document.body.classList.contains(Theme.LIGHT)).toBeTrue();
    expect(storageSpy.save).toHaveBeenCalledWith(Theme.LIGHT);
  });

  it('should toggle from light to dark and persist', () => {
    service.toggleTheme();

    expect(service.themeIsLight).toBeFalse();
    expect(document.body.classList.contains(Theme.DARK)).toBeTrue();
    expect(storageSpy.save).toHaveBeenCalledWith(Theme.DARK);
  });
});
