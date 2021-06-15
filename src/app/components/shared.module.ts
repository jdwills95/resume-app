import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AssignmentComponent } from 'src/app/components/assignment/assignment.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavBarDesktopComponent } from 'src/app/components/nav-bar-desktop/nav-bar-desktop.component';
import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';
import { NavBarMobileComponent } from 'src/app/components/nav-bar-mobile/nav-bar-mobile.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { EmployerHistoryComponent } from 'src/app/components/employer-history/employer-history.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { CourseTrainingComponent } from 'src/app/components/course-training/course-training.component';
import { EducationComponent } from 'src/app/components/education/education.component';
import { OtherInfoComponent } from 'src/app/components/other-info/other-info.component';
import { NavBarContentComponent } from 'src/app/components/nav-bar-content/nav-bar-content.component';
import { RemoveSpacingAndCapFirstLetter } from 'src/app/services/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.service';
import { RemoveSpacingCapFirstLetterPipe } from 'src/app/pipes/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.pipe';

@NgModule({
  imports: [CommonModule, BrowserModule, NgbModule, FontAwesomeModule],
  declarations: [
    AssignmentComponent,
    FooterComponent,
    HeaderComponent,
    NavBarDesktopComponent,
    NavBarMobileComponent,
    ContactComponent,
    EmployerHistoryComponent,
    SkillsComponent,
    CourseTrainingComponent,
    EducationComponent,
    OtherInfoComponent,
    NavBarContentComponent,
    RemoveSpacingCapFirstLetterPipe,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AssignmentComponent,
    FooterComponent,
    HeaderComponent,
    NavBarDesktopComponent,
    NavBarMobileComponent,
    ContactComponent,
    EmployerHistoryComponent,
    SkillsComponent,
    CourseTrainingComponent,
    EducationComponent,
    OtherInfoComponent,
    NavBarContentComponent,
    RemoveSpacingCapFirstLetterPipe,
  ],
  providers: [
    CurrentScreenWidthService,
    NavBarService,
    ScrollService,
    ArrayToStringService,
    RemoveSpacingAndCapFirstLetter,
  ],
  entryComponents: [],
})
export class SharedModule {}
