import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { ValidationService } from '../../service/validation.service';
import { Events } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EventFriendPage } from '../event-friend/event-friend';
/**
* Generated class for the ForgotPasswordPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-forgot-password',
    templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
    public forgot: any;
    public loading: any;
    public errors: any;
    constructor(public navCtrl: NavController,
        private user_service: UserService,
        public events: Events,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        private validation: ValidationService,
        public platform: Platform,
        public navParams: NavParams) {
        this.forgot = {
            email: ''
        };
        this.errors = {
            email: ''
        }
        platform.registerBackButtonAction(() => {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            this.navCtrl.setRoot(LoginPage);
            //backAction();
        }, 2);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ForgotPasswordPage');
    }
    forgotPassword() {
        let valid = this.validation.forgot(this.forgot);
        if (!valid.err) {
            this.showLoader();
            //console.log("login credentials", this.user);
            this.user_service.forgot(this.forgot).subscribe((result1) => {
                // console.log(result1);
                const result = JSON.parse(result1['_body']);
                // console.log(result);
                if (result['Status']) {
                    //this.presentToast(result['Msg']);
                    this.presentToast('Mail has been sent to your Email Adderss')
                    //console.log(result['Msg']);
                    this.loading.dismiss();
                    this.forgot = {
                        email: ''
                    };
                    // . this.navCtrl.setRoot(ProfilePage, {}, { animate: true, direction: 'forward' });
                }
                else {
                    //alert('hello');
                    this.loading.dismiss();
                    this.presentToast('Email Address Not Found!');
                    //this.presentToast(result['Msg']);
                    //  this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                }
            });
        }
        else {
            this.errors = valid.errors;
        }
    }
    showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });

        this.loading.present();
    }
    opnchat() {
        this.navCtrl.setRoot(EventFriendPage);
    }
    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom',
            dismissOnPageChange: true
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

}