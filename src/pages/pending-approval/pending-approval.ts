import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { HomePage } from '../home/home';
import { EventFriendPage } from '../event-friend/event-friend';

/**
 * Generated class for the PendingApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-approval',
  templateUrl: 'pending-approval.html',
})
export class PendingApprovalPage {
  loading:any;
  requests:any;
  loggedData:any;
  loggedId: number;
  isrequests=true;
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private commonService: CommonService,
    public loadingCtrl: LoadingController,
    public platform: Platform,
    public navParams: NavParams) {
    this.loggedData = JSON.parse(localStorage.getItem('user'));
    this.loggedId = this.loggedData['userId'];
    this.showLoader();
    this.commonService.getPendingSentRequestByUser(this.loggedData['userId']).subscribe((result1) => {
      let result = JSON.parse(result1['_body']);
      //console.log(result);
      if (result['Status']) {
        this.requests = typeof result['Msg']['request_list'] != 'string'? result['Msg']['request_list']: [];
          this.isrequests = this.requests.length>0?true:false;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingApprovalPage');
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
