import { Component, HostListener } from '@angular/core';
import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume-app';
  isDesktopOrBigger = true;

  constructor(private currentScreenWidthService: CurrentScreenWidthService) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isDesktopOrBigger = this.currentScreenWidthService.isScreenWidthLargeDesktopOrBigger();
  }
}
