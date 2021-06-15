import { Component, HostListener, AfterViewInit } from '@angular/core';

import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  title = 'resume-app';
  isDesktopOrBigger = true;
  scrollServiceCheckAllowed = false;
  isNavbarOpen = false;

  constructor(
    private currentScreenWidthService: CurrentScreenWidthService,
    private navBarService: NavBarService,
    private scrollService: ScrollService
  ) {}

  ngAfterViewInit() {
    this.scrollServiceCheckAllowed = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isDesktopOrBigger =
      this.currentScreenWidthService.isScreenWidthLargeDesktopOrBigger();
  }

  navBarButtonClickedRev() {
    this.isNavbarOpen = !this.isNavbarOpen;
    if (this.scrollServiceCheckAllowed) {
      if (this.isNavbarOpen) {
        this.scrollService.disable();
      } else {
        this.scrollService.enable();
      }
    }
  }

  closeNavBar() {
    this.scrollService.enable();
    this.navBarService.closeNavBar();
    this.isNavbarOpen = false;
  }

  checkNavbarOpen(): boolean {
    const isNavOpen = this.navBarService.getIsNavbarOpen();
    if (this.scrollServiceCheckAllowed) {
      if (isNavOpen) {
        this.scrollService.disable();
      } else {
        this.scrollService.enable();
      }
    }
    return isNavOpen;
  }
}
