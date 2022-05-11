import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { ValidationService } from '../../service/validation.service';
import { EventFriendPage } from '../event-friend/event-friend';

/**
 * Generated class for the SendEnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-enquiry',
  templateUrl: 'send-enquiry.html',
})
export class SendEnquiryPage {
user:any;
errors:any;
loading: any;

  user_Service: any;
  constructor(public navCtrl: NavController,
    public commonService: CommonService,
    private validation: ValidationService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public platform: Platform,
    public navParams: NavParams) {
   
    this.user = {
      name:'',
      email:'',
      subject:'',
      message:'',
      
      
    };
    this.errors = {
      name:'',
      email:'',
      message:'',
      subject:'',
    };
    let loggedUser = JSON.parse(localStorage.getItem('user'));
    this.user.email = loggedUser?loggedUser['email']:'';
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(ContactPage);
      //backAction();
    },2);
  }
  contactUs(){
    // alert(this.user.name);
    // alert(this.user.email);
    // alert(this.user.message);
    // alert(this.user.subject);
    let valid = this.validation.sendEnquiry(this.user);
    if (!valid.err) {
      this.showLoader();
      this.commonService.sendEnquiry(this.user).subscribe((result1) => {
        let result = JSON.parse(result1['_body']);
        if (result['Status']) {
          this.presentToast("Message successfully sent.");
          this.loading.dismiss();
          setTimeout(() => {
             this.navCtrl.setRoot(ContactPage, {}, { animate: true, direction: 'forward' });
          },2000);
         
        }
        else {
          this.loading.dismiss();
          //this.presentToast("Unfortunately, your message was not sent - Please try again shortly.");
          this.presentToast(result['Msg']);
        }
      });
    }
    else {
      this.errors = valid.errors;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendEnquiryPage');
  }
  opnchat(){
    this.navCtrl.setRoot(EventFriendPage);
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    this.loading.present();
  }
  presentToast(msg) {
    
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 8000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
