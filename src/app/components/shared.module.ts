import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
import { RemoveSpacingCapFirstLetterPipe } from 'src/app/pipes/remove-spacing-cap-first-letter/remove-spacing-cap-first-letter.pipe';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
import { ParseDataService } from 'src/app/services/parse-data/parse-data.service';
import { ThemeToggleService } from 'src/app/services/theme/theme.service';
import {
  THEME_STORAGE_SERVICE,
  ThemeLocalStorageService,
} from 'src/app/services/theme/theme-storage-service';
import { CertificationsComponent } from './certifications/certifications.component';

@NgModule({
  imports: [CommonModule, NgbModule, FontAwesomeModule],
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
    CertificationsComponent,
  ],
  exports: [
    CommonModule,
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
    CertificationsComponent,
  ],
  providers: [
    CurrentScreenWidthService,
    NavBarService,
    ScrollService,
    ArrayToStringService,
    GetDataService,
    RemoveSpacingCapFirstLetterPipe,
    ParseDataService,
    ThemeToggleService,
    {
      provide: THEME_STORAGE_SERVICE,
      useClass: ThemeLocalStorageService,
    },
  ],
})
export class SharedModule {}
