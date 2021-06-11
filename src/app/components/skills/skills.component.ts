import { Component, OnInit } from '@angular/core';
import { ISkill, ISkillJson } from 'src/app/interfaces/skills';
import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';

import skillsJson from 'src/app/data/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: ISkill = this.getAssignments(skillsJson);

  constructor(private arrayToStringService: ArrayToStringService) {}

  ngOnInit(): void {}

  getAssignments(skillsJson: ISkillJson): ISkill {
    return {
      languages: this.arrayToStringService.arrayToString(skillsJson.languages),
      frameworks: this.arrayToStringService.arrayToString(
        skillsJson.frameworks
      ),
      softwareTools: this.arrayToStringService.arrayToString(
        skillsJson.softwareTools
      ),
      methods: this.arrayToStringService.arrayToString(skillsJson.methods),
    };
  }
}
