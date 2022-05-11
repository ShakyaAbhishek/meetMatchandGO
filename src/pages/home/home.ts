import { EventFriendPage } from './../event-friend/event-friend';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { EventsPage } from "../events/events";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eventTypes: any;
  countryList: any;
  cityList: any;
  ageGroupList: any;
  loading: any;
  search: any;
  logged: boolean;
  maxYear: any;
  constructor(public navCtrl: NavController,
    public commonService: CommonService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public platform: Platform,) {
  //    var dt = new Date();
  //    this.maxYear = dt.getFullYear()+10;
      this.showLoader();
      this.logged = localStorage.getItem('user') ? true : false;
      this.commonService.getEventTypes().subscribe((result1) => {
        
        let result = JSON.parse(result1['_body']);
        if (result['Status']) {
          this.eventTypes = result['event_types'];
        }
      });
      this.commonService.getCountries().subscribe((result1) => {

        let result = JSON.parse(result1['_body']);
        if (result['Status']) {
          this.countryList = result['countries'];
        }
      });
      this.commonService.getAgeLimits().subscribe((result1) => {

        let result = JSON.parse(result1['_body']);
        if (result['Status']) {
          this.ageGroupList = result['age_limits'];
          this.loading.dismiss();
        }
      });
    this.search = {
      date:'',
      event_type:'',
      country:'',
      location:'',
      age_men:'',
      age_women:''
    };
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.exit();
      //this.platform.exitApp();
      //backAction();
    },2);
  }
  exit(){
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want to Exit App ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }
  open2(){
    window.open("https://www.facebook.com/meetmatchandgo", '_system', 'location=yes');
  }
  open3(){
    window.open("https://twitter.com/meetmatchandgo", '_system', 'location=yes');
  }
  open4(){
    window.open("https://plus.google.com/+meetmatchandgo", '_system', 'location=yes');
  }
  opnchat(){
    this.navCtrl.setRoot(EventFriendPage);
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    this.loading.present();
    setTimeout(() => {
      this.loading.dismiss();
    }, 10000);
  }
  searchEvents(){
    this.navCtrl.setRoot(EventsPage, this.search);
  }
  getCities(country: any){
    this.showLoader();
    console.log(country);
    this.commonService.getCities(country).subscribe((result1) => {

      let result = JSON.parse(result1['_body']);
      if (result['Status']) {
        this.cityList = result['cities'];
        this.loading.dismiss();
      }
    });
  }
}
