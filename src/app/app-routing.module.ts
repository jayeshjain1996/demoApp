import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"register",component:RegisterComponent},
  {path:"jobs",component:JobsComponent},
  {path:"clients",component:ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
