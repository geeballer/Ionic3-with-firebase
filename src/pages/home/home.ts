import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsersServiceProvider } from '../../providers/users-service/users-service'
import { UsersDetailPage } from '../users-detail/users-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public usersService: UsersServiceProvider) {

  } 

  redirectToUserDetailPage() {
    
    //redirect here
    this.navCtrl.push(UsersDetailPage);
  }

}
