import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersServiceProvider } from '../../providers/users-service/users-service'
import { PostsServiceProvider } from '../../providers/posts-service/posts-service'
import { UsersDetailPage } from '../users-detail/users-detail';
import { PostAddPage } from '../post-add/post-add';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PostsServiceProvider, UsersServiceProvider]
})
export class HomePage {

  private userPostLists = []; 
  private userProfileLists: any;
  private userDisplayName: any;
  private userEmail: any;
  private userPhoto: any;
  private userId: any;


  constructor(public navCtrl: NavController, private usersService: UsersServiceProvider, private postsServiceProvider: PostsServiceProvider) {
    
    this.userProfileLists = firebase.database().ref('users');
    this.userId = firebase.auth().currentUser.uid;
    //get List of posts on page init
    this.listPosts();
  } 

  redirectToUserDetailPage() {
    
    //redirect here
    this.navCtrl.push(UsersDetailPage);
  }

    redirectToPostAddPage() {
    
    //redirect here
    this.navCtrl.push(PostAddPage);
  }
  
    listPosts() {
      var that = this;
      this.postsServiceProvider.listPostService().then(snapshot => {
        
       that.userPostLists.length = 0;

       snapshot.forEach(function (childSnapshot) {
         var data = childSnapshot.val();
         data['key'] = childSnapshot.key;
         that.userPostLists.push(data);

         console.log("post details: "+that.userPostLists);
         //GET THE USER'S DETAIL
           that.usersService.viewUser(that.userId).then(snapshotUser => {
             that.userDisplayName = snapshotUser.val().username;
             that.userEmail = snapshotUser.val().email;
             that.userPhoto = snapshotUser.val().photo;

             //check console section of your browser to inspect
             console.log("user details: "+ snapshotUser.val() );

         })

       });

      });
    }
}
