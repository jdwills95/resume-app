import { Component, OnInit } from '@angular/core';
import { IAssignment } from 'src/app/interfaces/assignment';

import assignmentsJson from 'src/app/data/assignments.json';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.sass']
})
export class AssignmentComponent implements OnInit {
  assignments: IAssignment[] = assignmentsJson;

  constructor() { }

  ngOnInit(): void {
  }

}
