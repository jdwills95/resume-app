import { Component, HostListener, AfterViewInit } from '@angular/core';

import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'resume-app';
  isDesktopOrBigger = true;
  scrollServiceCheckAllowed = false;

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
    this.isDesktopOrBigger = this.currentScreenWidthService.isScreenWidthLargeDesktopOrBigger();
  }

  isNavbarOpen(): boolean {
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
