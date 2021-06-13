import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar-desktop',
  templateUrl: './nav-bar-desktop.component.html',
  styleUrls: ['./nav-bar-desktop.component.scss'],
})
export class NavBarDesktopComponent implements OnInit {
  @Output() navItemSendToApp = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  navItemClickedReceived() {
    this.navItemSendToApp.emit();
  }
}
