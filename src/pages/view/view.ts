import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { EventFriendPage } from '../event-friend/event-friend';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  value: any;
  lastpagename: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,) {
    this.value = navParams.get('image');
    //alert(this.value);
    this.lastpagename=this.navCtrl.last().name;
    //alert(this.navCtrl.last().name);
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      //this.navCtrl.setRoot(EventFriendPage);
      if(this.lastpagename=='EventFriendPage'){
        this.navCtrl.setRoot(EventFriendPage);
      }else{
        this.navCtrl.setRoot(HomePage);
      }
      //this.imageViewer=false;
      //backAction();
    },2);
  }
  backpage(){
    if(this.lastpagename=='EventFriendPage'){
      this.navCtrl.setRoot(EventFriendPage);
    }else{
      this.navCtrl.setRoot(HomePage);
    }
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

}
