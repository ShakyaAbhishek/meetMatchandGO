
import { UserfService} from './../../service/chat/userf.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";
import { AlertController } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { ValidationService } from '../../service/validation.service';
import { Events } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { TermsPage } from "../terms/terms";
import { CommonService } from '../../service/common.service';
import { TicketRegistrationPage } from "../ticket-registration/ticket-registration";
import { HomePage } from '../home/home';
import { AuthService } from '../../service/chat/auth.service';
import * as firebase from 'firebase/app';
/**
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  get_age(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
loading: any;
age:any;
dob:string;
user: any;
errors: any;
countryList: any;
cityList: any;
event_id: any;
isOTP: boolean;
isresendOTP:boolean;
disabled: string;
timeLeft:number = 45;
//agree: false;
//terms_confirmed: false;
interval;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private user_service: UserService,
    public events: Events,
    public commonService: CommonService,
    public UserfService:UserfService,
    public authService: AuthService,
    private validation: ValidationService,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController) {
      this.user = {
        title: '',
        first_name: '',
        last_name: '',
        dob: '',
        gender: '',
        merrital_status: '',
        country: '',
        city: '',
        postcode:'',
        email: '',
     //   mobile: '9999999999',
        //otp_code: '',
        password: '',
        conf_password: '',
        hear_aboutus: '',
        terms_confirmed: false,
    //   agree: 'false',
      };
      this.errors = {
        title: '',
        first_name: '',
        last_name: '',
        dob: '',
        gender: '',
        merrital_status: '',
        country: '',
        city: '',
        postcode:'',
        email: '',
      //  mobile: '',
     //   otp_code: '',
        password: '',
        conf_password: '',
        hear_aboutus: '',
        requestOtp: '',
        terms_confirmed: false,
       // agree: 'false',

      };
      this.isOTP = false;
      this.isresendOTP = false;
      this.showLoader();
      this.commonService.getCountries().subscribe((result1) => {
        let result = JSON.parse(result1['_body']);
        if (result['Status']) {
          this.countryList = result['countries']; 
          this.loading.dismiss();
        }
      });
      this.event_id = this.navParams.get('event_id') ? this.navParams.get('event_id') : 0;
      platform.registerBackButtonAction(() => {
        //console.log("second");
        //alert('Back pressed');
        // this.navCtrl.pop();
        this.navCtrl.setRoot(HomePage);
        //backAction();
      },2);
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  // public terms(){
  //   this.navCtrl.setRoot(TermsPage, {}, { animate: true, direction: 'forward' });
  // }

  condition() {
    let alert = this.alertCtrl.create({
      
      subTitle: 'Due to data privacy regulations please confirm that you are happy for us to store your details, they will not be shared with any other third parties. Also that you agree to terms and conditions of use.',
      buttons: ['OK']
       
      
    });
    alert.present();
  }

  signup() {
   //alert("hii");
  // console.log("signup credentials", this.user);
    let valid = this.validation.signup(this.user);
     
      // alert(this.user.agree);
    if (!valid.err) {
   //  alert(this.user.mobile);
      this.showLoader();
        // console.log("signup credentials", this.user);
        this.user.terms_confirmed = this.user.terms_confirmed?1:0;

      
        

          this.user_service.signup(this.user).subscribe((result1) => {
            const result = JSON.parse(result1['_body']);
            this.loading.dismiss();
            // console.log(result);
            if (result['Status'] && result['userId']) {
              this.showLoader();
                  result['userdetail'] = this.user;
                  result['userdetail']['userId'] = result['userId'];
                  //console.log(result['userdetail']['firebaseId']);
                  //alert(result['userdetail']['firebaseId']);
                  if(!result['userdetail']['firebaseId']){
                 //check user userExists or not
                    // alert("check exist user");
                    // this.authService.getUserByEmail(this.user.email).then((result1) => {
                    //   alert("inside check exist user");
                    //  // const resutl = JSON.parse(result1['_body']);
                    //   console.log("aaaaaaaaa=>",result1);
                    //   alert(result1);
                    // });
                    this.authService.createAuthUser({
                      email: this.user.email,
                      password: this.user.password
                    }).then((authUser: firebase.User) => {
               
                     
                      let uuid: string = authUser.uid;
                      this.user_service.setFirebaseUuid({id:result['userdetail']['userId'],firebaseId: uuid}).subscribe((result2) => {
                       this.showLoader();
                        const result21 = JSON.parse(result2['_body']);
                        //console.log("wwwwwwww=>",result21)
                       this.alertCtrl.create({
                        message: 'Thank You - Registration Successful',
                        buttons: [{
                          text: 'ok',
                          handler: () => {
                            if (result21['Status']) {
                              result['userdetail'] = result21['Msg'];
                              result['userdetail']['userId'] = result['userId'];
                              localStorage.setItem('user', JSON.stringify(result['userdetail']));
                              this.presentToast("You're loggedin successfully!.");
                              this.loading.dismiss();
                              this.loading.dismiss();
                              this.events.publish("user:login", result['userdetail'], Date.now());
                              if (this.event_id){
                                this.navCtrl.setRoot(TicketRegistrationPage, {event_id : this.event_id}, { animate: true, direction: 'forward' });
                              }
                              else{
                            
                                this.navCtrl.setRoot(ProfilePage, {}, { animate: true, direction: 'forward' });
                              }
                            }
                          }
      
                        }]
                       }).present();
                       
                      });
          
                    }).catch((error: any) => {
                     console.log(error);
                      this.loading.dismiss();
                      //this.loading.dismiss();
                      this.presentToast(error);
                    });
                  }
                  else{
                    localStorage.setItem('user', JSON.stringify(result['userdetail']));
                   // this.presentToast("You're signup successfully!.");
                   this.loading.dismiss();
                   //this.loading.dismiss();
                   this.alertCtrl.create({
                    message: 'Thank You - Registration Successful',
                    buttons: [{
                      text: 'ok',
                      handler: () => {
                        this.events.publish("user:login", result['userdetail'], Date.now());
                    if(this.event_id){
                      this.navCtrl.setRoot(TicketRegistrationPage, {event_id:this.event_id}, { animate: true, direction: 'forward' });
                    }
                    else{
                      this.navCtrl.setRoot(ProfilePage, {}, { animate: true, direction: 'forward' });
                    }
                      }
    
                    }]
                   }).present();
                    
                  }
                  this.loading.dismiss();
                  //this.loading.dismiss();
                }
                else {
                  this.loading.dismiss();
                  this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'This Email-Address is already registered!',
                    buttons: ['Ok']
                  }).present();
                  // console.log(result['Msg']);
                  this.presentToast(result['Msg']);
                 //  this.navCtrl.setRoot(SignupPage, {}, {animate: true, direction: 'forward'});
                  this.loading.dismiss();
                }
          });
    }
    else{
      this.errors = valid.errors;
    }
  }
  sendOTP(){
    let otp = {
      mobile: this.user.phone
    }
    if(this.user.phone){
      this.showLoader();
      this.user_service.sendOTP(otp).subscribe((result1) => {
        console.log(result1);
        const result = JSON.parse(result1['_body']);
        console.log(result);
        if (result['Status']) {
          this.presentToast("Code sent to mobile.");
          this.loading.dismiss();
          this.disabled="true"; 
          this.isOTP = true;
          this.startTimer()
        }
        else {
          this.loading.dismiss();
          this.presentToast("Code not sent to mobile");
          // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
        }
      });
    }
    else{
      this.errors.mobile = 'Please enter mobile No.'
    }
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  public login(){
    this.navCtrl.setRoot(LoginPage, {}, { animate: true, direction: 'forward' });
  }
  getCities(country: any, isloader: boolean) {
    if (!isloader)
      this.showLoader();
    console.log(country);
    this.commonService.getCities(country).subscribe((result1) => {

      let result = JSON.parse(result1['_body']);
      if (result['Status']) {
        //this.presentToast('FInd city.');
        this.cityList = result['cities'];
        if (!isloader)
          this.loading.dismiss();
      }
    });
  }
  

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        
      } 
      else{
        this.isresendOTP = true;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  
}
