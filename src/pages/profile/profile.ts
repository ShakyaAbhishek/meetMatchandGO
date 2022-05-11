
import { Component } from '@angular/core';
import { IonicPage, ActionSheetController, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { UserService } from '../../service/user.service';
import { AlertController } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { ValidationService } from '../../service/validation.service';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EventFriendPage } from '../event-friend/event-friend';
declare var cordova: any;
/**
* Generated class for the ProfilePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  loading: any;
  user = {
    about_us: "",
    id: '',
    account_number: "",
    address: "",
    city: "",
    company_address: "",
    company_name: "",
    country: "",
    dob: "",
    email: "",
    encription: "",
    facebookId: "",
    find_us: "",
    first_name: "",
    forgot: "",
    gender: "",
    googlePlusId: "",
    hear_aboutus: "",
    image: "",
    imageUrl: "",
    imageUrlThumb: "assets/imgs/guest.png",
    interest1: "",
    interest2: "",
    is_newsletter: "",
    last_login_date: "",
    last_name: "",
    latitude: "",
    loginType: "",
    longitude: "",
    marrital_status: "",
    phone: "",
    postcode: "",
    question_answer: "",
    sort_code: "",
    state: "",
    phone_reg: "",
    otp_code: "",
    status: "",
    timestamp: "",
    title: "",
    type: "C",
    updated: "",
    website: ""
  };
  errors: any;

  cityList: any;
  countryList: any;
  interests: any;
  changeNumber = false;
  lastImage: string = null;
  footer = false;
  isOTP: boolean;
  disabled: string;
  isresendOTP: boolean;
  iscounters: boolean;
  timeLeft: number = 30;
  timeLeft1: number = 30;
  getauth= true;
  interval;
  constructor(public navCtrl: NavController,
    private user_service: UserService,
    public validation: ValidationService,
    public imagePicker: ImagePicker,
    public base64: Base64,
    private camera: Camera,

    public events: Events,
    private transfer: Transfer,
    private platform: Platform,
    private file: File,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private commonService: CommonService,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
    let loggedData = JSON.parse(localStorage.getItem('user'));
    this.showLoader();
    this.commonService.getCountries().subscribe((result1) => {

      let result = JSON.parse(result1['_body']);
      if (result['Status']) {
        //this.presentToast('Find Country.' + localStorage.getItem('user'));
        this.countryList = result['countries'];
        this.commonService.getInterests().subscribe((result1) => {

          let result = JSON.parse(result1['_body']);
          if (result['Status']) {
            //this.presentToast('FInd Interest.' + loggedData['userId']);
            this.interests = result['Msg']['interest'];
            this.user_service.getLoggedUserData(loggedData['userId']).subscribe((result1) => {
              //console.log("aaaaaa=>",this.user);
              let result = JSON.parse(result1['_body']);
              this.loading.dismiss();
              //console.log(result);
              if (result['Status']) {
                //this.presentToast('Find Profile.');
                //if (typeof result['result'] == 'object' && result['result'].length > 0)
                if (result['Msg']['country']) {
                  this.getCities(result['Msg']['country'], false);
                }
                this.user = result['Msg'];
                this.user.phone = this.user.phone == '' ? "0000000000" : this.user.phone = this.user.phone.length == 12 ? this.user.phone : '44' + (this.user.phone);
                // = this.user.phone.length == "12"? this.user.phone : '44' +(this.user.phone)

                //console.log(this.user.phone.length);
                // alert(this.user.phone);
                /* else {
                this.presentToast('No Faq found.');
                } */
              }
            });
          }
        });
      }
    });

    this.errors = {
      about_us: "", account_number: "", address: "", city: "", company_address: "", company_name: "", country: "", dob: "", email: "", encription: "", facebookId: "", find_us: "", first_name: "", forgot: "", gender: "", googlePlusId: "", hear_aboutus: "", image: "", imageUrl: "", imageUrlThumb: "assets/imgs/guest.png", interest1: "", interest2: "", is_newsletter: "", last_login_date: "", last_name: "", latitude: "", loginType: "", longitude: "", marrital_status: "", postcode: "", question_answer: "", sort_code: "", state: "", phone_reg: "", otp_code: "", status: "", timestamp: "", title: "", type: "C", updated: "", website: ""
    };
    this.isresendOTP = false;
    this.isOTP = false;
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(HomePage);
      //backAction();
    }, 2);
  }
  public uploadImage() {
    // Destination URL
    var url = 'https://www.meetmatchandgo.com/api/profileImageUpload/' + this.user.id;

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "image",
      fileName: this.user.first_name + ' ' + this.user.last_name + '-' + new Date().getTime() + '.jpg'.replace(' ', '-'),
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: { 'fileName': filename }
    };

    const fileTransfer: TransferObject = this.transfer.create();

    this.showLoader();
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      // if(data['Status']){
      this.loading.dismiss();
      this.presentToast('Image succesful loaded.');

      // data['Msg']['userId'] = data['Msg']['id'];
      // localStorage.setItem('user', JSON.stringify(data['Msg']));
      //this.presentToast("Your profile Imager update successfully!.");
      this.navCtrl.setRoot(ProfilePage, {}, { animate: true, direction: 'forward' });
      this.events.publish("user:update", Date.now());
      alert("Please Update your profile.");
      this.footer = false;
      // }
    }, err => {
      this.loading.dismiss();
      this.presentToast('Error while uploading file.');
    });
  }
  getPhoto() {
    this.footer = true;

  }
  opnchat() {
    this.navCtrl.setRoot(EventFriendPage);
  }
  cancle11() {
    this.footer = false;
  }
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 75,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      allowEdit: true,
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library

      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }
  changePhone() {
    this.changeNumber = this.changeNumber ? false : true;
   // this.getauth = this.getauth ? true : false;
  }
  stateTrue(){
    //alert("hello")
    this.getauth = true;
  }
  update() {

    this.alertCtrl.create({
      message: 'Do you want update your profile?',
      buttons: [
        {
          
          text: 'YES',
          handler: () => {
            let valid = this.validation.update(this.user);
            //console.log(valid)

            if (!valid.err) {
              if (this.user.phone_reg)
                this.user.phone_reg = this.user.phone_reg.length == 11 ? '0' + this.user.phone_reg : this.user.phone_reg;
              //alert(this.user.phone_reg); 

              this.showLoader();

              //console.log("login credentials", this.user);
              this.user_service.update(this.user).subscribe((result1) => {
                const result = JSON.parse(result1['_body']);
                //console.log(result);
                if (result['Status']) {
                  //this.presentToast('Image succesful uploaded.');
                  result['Msg']['userId'] = result['Msg']['id'];
                  localStorage.setItem('user', JSON.stringify(result['Msg']));

                  this.loading.dismiss();
                  // this.presentToast("Your profile has been successfully updated.");
                  this.alertCtrl.create({
                    // title: 'Updated',
                    message: 'Your profile has been successfully updated.',
                    buttons: [{
                      text: 'ok',
                      handler: () => {
                        this.events.publish("user:update", result['Msg'], Date.now());
                        this.navCtrl.setRoot(ProfilePage, {}, { animate: true, direction: 'forward' });
                      }

                    }]
                  }).present();

                }
                else {
                  this.loading.dismiss();
                  this.presentToast(result['Msg']);
                  // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                }
              });
            }
            else {
              this.errors = valid.errors;
            }
          }
        },
        {

          text: 'NO'
        }
      ]
    }).present();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...',
      //duration: 5000
    });

    this.loading.present();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  getCities(country: any, isloader: boolean) {
    if (!isloader)
      this.showLoader();
    //console.log(country);
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
  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }



  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  sendOTP() {
    let otp = {
      mobile: this.user.phone_reg
    }
    if (this.user.phone_reg) {

      this.showLoader();
      this.user_service.sendOTP(otp).subscribe((result1) => {
        //console.log(result1);
        const result = JSON.parse(result1['_body']);
        //console.log(result);
        if (result['Status']) {
          this.timeLeft = 30;
          this.presentToast("Code has been sent by text - please wait");
          this.loading.dismiss();
          this.disabled = "true";
          this.isOTP = true;
          this.startTimer();

        }
        else {
          this.loading.dismiss();
          this.presentToast("OTP Not sent!");
          //this.presentToast(result['Msg']);
          // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
        }
      });
    }
    else {
      this.errors.mobile = 'Please enter mobile No.'
    }
  }
  sendOTP1() {

    //  let valid = this.validation.sendOTP1(this.user);
    let otp = {
      mobile: this.user.phone_reg
    }

    // if(this.user.phone_reg==""){
    //       this.presentToast("New No. is required");
    //       this.loading.dismiss();
    //     }
    //     else if (this.user.phone_reg.length > 12 ){
    //       this.presentToast("New No. is invalid.");
    //       this.loading.dismiss();
    //        }

    // if(!valid.err){
    if (this.user.phone_reg) {

      this.showLoader();


      this.user_service.sendOTP(otp).subscribe((result1) => {
        //console.log(result1);
        const result = JSON.parse(result1['_body']);
        //console.log(result);
        if (result['Status']) {
          this.getauth = false;
          this.user.phone_reg = this.user.phone_reg.length > 12 ? 'invalid' : this.user.phone_reg;
          this.presentToast("Code has been sent by text - please wait");
          this.loading.dismiss();
          this.disabled = "true";
          this.isOTP = true;
          this.startTimer();
        }
        else {
          this.loading.dismiss();
          this.presentToast(result['Msg']);
          // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
        }
      });
    }

    // }

    // else {
    // // this.errors.mobile = 'Please enter mobile No.'

    //   this.errors = valid.errors;

    // }
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.iscounters = true;
      if (this.timeLeft > 0) {
        this.timeLeft--;

      }
      else {
        this.isresendOTP = true;
        this.iscounters = false;
        clearInterval(this.interval);
      }
    }, 1000)
  }
  // startTimer1() {
  // this.interval = setInterval(() => {
  // if(this.timeLeft1 > 0) {
  // this.timeLeft1--;
  // //this.iscounters = true;
  // } 
  // else{
  // this.isresendOTP = true;
  // //this.iscounters = false;
  // }
  // },1000)
  // }

  pauseTimer() {
    clearInterval(this.interval);
  }
}