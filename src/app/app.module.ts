import { StatusesService } from './statuses/statuses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
// Import the AngularFireModule and the AngularFireDatabaseModule
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatusesComponent } from './statuses/statuses.component';

// Define the firebase database configuration keys, get it from your Firebase application console
export const firebaseConfig = {
  apiKey: 'AIzaSyBmDxRORJ_ucr4a3r3ahoTq8m8Pqal-lK8',
  authDomain: 'react-c428b.firebaseapp.com',
  databaseURL: 'https://react-c428b.firebaseio.com',
  projectId: 'react-c428b',
  storageBucket: '',
  messagingSenderId: '542854959274'
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
