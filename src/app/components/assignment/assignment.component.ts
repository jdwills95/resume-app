import { Component, OnInit } from '@angular/core';
import { IAssignmentJSON, IAssignment } from 'src/app/interfaces/assignment';

import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
import { RemoveSpacingCapFirstLetterPipe } from 'src/app/pipes/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.pipe';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {
  assignments: IAssignment[] = [];

  constructor(
    private removeSpacingAndCapFirstLetter: RemoveSpacingCapFirstLetterPipe,
    private arrayToStringService: ArrayToStringService,
    private getDataService: GetDataService
  ) {}

  ngOnInit(): void {
    this.setAssignments(this.getDataService.getAssignmentData());
  }

  /**
   * Sets assignments with data from assignmentsJson.
   *
   * @param assignmentsJson {IAssignmentJSON[]} data to set assignments with.
   */
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
    return this.removeSpacingAndCapFirstLetter.transform(str);
  }
}
