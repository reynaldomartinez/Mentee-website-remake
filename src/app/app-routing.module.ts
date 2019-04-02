import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProgramsComponent } from './pages/programs/programs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admissions', component: AdmissionsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'programs', component: ProgramsComponent},
  // add programs component
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
