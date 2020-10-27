import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JobsComponent } from './jobs/jobs.component';
import { ClientsComponent } from './clients/clients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorageModule, AngularFireStorage} from "@angular/fire/storage";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    JobsComponent,
    ClientsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
