import { Component, OnInit, HostListener } from '@angular/core';
import { ISkill, ISkillJson } from 'src/app/interfaces/skills';
import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';
import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';

import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  isDesktopOrBigger = true;
  skills: ISkill = {
    languages: '',
    languagesAry: [],
    frameworks: '',
    frameworksAry: [],
    softwareTools: '',
    softwareToolsAry: [],
    methods: '',
    methodsAry: [],
  };

  constructor(
    private arrayToStringService: ArrayToStringService,
    private currentScreenWidthService: CurrentScreenWidthService,
    private getDataService: GetDataService
  ) {}

  ngOnInit(): void {
    this.setSkills(this.getDataService.getSkillsData());
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isDesktopOrBigger = this.currentScreenWidthService.isScreenWidthLargeDesktopOrBigger();
  }

  setSkills(skillsJson: ISkillJson): void {
    this.skills = {
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
