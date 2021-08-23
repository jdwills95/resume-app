import { Injectable } from '@angular/core';
import { IAssignmentJSON, IAssignment } from 'src/app/interfaces/assignment';

import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';

@Injectable()
export class ParseDataService {
  constructor(private arrayToStringService: ArrayToStringService) {}

  /**
   * Sets assignments with data from assignmentsJson.
   *
   * @param assignmentsJson {IAssignmentJSON[]} data to set assignments with.
   */
  setAssignments(assignmentsJson: IAssignmentJSON[]): IAssignment[] {
    return assignmentsJson.map((assignment) => {
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
}
