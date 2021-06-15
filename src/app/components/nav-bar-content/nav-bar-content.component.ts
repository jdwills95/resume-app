import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { INavItem } from 'src/app/interfaces/nav-item';

@Component({
  selector: 'app-nav-bar-content',
  templateUrl: './nav-bar-content.component.html',
  styleUrls: ['./nav-bar-content.component.scss'],
})
export class NavBarContentComponent implements OnInit {
  @Output() navItemClicked = new EventEmitter();

  navItems: INavItem[] = [
    {
      title: 'KEY SKILLS',
      target: 'skills',
    },
    {
      title: 'ASSIGNMENT HISTORY',
      target: 'assignmentHistory',
    },
    {
      title: 'EMPLOYER HISTORY',
      target: 'employerHistory',
    },
    {
      title: 'COURSES AND TRAINING',
      target: 'courseTraining',
    },
    {
      title: 'EDUCATION',
      target: 'education',
    },
    {
      title: 'OTHER INFORMATION AND SKILLS',
      target: 'other',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  scrollTo(className: string): void {
    this.navItemClicked.emit();
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
