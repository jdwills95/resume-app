import { Component, OnInit } from '@angular/core';
import { IOther } from 'src/app/interfaces/other';

import otherJson from 'src/app/data/other.json';

export type otherFields = 'operatingSystems' | 'software';
export type otherFieldsSecondary = 'advance' | 'intermediate' | 'beginner';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss'],
})
export class OtherInfoComponent implements OnInit {
  otherInfoSkills: IOther = this.getOtherInfoSkills(otherJson);

  constructor() {}

  ngOnInit(): void {}

  getOtherInfoSkills(otherJson: IOther): IOther {
    return {
      operatingSystems: {
        advance: this.existCheck(otherJson, 'operatingSystems', 'advance'),
        intermediate: this.existCheck(
          otherJson,
          'operatingSystems',
          'intermediate'
        ),
        beginner: this.existCheck(otherJson, 'operatingSystems', 'beginner'),
      },
      software: {
        advance: this.existCheck(otherJson, 'software', 'advance'),
        intermediate: this.existCheck(otherJson, 'software', 'intermediate'),
        beginner: this.existCheck(otherJson, 'software', 'beginner'),
      },
      certifications: otherJson.certifications,
      businessKnowledge: otherJson.businessKnowledge,
    };
  }

  existCheck(
    otherJson: IOther,
    field: otherFields,
    fieldSecordary: otherFieldsSecondary
  ): string[] | undefined {
    if (otherJson[field]) {
      const skillLvl = otherJson[field];
      if (skillLvl[fieldSecordary]) {
        //@ts-ignore
        const skill: string[] = skillLvl[fieldSecordary];
        return skill;
      }
    }
    return undefined;
  }
}
