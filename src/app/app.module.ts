import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarDesktopComponent } from './components/nav-bar-desktop/nav-bar-desktop.component';

import { CurrentScreenWidthService } from 'src/app/services/current-screen-width/current-screen-width.service';
import { NavBarService } from 'src/app/services/nav-bar/nav-bar.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { ArrayToStringService } from 'src/app/services/array-to-string/array-to-string.service';
import { NavBarMobileComponent } from './components/nav-bar-mobile/nav-bar-mobile.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmployerHistoryComponent } from './components/employer-history/employer-history.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CourseTrainingComponent } from './components/course-training/course-training.component';
import { EducationComponent } from './components/education/education.component';
import { OtherInfoComponent } from './components/other-info/other-info.component';
@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [
    CurrentScreenWidthService,
    NavBarService,
    ScrollService,
    ArrayToStringService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
