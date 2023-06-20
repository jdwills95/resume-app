import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Theme } from './theme-toggle.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeStorage, THEME_STORAGE_SERVICE } from './theme-storage-service';

@Injectable()
export class ThemeToggleService {
  private currentTheme: Theme = Theme.LIGHT;
  private themeChangedSubject = new BehaviorSubject(this.currentTheme);
  themeChanged$: Observable<Theme>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(THEME_STORAGE_SERVICE) private themeStorage: ThemeStorage
  ) {
    this.themeChanged$ = this.themeChangedSubject.asObservable();
    this.init();
  }

  private init() {
    const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let initTheme = this.themeStorage.get();
    if (!initTheme) {
      deviceTheme.matches
        ? (initTheme = Theme.DARK)
        : (initTheme = Theme.LIGHT);
    }
    this.updateCurrentTheme(initTheme);
    this.document.body.classList.add(this.currentTheme);
  }

  private updateCurrentTheme(theme: Theme) {
    this.currentTheme = theme;
    this.themeChangedSubject.next(this.currentTheme);
    this.themeStorage.save(this.currentTheme);
  }

  toggleTheme() {
    this.document.body.classList.toggle(Theme.LIGHT);
    this.document.body.classList.toggle(Theme.DARK);
    if (this.currentTheme === Theme.LIGHT) {
      this.updateCurrentTheme(Theme.DARK);
    } else {
      this.updateCurrentTheme(Theme.LIGHT);
    }

    this.currentTheme;
  }
}
