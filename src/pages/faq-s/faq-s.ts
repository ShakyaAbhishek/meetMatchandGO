import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { CommonService } from "../../service/common.service";
import { HomePage } from '../home/home';
import { EventFriendPage } from '../event-friend/event-friend';
/**
 * Generated class for the FaqSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq-s',
  templateUrl: 'faq-s.html',
})
export class FaqSPage {
  shownFaq = null;
  loading: any;
  public faqs = [
    { question: "How do I book for an event?", answer: "Once on the meetmatchandgo website, you will be able to go to upcoming events or search events. Once you locate the event you are interested in booking. Click on ‘book now’ select the amount of tickets you wish to book. Enter the names of the individual attendees. Click on next verify the information and then make payment taken through a secure sever. Once payment is complete you will be taken back to the events web page where you can print your ticket." },
    {
      question: "What type of people will I meet at your speed dating events ?", answer: "Most speed daters are professionals who want to meet more people. They're generally normal, attractive people who just aren't meeting people through their work or immediate circle of friends."
    },
    { question: "What are the ages of people who attend an event?", answer: "It depends on the event. All of our events are arranged into specific age groups. Check our events page for all of our events and their age bands." },
    { question: "Is there an age limit to attend your event?", answer: "The age range is a guideline only, if you are slightly above the age limit you are still welcome to attend. However, if you are, or appear to be, significantly outside of the age range then you maybe unlikely to get a match." },
    { question: "How many people will attend per event?", answer: "Depending on the venue, we aim to have between 10-20 men and 10-20 women at each event, though this may vary." },
    { question: "How long will I have to talk to the people who attend?", answer: "Yes, 3 or 4 minutes can be a long time with someone you do not 'connect' with. However, it is long enough to know whether you would like to invest a few hours getting to know each other on a further date." },
    { question: "What type of events take place?", answer: "There will be different types of events, from professional to themed nights, however you will be able to see this on the events web page." },
    { question: "How do I dress for an event?", answer: "Smart casual is best, something you feel comfortable and confident in - think what you would wear to go on a mid-week date. Although if this is a themed night this may require a costume." },
    { question: "Are these events open to the public?", answer: "Yes, the events take place in rooms which have been specifically hired for the event, however a pre-booked ticket needs to be purchased before the event date. So the public will not be able to walk in." }
  ];
  logged: boolean;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public commonService: CommonService,
    public platform: Platform,
    public navParams: NavParams) {
      
    this.showLoader();
    this.logged = localStorage.getItem('user') ? true : false;
    this.commonService.getFaqs().subscribe((result1) => {
      let result = JSON.parse(result1['_body']);
      this.loading.dismiss();
      if (result['Status']) {
        //if (typeof result['result'] == 'object' && result['result'].length > 0)
          this.faqs = result['result'];
        /* else {
          this.presentToast('No Faq found.');
        } */
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqSPage');
  }
  toggleFaq(faq) {
    if (this.isFaqShown(faq)) {
      this.shownFaq = null;
    } else {
      this.shownFaq = faq;
    }
  };
  isFaqShown(faq) {
    return this.shownFaq === faq;
  };
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });

    this.loading.present();
  }
  opnchat(){
    this.navCtrl.setRoot(EventFriendPage);
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
