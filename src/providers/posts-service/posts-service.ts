import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the PostsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsServiceProvider {

  private data: any;
  private userNode: any;
  private fireRef: any;
  private postsNode: any;
  private usersPostsNode: any;


  constructor(private http: Http) {
    console.log('Hello PostsServiceProvider Provider');
    this.userNode = firebase.database().ref('users');
    this.postsNode = firebase.database().ref('posts');
    this.usersPostsNode = firebase.database().ref('user-posts');
    this.fireRef = firebase.database().ref();

  }

    // VIEW A CERTAIN POST
    viewPostService(postId: any) {
      var userRef = this.postsNode.child(postId);
      return userRef.once('value');
    }

    //VIEW ALL POSTS MADE BY THIS USERID
    viewUsersPostsService(userId: any) {
      var userRef = this .usersPostsNode.child(userId);
      return userRef.on('value');
    }

    listPostService() {
      return this.postsNode.once('value');
    }

    createPostService(userId: any, postBody: any) {
      // A POST ENTRY
      var postData = {
        uid: userId,
        body: postBody
      };

      //GET A KEY FOR A NEW POST
      var newPostKey = this.postsNode.push().key;

      // WRITE THE NEW POST'S DATA SIMULTAENOUSLY IN THE POSTS LIST AND THE USER'S POST
      var updatePath = {};
      updatePath['/posts/' + newPostKey] = postData
      updatePath['/user-posts/' +userId+"/"+ newPostKey] = postData;

      //UPDATE BOTH SIMULTAENEOUSLY
      return this.fireRef.update(updatePath);
  
  }
}
