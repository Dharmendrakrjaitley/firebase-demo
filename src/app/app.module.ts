import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';

import {WindowService} from './common/window.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAtfG7wAs7UniUiFeRbxnKxFYQi-RTU-lM",
  authDomain: "fir-demo-4b4cd.firebaseapp.com",
  projectId: "fir-demo-4b4cd",
  storageBucket: "fir-demo-4b4cd.appspot.com",
  messagingSenderId: "540324460581",
  appId: "1:540324460581:web:75772fd655d3827431a7cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
