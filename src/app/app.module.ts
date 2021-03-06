import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { HomeComponent } from './pages/home/home.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { MedicalNewsComponent } from './components/medical-news/medical-news.component';
import { OurVideosComponent } from './components/our-videos/our-videos.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProgramDescComponent } from './components/program-desc/program-desc.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    HomeComponent,
    AdmissionsComponent,
    ResourcesComponent,
    ContactUsComponent,
    GoogleMapComponent,
    ContactFormComponent,
    SocialMediaComponent,
    FooterComponent,
    MedicalNewsComponent,
    OurVideosComponent,
    ProgramsComponent,
    ProgramDescComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
