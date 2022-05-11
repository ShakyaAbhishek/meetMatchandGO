import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { HomePage } from '../home/home';
import { EventFriendPage } from '../event-friend/event-friend';
/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
  loading: any;
  terms={
    content_text:''
  };
  logged: boolean;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public commonService: CommonService,
    public platform: Platform,
    public navParams: NavParams) {
    this.showLoader();
    this.logged = localStorage.getItem('user') ? true : false;
    this.commonService.getTermCondition().subscribe((result1) => {
      let result = JSON.parse(result1['_body']);
      this.loading.dismiss();
      if (result['Status']) {
        //if (typeof result['result'] == 'object' && result['result'].length > 0)
        this.terms = result['result'];
        /* else {
          this.presentToast('No Faq found.');
        } */
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
    console.log('ionViewDidLoad TermsPage');
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
