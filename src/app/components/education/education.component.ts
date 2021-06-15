import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interfaces/education';

import educationJSON from 'src/assets/data/education.json';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education: IEducation[] = this.getEducation(educationJSON);

  constructor() {}

  ngOnInit(): void {}

  getEducation(educationJSON: IEducation[]): IEducation[] {
    return educationJSON.map((degree) => {
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
