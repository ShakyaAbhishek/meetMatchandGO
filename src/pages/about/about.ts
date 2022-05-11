import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from "../home/home";
import { EventFriendPage } from '../event-friend/event-friend';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  logged: boolean;

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams) {
    this.logged = localStorage.getItem('user') ? true : false;
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(HomePage);
      //backAction();
    },2);
  }
  opnchat(){
    this.navCtrl.setRoot(EventFriendPage);
  }
  open1(){
    window.open("https://www.meetmatchandgo.com", '_system', 'location=yes');
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
  open5(){
    window.open("https://www.instagram.com/meetmatchandgo", '_system', 'location=yes');
  }
  open6(){
    window.open("https://www.linkedin.com/company/meetmatchandgo", '_system', 'location=yes');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
