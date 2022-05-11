import { SendEnquiryPage } from './../send-enquiry/send-enquiry';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { HomePage } from "../home/home";
import { EventFriendPage } from '../event-friend/event-friend';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  loading: any;
  contactDtl = {
    email: "info@meetmatchandgo.com",
    mobile: "",
    phone: "0845 299 7575",
    fax: "",
    address: " MEETMATCHANDGO LIMITED<br>\r\n49 Station Road,<br>\r\nPolegate,<br>\r\nEast Sussex,<br>\r\nBN26 6EA",
    web_address: "https://www.meetmatchandgo.com/"
  };
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public commonService: CommonService,
    public platform: Platform,
    public navParams: NavParams) {
    this.showLoader();
    this.commonService.getContactDetail().subscribe((result1) => {
      let result = JSON.parse(result1['_body']);
      this.loading.dismiss();
      if (result['Status']) {
        //if (typeof result['result'] == 'object' && result['result'].length > 0)
        this.contactDtl = result['result'];
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
  sendEnquiry(){
    this.navCtrl.setRoot(SendEnquiryPage, {}, {animate: true , direction: 'forword'});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
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
