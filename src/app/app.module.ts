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
import { NavBarMobileComponent } from './components/nav-bar-mobile/nav-bar-mobile.component';
@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    FooterComponent,
    HeaderComponent,
    NavBarDesktopComponent,
    NavBarMobileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [CurrentScreenWidthService, NavBarService, ScrollService],
  bootstrap: [AppComponent],
})
export class AppModule {}
