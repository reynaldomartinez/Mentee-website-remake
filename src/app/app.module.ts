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
import { VideosComponent } from './components/videos/videos.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';


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
    VideosComponent,
    SocialMediaComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
