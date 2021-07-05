import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interfaces/education';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education: IEducation[] = [];

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.setEducation(this.getDataService.getEducationData());
  }

  setEducation(educationJSON: IEducation[]): void {
    this.education = educationJSON.map((degree) => {
      return {
        degree: degree.degree,
        field: degree.field,
        school: {
          name: degree.school.name,
          location: degree.school.location,
        },
        graduationYear: degree.graduationYear,
      };
    });
  }
}
