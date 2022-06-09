import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CustomMaterialModule } from './core/material.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RemoveemployeeComponent } from './removeemployee/removeemployee.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from "@Angular/forms";


const firebaseConfig = {
  apiKey: "AIzaSyAhIFSS3tBfXXkSa8zyIsbWNe-dp54v1vA",
  authDomain: "employee-management-50181.firebaseapp.com",
  projectId: "employee-management-50181",
  storageBucket: "employee-management-50181.appspot.com",
  messagingSenderId: "988150774370",
  appId: "1:988150774370:web:fb06d60546f65538176f3b"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddemployeeComponent,
    RemoveemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    CustomMaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
