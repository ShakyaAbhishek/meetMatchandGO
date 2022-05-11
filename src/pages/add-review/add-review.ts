import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController, ToastController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { PastEventsPage } from "../past-events/past-events";
import { ValidationService } from '../../service/validation.service';
import { EventFriendPage } from '../event-friend/event-friend';
/**
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-review',
  templateUrl: 'add-review.html',
})
export class AddReviewPage {
  event_id: any;
  errors = {
    location_id: '',
    user_id: '',
    description: '',
    rating: ''
  };
  event_type: string;
  review = {
    location_id:'',
    user_id:'',
    description:'',
    rating:''
  };
  loading: any;
  logged: boolean;
  constructor(public navCtrl: NavController,
    public commonService: CommonService,
    private alertCtrl: AlertController,
    private validation: ValidationService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public platform: Platform,
    public navParams: NavParams) {
      this.logged = localStorage.getItem('user') ? true : false;
      this.review.location_id = navParams.get('location_id');
      this.event_type = navParams.get('event_type');
      let loggedData = JSON.parse(localStorage.getItem('user'));
      this.review.user_id = loggedData['userId'];
      platform.registerBackButtonAction(() => {
        //console.log("second");
        //alert('Back pressed');
        // this.navCtrl.pop();
        this.navCtrl.setRoot(PastEventsPage);
        //backAction();
      },2);
    }
    saveReview(){
      let valid = this.validation.addReview(this.review);
      if (!valid.err) {
        this.showLoader();
        this.commonService.addReview(this.review).subscribe((result1) => {
          let result = JSON.parse(result1['_body']);
          if (result['Status']) {
            this.presentToast("Your review added successfully!.");
            this.loading.dismiss();
            let alert = this.alertCtrl.create({
              title: '',
              subTitle: 'Your review added successfully!.',
              buttons: ['Dismiss']
            });
            alert.present();
            this.navCtrl.setRoot(PastEventsPage, {}, { animate: true, direction: 'forward' });
          }
          else {
            this.loading.dismiss();
            this.presentToast(result['Msg']);
          }
        });
      }
      else {
        this.errors = valid.errors;
      }
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad AddReviewPage');
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
        duration: 7000,
        position: 'bottom',
        dismissOnPageChange: true
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
}
