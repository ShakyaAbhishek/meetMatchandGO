import { UserService } from './../../service/user.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { ValidationService } from '../../service/validation.service';
import { HomePage } from '../home/home';
import { EventFriendPage } from '../event-friend/event-friend';


/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
loading:any;
errors:any;
user:any;
  events: any;
  logged: boolean;
  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public commonService: CommonService,
    private validation: ValidationService,
    public platform: Platform,
    private user_service: UserService,
    public navParams: NavParams) {
      this.logged = localStorage.getItem('user') ? true : false;
      let loggedData = JSON.parse(localStorage.getItem('user'));
      this.user = {
        user_id:loggedData['userId'],
        old_password:'',
        password: '',
        repassword:''
      }
      this.errors = {
        old_password: '',
        password: '',
        repassword:''
      }
      platform.registerBackButtonAction(() => {
        //console.log("second");
        //alert('Back pressed');
        // this.navCtrl.pop();
        this.navCtrl.setRoot(HomePage);
        //backAction();
      },2);
  }
  changePasswords(){
    let valid = this.validation.changePassword(this.user);
    console.log(valid)
    if (!valid.err) {
      this.showLoader();
      //console.log("login credentials", this.user);
      this.user_service.changePassword(this.user).subscribe((result1) => {
        const result = JSON.parse(result1['_body']);
        console.log(result);
        if (result['Status']) {
          //this.presentToast('Image succesful uploaded.');
          this.loading.dismiss();
          this.presentToast("Your Password update successfully!."); 
          setTimeout(() => {
             this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
          }, 1000);
         
        }
        else {
          this.loading.dismiss();
          if (typeof result['Msg'] == 'object')
          {
            this.errors = result['Msg'].errors;
          }
          else
            this.presentToast(result['Msg']);
          // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
        }
      });
    }
    else {
      this.errors = valid.errors;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
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
