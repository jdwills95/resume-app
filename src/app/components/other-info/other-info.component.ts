import { Component, OnInit } from '@angular/core';
import { IOther } from 'src/app/interfaces/other';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

export type otherFields = 'operatingSystems' | 'software';
export type otherFieldsSecondary = 'advanced' | 'intermediate' | 'beginner';

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styleUrls: ['./other-info.component.scss'],
})
export class OtherInfoComponent implements OnInit {
  otherInfoSkills: IOther = {
    operatingSystems: {},
    software: {},
    certifications: [],
    businessKnowledge: [],
  };

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.setOtherInfoSkills(this.getDataService.getOtherData());
  }

  setOtherInfoSkills(otherJson: IOther): void {
    this.otherInfoSkills = {
      operatingSystems: {
        advanced: this.existCheck(otherJson, 'operatingSystems', 'advanced'),
        intermediate: this.existCheck(
          otherJson,
          'operatingSystems',
          'intermediate'
        ),
        beginner: this.existCheck(otherJson, 'operatingSystems', 'beginner'),
      },
      software: {
        advanced: this.existCheck(otherJson, 'software', 'advanced'),
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
        // @ts-ignore
        const skill: string[] = skillLvl[fieldSecordary];
        return skill;
      }
    }
    return undefined;
  }
}
