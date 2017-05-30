import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UsersDetailPage } from '../pages/users-detail/users-detail';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersServiceProvider } from '../providers/users-service/users-service';

import * as firebase from 'firebase';

 //IMPORTING FIREBASE LOGIN CREDENTIALS

        // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDCbrG8l3JRYb7rREFxRq4h9nFQzDYiAAs",
    authDomain: "quickhire-840cc.firebaseapp.com",
    databaseURL: "https://quickhire-840cc.firebaseio.com",
    projectId: "quickhire-840cc",
    storageBucket: "quickhire-840cc.appspot.com",
    messagingSenderId: "1006055068592"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UsersDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UsersDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersServiceProvider
  ]
})
export class AppModule {}
