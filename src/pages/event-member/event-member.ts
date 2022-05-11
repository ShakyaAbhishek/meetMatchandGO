import { PendingApprovalPage } from './../pending-approval/pending-approval';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { HomePage } from '../home/home';
import { EventFriendPage } from '../event-friend/event-friend';

/**
 * Generated class for the EventMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-member',
  templateUrl: 'event-member.html',
})
export class EventMemberPage {
  loading:any;
  eventMemberList:any;
  loggedData:any;
  loggedGender:any;
  loggedId: number;
  isevents=true;
  user:any;
  user_list: any;
  logged: boolean;
  // requestsend=false;
  // showMsg=false;
    constructor(public navCtrl: NavController,  private toastCtrl: ToastController,
      private commonService: CommonService,
      public loadingCtrl: LoadingController,
      public platform: Platform,
      public navParams: NavParams) {
        this.user = {
          id:'',
        }
        this.logged = localStorage.getItem('user') ? true : false;
        this.loggedData = JSON.parse(localStorage.getItem('user'));
        this.loggedId = this.loggedData['userId'];
        this.loggedGender = this.loggedData['gender'];
        //alert(this.loggedGender);
        this.showLoader();
        this.commonService.getCompleteEvent(this.loggedData['userId']).subscribe((result1) => {
          let result = JSON.parse(result1['_body']);
          if (result['Status']) {
            this.eventMemberList = typeof result['Msg']['event_list'] != 'string'? result['Msg']['event_list']: [];
          this.isevents = this.eventMemberList.length>0?true:false;
            this.loading.dismiss();
          }
        });
        platform.registerBackButtonAction(() => {
          //console.log("second");
          //alert('Back pressed');
          // this.navCtrl.pop();
          this.navCtrl.setRoot(HomePage);
          //backAction();
        },2);
  }
  getEMember(id: any, isloader: boolean) {
    if (!isloader)
      this.showLoader();
    console.log(id);
    this.commonService.getUserMemberByEvents(id,this.loggedData['userId']).subscribe((result1) => {

      let result = JSON.parse(result1['_body']);
      if (result['Status']) {
          //console.log(result['Msg']['user_list']);
        this.user_list = typeof result['Msg']['user_list']=='string'?[]:result['Msg']['user_list'];
        if (!isloader)
          this.loading.dismiss();
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventMemberPage');
  }
  sendfriendRequests(receiver_id:any,event_id:any,isloader:boolean){
    if (!isloader)
    this.showLoader();
    // console.log(id);
    this.commonService.sendfriendRequests(this.loggedData['userId'],receiver_id,event_id).subscribe((result1) => {
   if (!isloader){
     this.loading.dismiss();
    }
    let result = JSON.parse(result1['_body']);
    if (result['Status']) {
    //  this.navCtrl.setRoot(EventFriendPage);

    
    console.log("request send"); 
    // this.requestsend=true;
    this.presentToast("Friend request send");
    this.navCtrl.setRoot(PendingApprovalPage);
    }
    else{
      // this.showMsg=true;
      // this.presentToast("Friend request already sent.")
    }
  });
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    this.loading.present();
  }
  opnchat(){
    this.navCtrl.setRoot(EventFriendPage);
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



}
