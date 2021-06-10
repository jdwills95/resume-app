import { Component, HostListener } from '@angular/core';
import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-app';
  isDesktopOrBigger = true;

  constructor(
    private currentScreenWidthService: CurrentScreenWidthService,
    private navBarService: NavBarService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isDesktopOrBigger = this.currentScreenWidthService.isScreenWidthLargeDesktopOrBigger();
  }

  isNavbarOpen(): boolean {
    return this.navBarService.getIsNavbarOpen();
  }
}
