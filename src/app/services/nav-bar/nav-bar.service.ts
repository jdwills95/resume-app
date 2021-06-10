import { Injectable } from '@angular/core';

@Injectable()
export class NavBarService {
  private isNavbarOpen: boolean = false;

  onNavBarButtonClicked() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  getIsNavbarOpen() {
    return this.isNavbarOpen;
  }
}
