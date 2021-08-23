import { Component, OnInit } from '@angular/core';
import { IAssignment } from 'src/app/interfaces/assignment';

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
    private getDataService: GetDataService
  ) {}

  ngOnInit(): void {
    this.assignments = this.getDataService.getAssignmentData();
  }

  removeSpacingCapEachLetter(str: string): string {
    return this.removeSpacingAndCapFirstLetter.transform(str);
  }
}
