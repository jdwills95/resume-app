import { Component, OnInit } from '@angular/core';
import { IAssignmentJSON, IAssignment } from 'src/app/interfaces/assignment';

import { RemoveSpacingAndCapFirstLetter } from 'src/app/services/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.service';
import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';

import _assignmentsJson from 'src/assets/data/assignments.json';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {
  assignmentsJson = _assignmentsJson as IAssignmentJSON[];
  assignments: IAssignment[] = [];

  constructor(
    private removeSpacingAndCapFirstLetter: RemoveSpacingAndCapFirstLetter,
    private arrayToStringService: ArrayToStringService
  ) {}

  ngOnInit(): void {
    this.setAssignments(this.assignmentsJson);
  }

  setAssignments(assignmentsJson: IAssignmentJSON[]): void {
    this.assignments = assignmentsJson.map((assignment) => {
      return {
        endDate: assignment.endDate,
        startDate: assignment.startDate,
        title: assignment.title,
        employer: assignment.employer,
        desc: assignment.desc,
        environments: this.arrayToStringService.arrayToString(
          assignment.environments
        ),
      };
    });
  }

  removeSpacingCapEachLetter(str: string): string {
    return this.removeSpacingAndCapFirstLetter.removeSpacesAndCapEachWord(str);
  }
}
