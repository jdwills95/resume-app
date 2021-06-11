import { Component, OnInit } from '@angular/core';
import {
  IEmployerHistoryJSON,
  IEmployerHistory,
} from 'src/app/interfaces/employerHistory';

import employerHistory from 'src/app/data/employer-history.json';

@Component({
  selector: 'app-employer-history',
  templateUrl: './employer-history.component.html',
  styleUrls: ['./employer-history.component.scss'],
})
export class EmployerHistoryComponent implements OnInit {
  employers: IEmployerHistoryJSON[] = this.getEmployers(employerHistory);

  constructor() {}

  ngOnInit(): void {}

  getEmployers(
    employerHistoryJson: IEmployerHistoryJSON[]
  ): IEmployerHistoryJSON[] {
    return employerHistoryJson.map((employer) => {
      return {
        endDate: employer.endDate,
        startDate: employer.startDate,
        employer: employer.employer,
        jobTitle: employer.jobTitle,
        location: employer.location,
        desc: {
          desct: employer.desc.desct,
          task: employer.desc.task,
        },
      };
    });
  }

  getTasksString(tasks: string[]): string {
    let tasksString = '';
    tasks.forEach((task: string, index) => {
      if (index !== 0) {
        tasksString = tasksString + ', ' + task;
      } else {
        tasksString = task;
      }
    });
    return tasksString;
  }
}
