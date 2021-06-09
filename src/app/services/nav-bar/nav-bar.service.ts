import { Injectable } from '@angular/core';

@Injectable()
export class NavBarService {
  private isNavbarEnabled: boolean = false;

  navBarButtonIsClicked() {
    this.isNavbarEnabled = !this.isNavbarEnabled;
  }

  getIsNavbarEnabled() {
    return this.isNavbarEnabled;
  }
}
