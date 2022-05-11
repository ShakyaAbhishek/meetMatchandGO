import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform, AlertController } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { ValidationService } from '../../service/validation.service';
import { TicketHolderDetailsPage } from "../ticket-holder-details/ticket-holder-details";
import { EventDetailsPage } from '../event-details/event-details';
import { EventFriendPage } from '../event-friend/event-friend';
/**
 * Generated class for the TicketRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-registration',
  templateUrl: 'ticket-registration.html',
})
export class TicketRegistrationPage {
  loading: any;
  errors: any;
  user = {
    id:'',
    title: '',
    first_name: '',
    last_name: '',
  // dob: '',
    gender: '',
    email: '',
    code:'',
    phone: '',
    qty: '',
    agree: '',
    event_id:'',
    discount:''
  };
  eventname: any;
  //event: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public commonService: CommonService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public platform: Platform,
    public validation:ValidationService) {
    this.errors = {
      title: '',
      first_name: '',
      last_name: '',
      dob: '',
      gender: '',
      code: '',
      email: '',
      phone: '',
      qty: '',
      agree: ''
    };
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user)
      this.user.id = this.user['userId'];
      this.user.event_id = navParams.get('event_id');
     
      if (navParams.get('event_id')){
        this.showLoader();
        this.commonService.getEventDetail(navParams.get('event_id')).subscribe((result1) => {
          let result = JSON.parse(result1['_body']);
          this.loading.dismiss();
          if (result['Status']) {
              this.user.code = result['result']['voucher']; 
              this.eventname = result['result']['event_type'];
              //console.log(this.event['voucher']);
          }
        });
      }

      platform.registerBackButtonAction(() => {
        //console.log("second");
        //alert('Back pressed'); 
        // this.navCtrl.pop();
        this.navCtrl.setRoot(EventDetailsPage,{event_id: navParams.get('event_id')});
        //backAction();
      },2);
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad TicketRegistrationPage');
    }
    opnchat(){
      this.navCtrl.setRoot(EventFriendPage);
    }
    // ticketRegistration(){
    //   let valid = this.validation.ticketRegistration(this.user);
    //   this.errors = valid.errors;
    //   if (!valid.err) {
    //     //console.log("login credentials", this.user);
    //     if (this.user.code){
    //       this.showLoader();
    //       this.commonService.validateCode(this.user).subscribe((result1) => {
    //         let result = JSON.parse(result1['_body']);
    //         this.loading.dismiss();
    //         if (result['Status'] == true) {
    //           this.user.discount = result['discount'];
    //           //console.log(JSON.stringify(this.user));
    //           this.navCtrl.setRoot(TicketHolderDetailsPage,{userDetail: JSON.stringify(this.user)});
    //         }
    //         else{
    //           this.errors.code = result['Msg'].toString();
    //         }
    //       });
    //     }
    //     else{
    //       //console.log(JSON.stringify(this.user));
    //       this.navCtrl.setRoot(TicketHolderDetailsPage, { userDetail: JSON.stringify(this.user) });
    //     }
    //   }
    // }
    ticketRegistration() {
      let valid = this.validation.ticketRegistration(this.user);
        this.errors = valid.errors;
      if (this.user.phone == '0000000000') {
        let alert = this.alertCtrl.create({
          title: 'Alert',
          subTitle: 'Please update your mobile and hobbies within your profile to book events',
          buttons: [{
            text: 'ok',
            role: 'ok',
            handler: () => {
                this.navCtrl.setRoot(ProfilePage);
            }}]
        });
        alert.present();
      }

  
      if (!valid.err) {
        //  console.log("login credentials", this.user);
        if (this.user.code) {
          this.showLoader();
          this.commonService.validateCode(this.user).subscribe((result1) => {
            let result = JSON.parse(result1['_body']);
            this.loading.dismiss();
            if (result['Status'] == true) {
              this.user.discount = result['discount'];
              //console.log(JSON.stringify(this.user));
              this.navCtrl.setRoot(TicketHolderDetailsPage, { userDetail: JSON.stringify(this.user) });
            }
            else {
              this.errors.code = result['Msg'].toString();
            }
  
          });
        }
        else {
          //console.log(JSON.stringify(this.user));
          this.navCtrl.setRoot(TicketHolderDetailsPage, { userDetail: JSON.stringify(this.user) });
        }
  
      }
      else {
        this.errors = valid.errors;
      //  this.navCtrl.setRoot(TicketRegistrationPage);

  
      }
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
