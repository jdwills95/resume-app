import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss'],
})
export class NavBarMobileComponent implements OnInit {
  @Output() navItemSendToApp = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  navItemClickedReceived() {
    this.navItemSendToApp.emit();
  }
}
