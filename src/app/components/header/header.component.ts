import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {}

  onNavClicked() {
    this.navBarService.onNavBarButtonClicked();
  }
}
