import { Injectable } from '@angular/core';

import { ParseDataService } from 'src/app/services/parse-data/parse-data.service';

import { IAssignment, IAssignmentJSON } from 'src/app/interfaces/assignment';
import { ICourseTrainingItem } from 'src/app/interfaces/courseTraining';
import { IEducation } from 'src/app/interfaces/education';
import { IEmployerHistory } from 'src/app/interfaces/employerHistory';
import { IOther } from 'src/app/interfaces/other';
import { ISkillJson } from 'src/app/interfaces/skills';

import _assignmentsJson from 'src/assets/data/assignments.json';
import _courseTrainingJSON from 'src/assets/data/courses-training.json';
import _educationJSON from 'src/assets/data/education.json';
import _employerHistoryJSON from 'src/assets/data/employer-history.json';
import _otherJson from 'src/assets/data/other.json';
import _skillsJson from 'src/assets/data/skills.json';

@Injectable()
export class GetDataService {
  constructor(private parseDataService: ParseDataService) {}

  getAssignmentData(): IAssignment[] {
    return this.parseDataService.setAssignments(
      _assignmentsJson as IAssignmentJSON[]
    );
  }

  getCourseTrainingData(): ICourseTrainingItem {
    return _courseTrainingJSON as ICourseTrainingItem;
  }

  getEducationData(): IEducation[] {
    return _educationJSON as IEducation[];
  }

  getEmployerHistoryData(): IEmployerHistory[] {
    return _employerHistoryJSON as IEmployerHistory[];
  }

  getOtherData(): IOther {
    return _otherJson as IOther;
  }

  getSkillsData(): ISkillJson {
    return _skillsJson as ISkillJson;
  }
}
