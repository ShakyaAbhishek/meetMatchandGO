import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform, AlertController } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { ValidationService } from '../../service/validation.service';
import { TicketRegistrationPage } from "../ticket-registration/ticket-registration";
import { PaymentPage } from "../payment/payment";
import { EventFriendPage } from '../event-friend/event-friend';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the TicketHolderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-holder-details',
  templateUrl: 'ticket-holder-details.html',
})
export class TicketHolderDetailsPage {
  loading: any;
  userdetail: any;
  tickets = [];
  eventDetail: any;
  errors = [];
  totalTicket: any;
  perTicket: any;
  total: any;
  groupDiscount: any;
  discount: any;
  gdiscount: any;
  gdiscount1: any;
  discount1: any;
  eventname: any;

  availavility_m: any;
  availavility_w: any;
  constructor(public navCtrl: NavController,
    public commonService: CommonService,
    public validation: ValidationService,
    public loadingCtrl: LoadingController,
    public platform: Platform,
    private alertCtrl: AlertController, 
    public toastCtrl: ToastController,
    public navParams: NavParams) {
    //console.log(this.navParams.get('userDetail'))
    this.userdetail = JSON.parse(this.navParams.get('userDetail'));
    //console.log(this.userdetail);

    this.totalTicket = this.userdetail['qty'];
    //console.log(JSON.stringify(this.userdetail));
    //console.log(this.userdetail['availability_f']);
    if (this.userdetail['qty']) {
      for (var i = 0; i < this.userdetail['qty']; i++) {
        if (i == 0) {
          this.tickets.push({ user_id: this.userdetail.userId, first_name: this.userdetail.first_name, last_name: this.userdetail.last_name, email: this.userdetail.email, gender: this.userdetail.gender });
        }
        else
          this.tickets.push({ user_id: 0, first_name: '', last_name: '', email: '', gender: this.userdetail.gender });
        this.errors.push({ user_id: '', first_name: '', last_name: '', email: '', gender: '' });
      }
       //console.log("tickets =>",this.tickets);
    }
    if (this.userdetail['event_id']) {
      this.showLoader();
      this.commonService.getGroupDiscount(this.userdetail['qty']).subscribe((result1) => {
        let result = JSON.parse(result1['_body']);
        // console.log(result);
        if (result['Status'] == true) {
          this.groupDiscount = result['group_discount'];
        }
        else {
          //this.presentToast(result['Msg'].toString());
        }
        this.commonService.getEventDetail(this.userdetail['event_id']).subscribe((result1) => {
          let result = JSON.parse(result1['_body']);
         /// console.log("aaa->", JSON.stringify(result));
          this.loading.dismiss();

          if (result['Status'] == true) {
            this.availavility_m = result['result']['availability_m'];
            this.availavility_w = result['result']['availability_f'];

            this.eventname = result['result']['event_type'];
            this.gdiscount = 0;
            this.discount = 0;
            result['result']['groupDiscount'] = this.groupDiscount;
            this.eventDetail = result['result'];
            this.perTicket = result['result']['price'];
            this.total = result['result']['price'] * this.userdetail['qty'];
            this.discount1 = (this.userdetail['discount'] ? (this.userdetail['discount']['discount']) : 0);
            this.discount = (this.userdetail['discount'] ? ((this.total * this.userdetail['discount']['discount']) / 100).toFixed(2) : 0);
            this.total = (this.total - this.discount).toFixed(2);
            this.gdiscount1 = (this.groupDiscount ? (this.groupDiscount['discount']) : 0);
            this.gdiscount = (this.groupDiscount ? ((this.total * this.groupDiscount['discount']) / 100).toFixed(2) : 0);
            this.total = (this.total - this.gdiscount).toFixed(2);
          }
        });
      });

    }
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(TicketRegistrationPage, { event_id: this.userdetail['event_id'] });
      //backAction();
    }, 2);
  }
  backToTicketRegistration() {
    this.navCtrl.setRoot(TicketRegistrationPage, { event_id: this.userdetail['event_id'] }, { animate: true, direction: 'backward' });
  }
  paymentDetail() {

    
    //console.log("tickets =>",this.tickets);
    var m=0,f=0;
    var tb= this.tickets.map((t)=>{
      if(t.gender=='M'){
        m = m+1;
      }
      if(t.gender=='F'){
        f = f+1;
      }
      return t;
    });
   // console.log(m,f);
    //alert("hii");
    let valid = this.validation.ticketHolders(this.tickets);
    this.errors = valid.errors;
    if (!valid.err) {
      var m=0, f=0;
      if( this.availavility_m[2] <= m || this.availavility_w[2] <= f){
       // alert(this.availavility_m[2]+this.availavility_w[2]);
    
        let alert = this.alertCtrl.create({
          title: 'Alert',
          subTitle: "Sorry, there are only "+(this.availavility_m[2])+ " ticket(s) left for MEN and "+(this.availavility_w[2])+ " ticket(s) left for WOMEN",
          buttons: [ "Ok"]
          
        });
        alert.present();
      }
      else{
       // console.log(JSON.stringify(this.userdetail))
        this.navCtrl.setRoot(PaymentPage, { userdetail: JSON.stringify(this.userdetail), tickets: JSON.stringify(this.tickets), eventDetail: JSON.stringify(this.eventDetail), price: JSON.stringify({ discount: this.discount, gdiscount: this.gdiscount, total: this.total, groupDiscount: this.groupDiscount }) })
        //console.log(this.tickets, this.userdetail);
      }
    
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketHolderDetailsPage');
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    this.loading.present();
  }
  opnchat() {
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
