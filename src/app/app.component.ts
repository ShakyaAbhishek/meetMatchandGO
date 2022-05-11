import { Network } from '@ionic-native/network';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, ToastController, ActionSheetController, AlertController, MenuController } from 'ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile';
import { EventsPage } from '../pages/events/events';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { EventMemberPage } from '../pages/event-member/event-member';
import { RecivedRequestPage } from '../pages/recived-request/recived-request';
import { PendingApprovalPage } from '../pages/pending-approval/pending-approval';
import { EventFriendPage } from '../pages/event-friend/event-friend';
import { PastEventsPage } from './../pages/past-events/past-events';
import { EventWaitingListPage } from './../pages/event-waiting-list/event-waiting-list';
import { MyTicketsPage } from './../pages/my-tickets/my-tickets';
import { File } from '@ionic-native/file';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { LoginPage } from "./../pages/login/login";
import { TermsPage } from "./../pages/terms/terms";
import { FaqSPage } from '../pages/faq-s/faq-s';
import { UserService } from "../service/user.service";
import { Events } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
import { Base64 } from '@ionic-native/base64';
import { AuthService } from '../service/chat/auth.service';
import { SignupPage } from '../pages/signup/signup';
import { CommonService } from '../service/common.service';
import { ViewPage } from '../pages/view/view';
declare var cordova: any;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;
  pages1: Array<{ title: string, component: any, icon: string }>;
  pages2: Array<{ title: string, component: any, icon: string }>;
  pages3: Array<{ title: string, component: any, icon: string }>;
  logged: boolean;
  loading: any;
  loggedData: any;
  navCtrl: any;
  footer = false;
  lastImage: string = null;
  shownGroup = null;
  shownGroup1 = null;
  shownGroup2 = null;
  user: any;
  constructor(public platform: Platform,
    // public navCtrl: NavController,
    private push: Push,
    public commonService: CommonService,
    //private statusBar: StatusBar, 
    private network: Network,
    public loadingCtrl: LoadingController,
    public userService: UserService,
    public base64: Base64,
    public events: Events,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private camera: Camera,
    private file: File,
    public authService: AuthService,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    private transfer: Transfer,
    public menuCtrl: MenuController,
    public splashScreen: SplashScreen) {

    //network

    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('Network unavailable');
      this.presentToast('Please check your connection.');
      // let alert = this.alertCtrl.create({
      //     title: 'Network unavailable',
      //     subTitle: 'Please check your connection.',
      //     buttons: [
      //       {
      //         text: 'Ok',
      //         role: 'Ok',
      //         handler: () => {
      //           disconnectSubscription.unsubscribe();
      //         }
      //       }
      //     ]
      //   });
      //   alert.present();
    
    });
    // stop disconnect watch
      //disconnectSubscription.unsubscribe();
    
    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('Network connected!'); 
      this.presentToast('Network connected!');
      // let alert = this.alertCtrl.create({
      //     title: 'Network connected!',
      //     subTitle: 'Connected',
      //     buttons: [
      //       {
      //         text: 'Ok',
      //         role: 'Ok',
      //         handler: () => {
      //         connectSubscription.unsubscribe();
      //         }
      //       }
      //     ]
      //   });
      //   alert.present();
     
      // We just got a connection but we need to wait briefly
       // before we determine the connection type.  Might need to wait 
      // prior to doing any api requests as well.
    
     });
    // stop connect watch
     //connectSubscription.unsubscribe();
    this.footer = false;
    this.logged = localStorage.getItem('user') ? true : false;
    this.loggedData = this.logged ? JSON.parse(localStorage.getItem('user')) : {
      imageUrlThumb: 'assets/imgs/guest.png',
      first_name: 'Guest',
      last_name: ''
    };
    this.events.subscribe('user:update', (user, time) => {
      console.log('Welcome', localStorage.getItem('user'), 'at', time);
      //this.presentToast('Login : '+localStorage.getItem('user'));
      this.logged = localStorage.getItem('user') ? true : false;
      this.loggedData = this.logged ? JSON.parse(localStorage.getItem('user')) : {
        imageUrlThumb: 'assets/imgs/guest.png',
        first_name: 'Guest',
        last_name: ''
      };
      // this.platform= platform;
      // this.platform.ready().then( () => {
      //   this.statusBar.styleDefault();
      // });
      this.pages = [
        { title: 'Search Events', component: HomePage, icon: "home" },
        { title: 'Events Calendar', component: EventsPage, icon: "calendar" },
        { title: 'My Profile', component: ProfilePage, icon: "person" },
      ];
      this.pages1 = [
        { title: 'Past Events', component: PastEventsPage, icon: "bookmarks" },
        { title: 'My Tickets', component: MyTicketsPage, icon: "bookmark" },
        { title: 'Event Members', component: EventMemberPage, icon: "people" },
        { title: 'Event Waiting List', component: EventWaitingListPage, icon: "timer" },
      ];
      this.pages3 = [
        { title: 'Received Friends Request', component: RecivedRequestPage, icon: "ios-contacts-outline" },
        { title: 'Pending Friends Approval', component: PendingApprovalPage, icon: "ios-contacts-outline" },
        { title: 'Event Matched Friends', component: EventFriendPage, icon: "contacts" },
      ];
      this.pages2 = [
        { title: 'About', component: AboutPage, icon: "text" },
        { title: 'FAQ', component: FaqSPage, icon: "help" },
        { title: 'Terms & Conditions', component: TermsPage, icon: "bookmark" },
        { title: 'Contact Us', component: ContactPage, icon: "call" },
        { title: 'Change Password', component: ChangePasswordPage, icon: "briefcase" }
      ];
      this.initializeApp();
    });
    this.events.subscribe('user:login', (user, time) => {
      console.log('Welcome', localStorage.getItem('user'), 'at', time);
      //this.presentToast('Login : '+localStorage.getItem('user'));
      this.logged = localStorage.getItem('user') ? true : false;
      this.loggedData = this.logged ? JSON.parse(localStorage.getItem('user')) : {
        imageUrlThumb: 'assets/imgs/guest.png',
        first_name: 'Guest',
        last_name: ''
      };

      this.pages = [
        { title: 'Search Events', component: HomePage, icon: "home" },
        { title: 'Events Calendar', component: EventsPage, icon: "calendar" },
        { title: 'My Profile', component: ProfilePage, icon: "person" },
      ];
      this.pages1 = [
        { title: 'Past Events', component: PastEventsPage, icon: "bookmarks" },
        { title: 'My Tickets', component: MyTicketsPage, icon: "bookmark" },
        { title: 'Event Members', component: EventMemberPage, icon: "people" },
        { title: 'Event Waiting List', component: EventWaitingListPage, icon: "timer" },
      ];
      this.pages3 = [
        { title: 'Recieved Friends Request', component: RecivedRequestPage, icon: "ios-contacts-outline" },
        { title: 'Pending Friends Approval', component: PendingApprovalPage, icon: "ios-contacts-outline" },
        { title: 'Event Matched Friends', component: EventFriendPage, icon: "contacts" },
      ];
      this.pages2 = [
        { title: 'About', component: AboutPage, icon: "text" },
        { title: 'FAQ', component: FaqSPage, icon: "help" },
        { title: 'Terms & Conditions', component: TermsPage, icon: "bookmark" },
        { title: 'Contact Us', component: ContactPage, icon: "call" },
        { title: 'Change Password', component: ChangePasswordPage, icon: "briefcase" }
      ];
      this.initializeApp();
    });
    this.events.subscribe('user:logout', (user, time) => {
      //console.log('Welcome', user, 'at', time);
      this.logged = localStorage.getItem('user') ? true : false;
      this.loggedData = this.logged ? JSON.parse(localStorage.getItem('user')) : {
        imageUrlThumb: 'assets/imgs/guest.png',
        first_name: 'Guest',
        last_name: ''
      };

      this.pages = [
        { title: 'Search Events', component: HomePage, icon: "home" },
        { title: 'Login', component: LoginPage, icon: "person" },
        { title: 'Register', component: SignupPage, icon: "contact" },
      ];
      this.pages2 = [
        { title: 'About', component: AboutPage, icon: "text" },
        { title: 'FAQ', component: FaqSPage, icon: "help" },
        { title: 'Terms & Conditions', component: TermsPage, icon: "bookmark" },
        { title: 'Contact Us', component: ContactPage, icon: "call" },
      ];
      this.initializeApp();
    });
    this.initializeApp();


    //console.log(this.logged, this.loggedData);
    // used for an example of ngFor and navigation
    if (!this.logged) {
      this.pages = [
        { title: 'Search Events', component: HomePage, icon: "home" },
        { title: 'Login', component: LoginPage, icon: "person" },
        { title: 'Register', component: SignupPage, icon: "contact" },
      ];
    }
    else {
      //console.log(this.loggedData);
      this.pages = [
        { title: 'Search Events', component: HomePage, icon: "home" },
        { title: 'Events Calendar', component: EventsPage, icon: "calendar" },
        { title: 'My Profile', component: ProfilePage, icon: "person" },
      ];
      this.pages1 = [
        { title: 'Past Events', component: PastEventsPage, icon: "bookmarks" },
        { title: 'My Tickets', component: MyTicketsPage, icon: "bookmark" },
        { title: 'Event Members', component: EventMemberPage, icon: "people" },
        { title: 'Event Waiting List', component: EventWaitingListPage, icon: "timer" },
      ];
      this.pages3 = [
        { title: 'Recieved Friends Request', component: RecivedRequestPage, icon: "ios-contacts-outline" },
        { title: 'Pending Friends Approval', component: PendingApprovalPage, icon: "ios-contacts-outline" },
        { title: 'Event Matched Friends', component: EventFriendPage, icon: "contacts" },
      ];
    }
    if (!this.logged) {
      this.pages2 = [
        { title: 'About', component: AboutPage, icon: "text" },
        { title: 'FAQ', component: FaqSPage, icon: "help" },
        { title: 'Terms & Conditions', component: TermsPage, icon: "bookmark" },
        { title: 'Contact Us', component: ContactPage, icon: "call" },
      ];
    }
    else {
      this.pages2 = [
        { title: 'About', component: AboutPage, icon: "text" },
        { title: 'FAQ', component: FaqSPage, icon: "help" },
        { title: 'Terms & Conditions', component: TermsPage, icon: "bookmark" },
        { title: 'Contact Us', component: ContactPage, icon: "call" },
        { title: 'Change Password', component: ChangePasswordPage, icon: "briefcase" }
      ];
    }

  }


  openpic(imge){
    //alert(imge);
    this.menuCtrl.close();
    this.nav.setRoot(ViewPage,{image:imge});
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initPushNotification();
    });
  }
  initPushNotification() {
    // to check if we have permission
    this.push.hasPermission()
      .then((res: any) => {
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We don\'t have permission to send push notifications');
        }
      });

    // to initialize push notifications
    const options: PushOptions = {
      android: {
        senderID: '676370397397'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {
      console.log('Received a notification', notification);
      //Notification Display Section
      let confirmAlert = this.alertCtrl.create({
        title: notification.title ? decodeURIComponent(notification.title) : 'MeetMatchGo',
        subTitle: 'New Message',
        message: decodeURIComponent(notification.message),
        buttons: [{
          text: 'Ignore',
          //role: 'cancel'
        }, {
          text: 'View',
          handler: () => {
            this.nav.setRoot(EventFriendPage);
            //TODO: Your logic here
            //self.nav.push(DetailsPage, {message: data.message});
          }
        }]
      });
      confirmAlert.present();
      //
    });
    pushObject.on('registration').
      subscribe((registration: any) =>{
        //alert('Device registered&&&'+ JSON.stringify(registration)+'****'+JSON.stringify(this.loggedData)+'%%%%'+ this.logged);
        if(this.logged){
          this.commonService.updateFCMTokenByUser(registration.registrationId,this.loggedData['userId']).subscribe((result1) => {
            if(!result1){
              this.initializeApp();
            }
            else{
              //alert(JSON.stringify(result1)+'&&&'+JSON.stringify(registration))
            }
          });
        }
      });
    pushObject.on('error').
      subscribe(error =>
        
        console.error('Error with Push plugin', error));
  }
  logout() {
    this.alertCtrl.create({
      message: 'Do you want to logout?',
      buttons: [
        {

          text: 'YES',
          handler: () => {
            this.authService.logout()
              .then(() => {
                localStorage.removeItem('user');
                this.events.publish("user:logout", this.loggedData, Date.now());
                this.nav.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
              });
          }
        },
        {

          text: 'NO'
          
        }
      ]
    }).present();

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
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
      if (data['Status']) {
        this.presentToast('Image succesful uploaded.');
        this.loading.dismiss();
        data['Msg']['userId'] = data['Msg']['id'];
        localStorage.setItem('user', JSON.stringify(data['Msg']));
        this.presentToast("Your profile update successfully!.");

        this.logged = localStorage.getItem('user') ? true : false;
        this.loggedData = this.logged ? JSON.parse(localStorage.getItem('user')) : {
          imageUrlThumb: 'assets/imgs/guest.png',
          first_name: 'Guest',
          last_name: ''
        };

        this.footer = false;
        this.initializeApp();
      }
    }, err => {
      this.loading.dismiss();
      this.presentToast('Error while uploading file.');
    });
  }
  getPhoto() {
    if (this.logged)
      this.footer = true;

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
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
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

  //help & support
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };
  // friends
  toggleGroup1(group) {
    if (this.isGroupShown1(group)) {
      this.shownGroup1 = null;
    } else {
      this.shownGroup1 = group;
    }
  };
  isGroupShown1(group) {
    return this.shownGroup1 === group;
  };

  //my event
  toggleGroup2(group) {
    if (this.isGroupShown2(group)) {
      this.shownGroup2 = null;
    } else {
      this.shownGroup2 = group;
    }
  };
  isGroupShown2(group) {
    return this.shownGroup2 === group;
  };
  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
}
