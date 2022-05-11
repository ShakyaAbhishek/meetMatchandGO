import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { ForgotPasswordPage } from "../forgot-password/forgot-password";
import { SignupPage } from "../signup/signup";
import { ProfilePage } from "../profile/profile";
import { AlertController } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { ValidationService } from '../../service/validation.service';
import { Events } from 'ionic-angular';
import { TicketRegistrationPage } from "../ticket-registration/ticket-registration";
import { HomePage } from '../home/home';
import { AuthService } from '../../service/chat/auth.service';
import { UserfService } from '../../service/chat/userf.service';
import * as firebase from 'firebase/app';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;
  user: any;
  errors: any;
  event_id: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private user_service: UserService,
    public authService: AuthService,
    public UserfService: UserfService,
    public events: Events,
    private validation: ValidationService,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController) {
    this.user = {
      email: '',
      password: ''
    }
    this.errors = {
      email: '',
      password: ''
    }
    this.event_id = this.navParams.get('event_id') ? this.navParams.get('event_id'):0;
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(HomePage);
      //backAction();
    },2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public forgot(){
    this.navCtrl.setRoot(ForgotPasswordPage, {}, { animate: true, direction: 'forward' });
  }
  public signup(){
    this.navCtrl.setRoot(SignupPage, { event_id: this.event_id }, { animate: true, direction: 'forward' });
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
    this.loading.present();
  }

  login() {
    let valid = this.validation.login(this.user);
    if (!valid.err){
      this.showLoader();
     
     // console.log("login credentials", this.user);
      this.user_service.login(this.user).subscribe((result1) => {
        //console.log(result1);
        const result = JSON.parse(result1['_body']);
        //console.log(result);
        if (result['Status']) {
          result['userdetail']['userId'] = result['userId'];
          if(!result['userdetail']['firebaseId']){
            this.authService.createAuthUser({
              email: this.user.email,
              password: this.user.password
            }).then((authUser: firebase.User) => {

              let uuid: string = authUser.uid;
              this.user_service.setFirebaseUuid({id:result['userdetail']['userId'],firebaseId: uuid}).subscribe((result2) => {
                const result21 = JSON.parse(result2['_body']);
                if (result21['Status']) {
                  result['userdetail'] = result21['Msg'];
                  //console.log(result['userdetail']['userId']);
                  // let alert = this.alertCtrl.create({
                  //   title: 'Welcome ',
                  //   subTitle: result['userdetail']['first_name'],
                  //   buttons: ['Dismiss']
                  // });
                  // alert.present();
                  this.presentToast("   Welcome "+result['userdetail']['first_name'], "middel");
                  result['userdetail']['userId'] = result['userId'];
                  localStorage.setItem('user', JSON.stringify(result['userdetail']));
                  this.presentToast("You're loggedin successfully!.","bottom");
                  this.loading.dismiss();
                  this.events.publish("user:login", result['userdetail'], Date.now());
                  setTimeout(() => {
                    
                    if (this.event_id){
                      //this.alertCtrl.Dismissed();
                      this.navCtrl.setRoot(TicketRegistrationPage, {event_id : this.event_id}, { animate: true, direction: 'forward' });
                    }
                    else{
                      //this.alertCtrl.Dismissed();
                      this.navCtrl.setRoot(ProfilePage, {}, { animate: true, direction: 'forward' });
                    }
                  }, 1000);
                  
                }
              });
  
            }).catch((error: any) => {
              console.log(error);
              this.loading.dismiss();
              this.presentToast(error, "bottom");
            });
          }
          else{
            // this.authService.signinWithEmail(this.user)
            // .then((isLogged: boolean) => {
            //   if (isLogged) {
                localStorage.setItem('user', JSON.stringify(result['userdetail']));
                //console.log(result['userdetail']);
                // let alert = this.alertCtrl.create({
                //   title: 'Welcome ',
                //   subTitle: result['userdetail']['first_name'],
                //   buttons: ['Dismiss']
                // });
                // alert.present();
                this.presentToast("    Welcome "+result['userdetail']['first_name'],"middle");
                this.presentToast("You're loggedin successfully!.", "bottom");
                this.loading.dismiss();
                this.events.publish("user:login", result['userdetail'], Date.now());
                setTimeout(() => {
                    if (this.event_id){
                  this.navCtrl.setRoot(TicketRegistrationPage, {event_id : this.event_id}, { animate: true, direction: 'forward' });
                }
                else{
                  this.navCtrl.setRoot(ProfilePage, {}, { animate: true, direction: 'forward' });
                }
                }, 1000);
              
            //   }

            // }).catch((error: any) => {
            //   console.log(error);
            //   this.loading.dismiss();
            //   this.presentToast(error);
            // });
            
          }
          //this.storage.set('user', JSON.stringify(result['userdetail']));
          //localStorage.setItem('user', JSON.stringify(result['userdetail']));
          
        }
        else {
          this.loading.dismiss();
         this.presentToast('Email or Password is Incorrect', "bottom");
      
       // this.presentToast(result['Msg']);
          // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
        }
      });
    }
    else{
      this.errors = valid.errors;
    }
  }

  

  presentToast(msg, toastposition) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: toastposition,
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      //console.log('Dismissed toast');
    });

    toast.present();
  }
}
