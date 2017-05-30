import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersServiceProvider } from '../../providers/users-service/users-service'
import { LoginPage } from '../login/login';
/**
 * Generated class for the UsersDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users-detail',
  templateUrl: 'users-detail.html',
  providers: [UsersServiceProvider]
})
export class UsersDetailPage {

  constructor( private usersService: UsersServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  logUserOut (){
    //CALL USER SERVICE

    this.usersService.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    })  ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersDetailPage');
  }

}
