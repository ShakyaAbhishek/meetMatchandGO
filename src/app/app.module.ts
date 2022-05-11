import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
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
import { PastEventsPage } from '../pages/past-events/past-events';
import { EventWaitingListPage } from './../pages/event-waiting-list/event-waiting-list';
import { MyTicketsPage } from './../pages/my-tickets/my-tickets';
import { LoginPage } from './../pages/login/login';
import { SignupPage } from './../pages/signup/signup';
import { ForgotPasswordPage } from './../pages/forgot-password/forgot-password';
import { TermsPage } from './../pages/terms/terms';
import { FaqSPage } from '../pages/faq-s/faq-s';
import { AddReviewPage } from '../pages/add-review/add-review';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { PaymentPage } from '../pages/payment/payment';
import { TicketHolderDetailsPage } from '../pages/ticket-holder-details/ticket-holder-details';
import { SendEnquiryPage } from '../pages/send-enquiry/send-enquiry';
import { TicketRegistrationPage } from '../pages/ticket-registration/ticket-registration';




import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../service/user.service';
import { ValidationService } from '../service/validation.service';
import { CommonService } from '../service/common.service';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Network } from '@ionic-native/network';
import { Push } from '@ionic-native/push';

//CHAT Import Firebase start
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { AuthService } from '../service/chat/auth.service';
import { CapitalizePipe } from './../pipes/capitalize.pipe';
import { ChatPage } from './../pages/chat/chat';
import { ChatService } from '../service/chat/chat.service'
import { MessageService } from '../service/chat/message.service';
import { UserfService } from '../service/chat/userf.service';

import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header.component';
import { MessageBoxComponent } from '../components/message-box/message-box.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { UserInfoComponent } from '../components/user-info/user-info.component';
import { UserMenuComponent } from '../components/user-menu/user-menu.component';

import { PayPal } from '@ionic-native/paypal';
import { ViewPage } from '../pages/view/view';

//CHAT Import Firebase end
const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDu0g3oimmw_FOcu0EnF0RGrUGKR2SFCxo",
  authDomain: "meetmatchandgo-27e9f.firebaseapp.com",
  databaseURL: "https://meetmatchandgo-27e9f.firebaseio.com",
  projectId: "meetmatchandgo-27e9f",
  storageBucket: "meetmatchandgo-27e9f.appspot.com",
  messagingSenderId: "676370397397"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    ProfilePage,
    EventsPage,
    ChangePasswordPage,
    EventMemberPage,
    RecivedRequestPage,
    PendingApprovalPage,
    EventFriendPage,
    PastEventsPage,
    EventWaitingListPage,
    MyTicketsPage,
    LoginPage,
    SignupPage,
    FaqSPage,
    ForgotPasswordPage,
    TermsPage,
    AddReviewPage,
    EventDetailsPage,
    TicketHolderDetailsPage,
    TicketRegistrationPage,
    SendEnquiryPage,
    PaymentPage,
    CapitalizePipe,
    ChatPage,
    CustomLoggedHeaderComponent,
    MessageBoxComponent,
    ProgressBarComponent,
    UserMenuComponent,
    UserInfoComponent,
    ViewPage,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__MMG',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicImageViewerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    ProfilePage,
    EventsPage,
    ChangePasswordPage,
    EventMemberPage,
    RecivedRequestPage,
    PendingApprovalPage,
    EventFriendPage,
    PastEventsPage,
    EventWaitingListPage,
    MyTicketsPage,
    LoginPage,
    SignupPage,
    FaqSPage,
    ForgotPasswordPage,
    TermsPage,
    AddReviewPage,
    EventDetailsPage,
    TicketHolderDetailsPage,
    TicketRegistrationPage,
    SendEnquiryPage,
    PaymentPage,
    ChatPage,
    ViewPage,
   
  ],
  providers: [
    Push,
    Network,
    StatusBar,
    SplashScreen,
    UserService,
    ValidationService,
    CommonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagePicker,
    File,
    Transfer,
    InAppBrowser,
    Camera,
    Crop,
    FilePath,
    Base64,
    PayPal,
    Keyboard,

    AuthService,
    ChatService,
    MessageService,
    UserfService
  ]
})
export class AppModule {}