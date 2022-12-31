import { Injectable } from '@angular/core';

@Injectable()
export class NavBarService {
  private isNavbarOpen = false;

  onNavBarButtonClicked(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavBar(): void {
    this.isNavbarOpen = false;
  }

  getIsNavbarOpen(): boolean {
    return this.isNavbarOpen;
  }
}
