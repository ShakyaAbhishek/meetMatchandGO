//import { Response } from '@angular/http';
import { EventWaitingListPage } from './../event-waiting-list/event-waiting-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { EventDetailsPage } from "../event-details/event-details";
import { TicketRegistrationPage } from "../ticket-registration/ticket-registration";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import { EventFriendPage } from '../event-friend/event-friend';
/**
* Generated class for the EventsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  search = {
    date: '',
    event_type: '',
    country: '',
    location: '',
    age_men: '',
    age_women: ''
  };
  events: any;
  user: any;
  user1: any;
  time: number;
  loading: any;
  isevents = false;
  addList: boolean;
  loggedData: any;
  user_list: any;
  padStart: number;
  logged: boolean;


  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    public commonService: CommonService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public navParams: NavParams) {
    this.user = {
      gender: '',
    };
    this.logged = localStorage.getItem('user') ? true : false;
    this.user1 = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user'))
      this.user = JSON.parse(localStorage.getItem('user'));
    // this.loggedData = JSON.parse(localStorage.getItem('userId'));
    // console.log(this.loggedData);
    let d = new Date(navParams.get('date'));
    let dt = ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
    // console.log(navParams.get('date'));
    this.search = {
      date: typeof navParams.get('date') != 'undefined' && navParams.get('date') != 'NaN' && navParams.get('date') ? dt : '',
      event_type: typeof navParams.get('event_type') != 'undefined' ? navParams.get('event_type') : '',
      country: typeof navParams.get('country') != 'undefined' ? navParams.get('country') : '',
      location: typeof navParams.get('location') != 'undefined' ? navParams.get('location') : '',
      age_men: typeof navParams.get('age_men') != 'undefined' ? navParams.get('age_men') : '',
      age_women: typeof navParams.get('age_women') != 'undefined' ? navParams.get('age_women') : ''
    };
    this.showLoader();
    this.time = new Date().getTime();
    this.commonService.getEventsBySearch(this.search).subscribe((result1) => {
      let result = JSON.parse(result1['_body']);
      //console.log(result);
      this.loading.dismiss();
      if (result['Status']) {
        if (typeof result['Msg'] == 'object' && result['Msg'].length > 0) {
          this.events = result['Msg'];

        }
        else {
          this.presentToast('No Events Found.');
          this.isevents = true;
        }
      }
    });
    this.setTime();
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(HomePage);
      //backAction();
    }, 2);
  }
  setTime() {
    this.time = new Date().getTime();
    setTimeout(() => {
      this.setTime();
    }, 1000);
  }
  eventTimer(date1, date2) {
    let date_future = date1 * 1000;
    let date_now = date2;

    let seconds = Math.floor((date_future - (date_now)) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    return (this.commonService.str_pad(days, 2, '0', 'STR_PAD_LEFT') + " days " + this.commonService.str_pad(hours, 2, '0', 'STR_PAD_LEFT') + ":" + this.commonService.str_pad(minutes, 2, '0', 'STR_PAD_LEFT') + ":" + this.commonService.str_pad(seconds, 2, '0', 'STR_PAD_LEFT'));
  }
  eventDetail(event_id: number, eventDate: any) {
    this.navCtrl.setRoot(EventDetailsPage, { event_id: event_id, eventDate: eventDate });
  }
  bookNow(event_id: number) {
    if (this.logged == true){
      this.navCtrl.setRoot(TicketRegistrationPage, { event_id: event_id });
      }
      else if(this.logged == false){
      this.loginAlert();
      this.navCtrl.setRoot(LoginPage, { event_id: event_id });
      }
  }
  // bookNow1(event_id: number) {
  // this.loginAlert();
  // this.navCtrl.setRoot(LoginPage, { event_id: event_id });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
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
  addToWaitingLists(event_id: any, gender: any, isloader: boolean) {
    if (this.user.gender == '') {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: 'Please login to add yourself to guest list',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if (!isloader)
      this.showLoader();
    //alert(this.user['userId']);
    // alert(gender)
    // console.log(id);
    this.commonService.addToWaitingLists(event_id, this.user['userId'], gender).subscribe((result1) => {

      if (!isloader) {
        this.loading.dismiss();
      }
      // console.log(result1['_body']);
      let result = JSON.parse(result1['_body']);
      //console.log(result['result']);
      if (result['Status']) {
        this.navCtrl.setRoot(EventWaitingListPage);
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'Alert',
          subTitle: result['result']['text'],
          buttons: ['Dismiss']
        });
        alert.present();
      }
    });
  }
  opnchat() {
    this.navCtrl.setRoot(EventFriendPage);
  }
  loginAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please login to book an event.',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  eventStartDate(date) {
    //alert(date);
    var date2 = new Date(Number(this.time));;
    var date1 = new Date(date * 1000);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // alert(dayDifference);
    return dayDifference;  
  }
}