import { Component, OnInit } from '@angular/core';
import { IAssignmentJSON, IAssignment } from 'src/app/interfaces/assignment';

import { RemoveSpacingAndCapFirstLetter } from 'src/app/services/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.service';

import _assignmentsJson from 'src/assets/data/assignments.json';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {
  assignmentsJson = _assignmentsJson as IAssignmentJSON[];
  assignments: IAssignment[] = this.getAssignments(this.assignmentsJson);

  constructor(
    private removeSpacingAndCapFirstLetter: RemoveSpacingAndCapFirstLetter
  ) {}

  ngOnInit(): void {}

  getAssignments(assignmentsJson: IAssignmentJSON[]): IAssignment[] {
    return assignmentsJson.map((assignment) => {
      return {
        endDate: assignment.endDate,
        startDate: assignment.startDate,
        title: assignment.title,
        employer: assignment.employer,
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

  removeSpacingCapEachLetter(str: string): string {
    return this.removeSpacingAndCapFirstLetter.removeSpacesAndCapEachWord(str);
  }
}
