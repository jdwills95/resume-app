import { Component, OnInit } from '@angular/core';
import { IEmployerHistory } from 'src/app/interfaces/employerHistory';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-employer-history',
  templateUrl: './employer-history.component.html',
  styleUrls: ['./employer-history.component.scss'],
})
export class EmployerHistoryComponent implements OnInit {
  employers: IEmployerHistory[] = [];

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.setEmployers(this.getDataService.getEmployerHistoryData());
  }

  setEmployers(employerHistoryJson: IEmployerHistory[]): void {
    this.employers = employerHistoryJson.map((employer) => {
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
}
