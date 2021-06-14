import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  downloadResume() {
    let link = document.createElement('a');
    link.download = 'Resume_Joey_Wills';
    link.href = 'assets/resume/Resume_Wills_Joey.pdf';
    link.click();
  }
}
