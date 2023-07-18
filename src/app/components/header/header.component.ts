import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';
import { ThemeToggleService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() navBarButtonClicked = new EventEmitter();

  constructor(
    private navBarService: NavBarService,
    private themeToggleService: ThemeToggleService
  ) {}

  get islightTheme(): boolean {
    return this.themeToggleService.themeIsLight;
  }

  ngOnInit(): void {}

  onNavClicked(): void {
    this.navBarButtonClicked.emit();
    this.navBarService.onNavBarButtonClicked();
  }

  toggleTheme() {
    this.themeToggleService.toggleTheme();
  }
}
