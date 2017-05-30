import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';

//IMPORTING PAGES CREATED (login, :
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

//IMPORTING FIREBASE
import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
     public rootPage: any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

  // //IMPORTING FIREBASE LOGIN CREDENTIALS

  //       // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyDCbrG8l3JRYb7rREFxRq4h9nFQzDYiAAs",
  //   authDomain: "quickhire-840cc.firebaseapp.com",
  //   databaseURL: "https://quickhire-840cc.firebaseio.com",
  //   projectId: "quickhire-840cc",
  //   storageBucket: "quickhire-840cc.appspot.com",
  //   messagingSenderId: "1006055068592"
  // };
  // firebase.initializeApp(config);

    //WHEN THE USER IS LOGGED IN AND LOGGED OUT, DIFFERENT PAGES SHOW
    firebase.auth().onAuthStateChanged((user) => {
        //IF USER IS LOGGED IN: ROOT PAGE == TABS PAGE
      if(user) {
        this.rootPage = TabsPage;
        //IF USER IS NOT LOGGED IN: ROOT PAGE == LOGIN PAGE
      }else {
        this.rootPage = LoginPage;
      }
    });
    

   platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
