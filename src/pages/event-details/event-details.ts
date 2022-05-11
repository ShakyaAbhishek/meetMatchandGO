import { TicketRegistrationPage } from './../ticket-registration/ticket-registration';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform, AlertController } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { LoginPage } from '../login/login';
import { EventWaitingListPage } from '../event-waiting-list/event-waiting-list';
import { EventsPage } from '../events/events';
import { EventFriendPage } from '../event-friend/event-friend';


/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  event: any;
  data: string;
  loading: any;
  user: any;
  review: any;
  location: any;
  mapurl: any;
  logged: boolean;
  eventDate1: any;
  eventDate: string;
  eventDate2: number;
  
  constructor(public navCtrl: NavController,
    public commonService: CommonService,
    private sanitizer: DomSanitizer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public platform: Platform,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
      this.user = {
        gender: '',
      };
    this.user = JSON.parse(localStorage.getItem('user'));
    this.logged = localStorage.getItem('user') ? true : false;
    this.mapurl = '';
    //alert(this.eventDate);
    if (navParams.get('event_id')){
      this.showLoader();
      this.commonService.getEventDetail(navParams.get('event_id')).subscribe((result1) => {
        let result = JSON.parse(result1['_body']);
        this.eventDate1 = result['result']['date_time'];
        this.eventDate2 = Number(this
          .eventDate1);
        //this.changeDate();
        console.log("event detail =>",result);
        this.loading.dismiss();
        this.datet();
        if (result['Status']) {
            this.data = 'Where';
           
            this.event = result['result']; 
            this.review = result['result']['reviews'];
            this.location = result['result']['map'].replace('<iframe src="','').replace('https://','https://').replace('" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>','');
             this.mapurl = this.location?this.sanitizer.bypassSecurityTrustResourceUrl(this.location):'';
            //console.log(this.location);
        }
      });
    }
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(EventsPage, navParams.get('search'));
      //backAction();
    },2);
  }
  addToWaitingLists(event_id: any, gender: any, isloader: boolean){
    if (this.logged == false) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: 'Please login to add yourself to guest list',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if (!isloader)
    this.showLoader();
   
  //  if (!isloader)
    //   this.showLoader();
     // console.log(id);
     this.commonService.addToWaitingLists(event_id,this.user['userId'],gender).subscribe((result1) => {
      if (!isloader){
        this.loading.dismiss();
       }
       let result = JSON.parse(result1['_body']);
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
 bookNow(event_id: number) {
  if (this.logged == true){
    this.navCtrl.setRoot(TicketRegistrationPage, { event_id: event_id });
    }
    else if(this.logged == false){
    this.loginAlert();
    this.navCtrl.setRoot(LoginPage, { event_id: event_id });
    }
}
loginAlert() {
  let alert = this.alertCtrl.create({
    title: 'Alert',
    subTitle: 'Please login to book an event.',
    buttons: ['Dismiss']
  });
  alert.present();
}
  // bookNow(event_id: number){
  //   if (this.user)
  //     this.navCtrl.setRoot(TicketRegistrationPage, { event_id: event_id });
  //   else
  //     this.navCtrl.setRoot(LoginPage, { event_id: event_id });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    this.loading.present();
  }
  datet(){
    var timestamp = this.eventDate2;
   // alert(this.eventDate2);
    var pubDate = new Date( timestamp * 1000);
    var weekday=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");

    var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

    this.eventDate = weekday[pubDate.getDay()] + ' '+ monthname[pubDate.getMonth()] + ' '+ pubDate.getDate() + ', ' + pubDate.getFullYear()
    //alert(this.eventDate);
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
  eventStartDate(date) {
    //alert(date);
    var date2 = new Date();
    var date1 = new Date(date * 1000);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // alert(dayDifference);
   return dayDifference;
  }
}
