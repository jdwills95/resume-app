import { Component, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interfaces/skills';

import skillsJson from 'src/app/data/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: ISkill[] = this.getAssignments(skillsJson);
  languages = 0;
  frameworks = 1;
  softwareTools = 2;
  methods = 3;

  constructor() {}

  ngOnInit(): void {}

  getAssignments(skillsJson: ISkill[]): ISkill[] {
    return skillsJson.map((skill) => {
      return {
        languages: skill.languages,
        frameworks: skill.frameworks,
        softwareTools: skill.softwareTools,
        methods: skill.methods,
      };
    });
  }
}
