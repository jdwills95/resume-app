import { Injectable } from '@angular/core';

import { IAssignmentJSON } from 'src/app/interfaces/assignment';
import { ICourseTrainingItem } from 'src/app/interfaces/courseTraining';
import { IEducation } from 'src/app/interfaces/education';
import { IEmployerHistoryJSON } from 'src/app/interfaces/employerHistory';
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
  getAssignmentData(): IAssignmentJSON[] {
    return _assignmentsJson as IAssignmentJSON[];
  }

  getCourseTrainingData(): ICourseTrainingItem {
    return _courseTrainingJSON as ICourseTrainingItem;
  }

  getEducationData(): IEducation[] {
    return _educationJSON as IEducation[];
  }

  getEmployerHistoryData(): IEmployerHistoryJSON[] {
    return _employerHistoryJSON as IEmployerHistoryJSON[];
  }

  getOtherData(): IOther {
    return _otherJson as IOther;
  }

  getSkillsData(): ISkillJson {
    return _skillsJson as ISkillJson;
  }
}
