 import { Component } from '@angular/core';
 import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
 import { ResetPasswordPage } from '../reset-password/reset-password';


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }
 
  closeRegisterPage(){
    this.viewCtrl.dismiss(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  redirectToResetPage(){
    this.navCtrl.push(ResetPasswordPage);
  }

}
