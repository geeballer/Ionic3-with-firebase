import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersDetailPage } from './users-detail';

@NgModule({
  declarations: [
    UsersDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersDetailPage),
  ],
  exports: [
    UsersDetailPage
  ]
})
export class UsersDetailPageModule {}
