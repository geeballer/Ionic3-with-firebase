import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersServiceProvider } from '../../providers/users-service/users-service'
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
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
  private userPhotoUrl: any;
  private userDisplayName: any;

  constructor( private usersService: UsersServiceProvider, public navCtrl: NavController, public navParams: NavParams) {


  var myUserId  = firebase.auth().currentUser.uid;

  this.displayUser(myUserId);

  }

  displayUser(theUserId) {

      var that = this;
      
      this.usersService.viewUser(theUserId).then(snapshot => {

        //get User photo
      that.userPhotoUrl = snapshot.val().photo;// get user photo
      that.userDisplayName = snapshot.val().username;
    })
  }

  logUserOut (){
    //CALL USER SERVICE

    this.usersService.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersDetailPage');
  }

}
