import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() navBarButtonClicked = new EventEmitter();

  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {}

  onNavClicked() {
    this.navBarButtonClicked.emit();
    this.navBarService.onNavBarButtonClicked();
  }
}
