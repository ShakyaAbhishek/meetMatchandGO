import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { EventFriendPage } from '../event-friend/event-friend';
import { HomePage } from '../home/home';
// import { ValidationService } from '../../service/validation.service';
/**
 * Generated class for the RecivedRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recived-request',
  templateUrl: 'recived-request.html',
})
export class RecivedRequestPage {
loading:any;
requests:any;
loggedData:any;
loggedId: number;
isevents=true;
  constructor(public navCtrl: NavController,  private toastCtrl: ToastController,
    private commonService: CommonService,
    public loadingCtrl: LoadingController,
    public platform: Platform, 
    public navParams: NavParams) {
      this.loggedData = JSON.parse(localStorage.getItem('user'));
      this.loggedId = this.loggedData['userId'];
      this.showLoader();
      this.commonService.getFriendRequest(this.loggedData['userId']).subscribe((result1) => {
        let result = JSON.parse(result1['_body']);
        if (result['Status']) {
          this.requests = typeof result['Msg']['request_list'] != 'string'? result['Msg']['request_list']: [];
          this.isevents = this.requests.length>0?true:false;
          this.loading.dismiss();
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


 acceptRequest(request_id:any,status:boolean){
  this.showLoader();
  // console.log(id);
  this.commonService.acceptRequests(request_id,this.loggedData['userId'], status?1:2).subscribe((result1) => {
   this.loading.dismiss();
  let result = JSON.parse(result1['_body']);
  if (result['Status']) {
   this.navCtrl.setRoot(EventFriendPage); 
  }
});
}
   
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecivedRequestPage');
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
