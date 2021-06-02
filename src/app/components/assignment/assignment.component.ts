import { Component, OnInit } from '@angular/core';
import { IAssignmentJSON, IAssignment } from 'src/app/interfaces/assignment';

import assignmentsJson from 'src/app/data/assignments.json';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  assignments: IAssignment[] = this.getAssignments(assignmentsJson);

  constructor() { }

  ngOnInit(): void {

  }

  getAssignments(assignmentsJson: IAssignmentJSON[]): IAssignment[] {
    return assignmentsJson.map(assignment => {
      return {
        endDate: assignment.endDate,
        startDate: assignment.startDate,
        desc: assignment.desc,
        environments: this.getEnvironmentsString(assignment.environments),
      };
    });

  }

  getEnvironmentsString(environments: string[]): string {
    let environmentsString = '';
    environments.forEach((environment: string, index) => {
      if (index !== 0) {
        environmentsString = environmentsString + ', ' + environment;
      } else {
        environmentsString = environment;
      }
    });
    return environmentsString;
  }

}
