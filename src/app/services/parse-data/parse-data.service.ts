import { Injectable } from '@angular/core';
import { IAssignmentJSON, IAssignment } from 'src/app/interfaces/assignment';

import { ICourseTrainingItem } from 'src/app/interfaces/courseTraining';
import { IEducation } from 'src/app/interfaces/education';
import { IEmployerHistory } from 'src/app/interfaces/employerHistory';
import {
  IOther,
  OtherFields,
  OtherFieldsSecondary,
} from 'src/app/interfaces/other';
import { ISkillJson, ISkill } from 'src/app/interfaces/skills';

import { ArrayToStringService } from 'src/app/services//array-to-string/array-to-string.service';

@Injectable()
export class ParseDataService {
  constructor(private arrayToStringService: ArrayToStringService) {}

  existCheck(
    otherJson: IOther,
    field: OtherFields,
    fieldSecordary: OtherFieldsSecondary
  ): string[] | undefined {
    if (otherJson[field]) {
      const skillLvl = otherJson[field];
      if (skillLvl[fieldSecordary]) {
        // @ts-ignore
        const skill: string[] = skillLvl[fieldSecordary];
        return skill;
      }
    }
    return undefined;
  }

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

  setCourseTraining(
    courseTrainingItem: ICourseTrainingItem
  ): ICourseTrainingItem {
    return {
      badges: courseTrainingItem.badges,
      training: courseTrainingItem.training,
    };
  }

  setEducation(education: IEducation[]): IEducation[] {
    return education.map((degree) => {
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

  setEmployerHistory(
    employerHistoryJSON: IEmployerHistory[]
  ): IEmployerHistory[] {
    return employerHistoryJSON.map((employer) => {
      return {
        endDate: employer.endDate,
        startDate: employer.startDate,
        employer: employer.employer,
        jobTitle: employer.jobTitle,
        location: employer.location,
        desc: {
          desct: employer.desc.desct,
          task: employer.desc.task,
        },
      };
    });
  }

  setOther(other: IOther): IOther {
    return {
      operatingSystems: {
        advanced: this.existCheck(other, 'operatingSystems', 'advanced'),
        intermediate: this.existCheck(
          other,
          'operatingSystems',
          'intermediate'
        ),
        beginner: this.existCheck(other, 'operatingSystems', 'beginner'),
      },
      software: {
        advanced: this.existCheck(other, 'software', 'advanced'),
        intermediate: this.existCheck(other, 'software', 'intermediate'),
        beginner: this.existCheck(other, 'software', 'beginner'),
      },
      certifications: other.certifications,
      businessKnowledge: other.businessKnowledge,
    };
  }

  setSkills(skillJson: ISkillJson): ISkill {
    return {
      languages: this.arrayToStringService.arrayToString(skillJson.languages),
      languagesAry: skillJson.languages,
      frameworks: this.arrayToStringService.arrayToString(skillJson.frameworks),
      frameworksAry: skillJson.frameworks,
      softwareTools: this.arrayToStringService.arrayToString(
        skillJson.softwareTools
      ),
      softwareToolsAry: skillJson.softwareTools,
      methods: this.arrayToStringService.arrayToString(skillJson.methods),
      methodsAry: skillJson.methods,
    };
  }
}
