import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UsersServiceProvider } from '../../providers/users-service/users-service';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.-
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersServiceProvider]
})
export class LoginPage {

public emailField: any;
public passwordField: any;
// private users = [];
private usersList : any;
 
      constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public navCtrl: NavController, private modalCtrl: ModalController , navParams: NavParams, private usersService: UsersServiceProvider, public toastCtrl: ToastController) {

                    this.emailField = "you@you.com";
                    
                     this.listOurUsers();
    }

    signUserUp(){
        
            let loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
            loader.present();
        
      this.usersService.signUpUser(this.emailField, this.passwordField).then(authData => {
          //successful 
          loader.dismiss();
          this.navCtrl.setRoot(HomePage);

      }, error => {
          loader.dismiss();
            let toast = this.toastCtrl.create({
           message: error.message,
           duration: 3000
    });
    toast.present();                    
      }) 
    }

    listOurUsers(){
      this.usersService.loadUser(10)
      .then(data => {
        this.usersList = data;
      })
    }

    //login 
    submitLogin() {

       let loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
            loader.present();
        
      
      this.usersService.loginUser(this.emailField, this.passwordField).then(authData => {
          //successful
          loader.dismiss();
          this.navCtrl.setRoot(HomePage);

      }, error => {
          loader.dismiss();
            let toast = this.toastCtrl.create({
           message: error.message,
           duration: 3000
    });
    toast.present();  
      })
    }

    submitRegister(){
      
      let registerModal = this.modalCtrl.create(RegisterPage);
      registerModal.present();

    }

    showForgotPassword(){
    let prompt = this.alertCtrl.create({
    title: 'Please enter your Email!',
    message: "New password will be sent to your email" ,
    inputs: [
      {
        name: 'recoverEmail',
        placeholder: 'you@example.com'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
     {
      text: 'Submit',
      handler: data => {
        

        //add preloader
        let loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
          content: 'Resetting your password..'
        });

        //call usersService 
        this.usersService.forgotPasswordUser(data.recoverEmail).then(() => {
      
            //add toast 
            loading.dismiss().then(() => {
              
            //show pop up
            let alert = this .alertCtrl.create({
            title: 'Check your email',
            subTitle: 'Password reset suceesful',
            buttons: ['OK']  
         })
         alert.present();
        });

       }, error => {
        //show pop up
        let alert  = this .alertCtrl.create({
        title: 'Error resetting password',
        subTitle: error.message,
        buttons: ['OK']  
      });
      alert.present();
       });
       }
    }
  ] 
 });
  prompt.present();
}

  googleSignInUser(){
  this.usersService.googleSignInUser().then(() => {
    //success, redirect
    let toast = this.toastCtrl.create({
      message: 'User account created successfully....',
      duration: 3000
    });
    toast.present();
  });
}

  ionViewDidLoad(){
    console.log('ionViewDidLoad LoginPage');
  }
}
