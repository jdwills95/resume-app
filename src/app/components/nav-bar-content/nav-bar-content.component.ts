import { Component, OnInit } from '@angular/core';
import { INavItem } from 'src/app/interfaces/nav-item';

@Component({
  selector: 'app-nav-bar-content',
  templateUrl: './nav-bar-content.component.html',
  styleUrls: ['./nav-bar-content.component.scss'],
})
export class NavBarContentComponent implements OnInit {
  navItems: INavItem[] = [
    {
      title: 'KEY SKILLS',
    },
    {
      title: 'ASSIGNMENT HISTORY',
    },
    {
      title: 'EMPLOYER HISTORY',
    },
    {
      title: 'COURSES AND TRAINING',
    },
    {
      title: 'EDUCATION',
    },
    {
      title: 'OTHER INFORMATION AND SKILLS',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
