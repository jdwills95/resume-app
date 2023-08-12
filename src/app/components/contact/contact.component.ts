import { Component, OnInit } from '@angular/core';
import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private currentScreenWidthService: CurrentScreenWidthService) {}

  ngOnInit(): void {}

  get isSmall(): boolean {
    if (
      this.currentScreenWidthService.isScreenWidthTabletOrBigger() ||
      this.currentScreenWidthService.isScreenWidthDesktopOrBigger() ||
      this.currentScreenWidthService.isScreenWidthLargeDesktopOrBigger()
    ) {
      return false;
    }

    return true;
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.download = 'Resume_Joey_Wills';
    link.href = 'assets/resume/Resume_Wills_Joey.pdf';
    link.click();
  }
}
