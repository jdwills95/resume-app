import { Component, OnInit, HostListener } from '@angular/core';
import { ISkill, ISkillJson } from 'src/app/interfaces/skills';
import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';
import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';

import skillsJson from 'src/assets/data/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  isDesktopOrBigger = true;
  skills: ISkill = this.getAssignments(skillsJson);

  constructor(
    private arrayToStringService: ArrayToStringService,
    private currentScreenWidthService: CurrentScreenWidthService
  ) {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isDesktopOrBigger = this.currentScreenWidthService.isScreenWidthLargeDesktopOrBigger();
  }

  getAssignments(skillsJson: ISkillJson): ISkill {
    return {
      languages: this.arrayToStringService.arrayToString(skillsJson.languages),
      languagesAry: skillsJson.languages,
      frameworks: this.arrayToStringService.arrayToString(
        skillsJson.frameworks
      ),
      frameworksAry: skillsJson.frameworks,
      softwareTools: this.arrayToStringService.arrayToString(
        skillsJson.softwareTools
      ),
      softwareToolsAry: skillsJson.softwareTools,
      methods: this.arrayToStringService.arrayToString(skillsJson.methods),
      methodsAry: skillsJson.methods,
    };
  }
}
