import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { Chat } from '../../models/chat.model';
import { ChatService } from '../../service/chat/chat.service';
import { UserfService } from '../../service/chat/userf.service';

//import { User } from '../../models/user.model';
import * as firebase from 'firebase/app';
import { MessageService } from '../../service/chat/message.service';
import { Message } from './../../models/message.model';
import { AngularFireList } from 'angularfire2/database';
import { ViewPage } from '../view/view';

/**
 * Generated class for the EventFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-friend',
  templateUrl: 'event-friend.html',
})
export class EventFriendPage {
  requests: any;
  loading: any;
  loggedData: any;
  user: any;
  messages: AngularFireList<Message>;
  viewMessages: any;
  allmessages: any;
  fst=[];
  // blockId:any;
  public isrequests = true;
  public loggedId: any;
  isCounter: boolean;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public commonService: CommonService,
    public userfService: UserfService,
    public chatService: ChatService,
    public loadingCtrl: LoadingController,
    public messageService: MessageService,
    public platform: Platform,


    public navParams: NavParams) {
    this.user = {
      blockButton: '',
    }
    this.isCounter = true;
    this.loggedData = JSON.parse(localStorage.getItem('user'));
    this.loggedId = this.loggedData['userId'];
    this.showLoader();
    this.commonService.getAllFriendByUser(this.loggedData['userId']).subscribe((result1) => {
      this.allmessages = [];
      let result = JSON.parse(result1['_body']);
     // console.log(result);
      if (result['Status']) {
        if (result['Msg']['request_list']) {
          this.requests = result['Msg']['request_list'].sort( (a, b) =>{
            var x,y;
            

          if(a.receiver_detail.id==this.loggedId)
              x =  a.sender_detail; 
            else
              x =  a.receiver_detail;
             
            if(b.receiver_detail.id==this.loggedId)
              y =  b.sender_detail; 
            else
              y =  b.receiver_detail;

            //console.log(x.first_name,y.first_name);            
            if (x.first_name  < y.first_name ) return -1;
            if (x.first_name  > y.first_name ) return 1;
            return 0;
           
         }
       );
        
          this.isrequests = result['Msg']['request_list'].length > 0 ? true : false;
          //this.getUnreadMessage(result['Msg']['request_list']);
        }
        else {
          this.isrequests = false;
        }
        this.loading.dismiss();
      }
    });
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(HomePage);
      //backAction();
    }, 2);
  }

  chat(receiver: any, is_blocked: any) {
    //console.log( receiver);
    receiver.imageUrl = receiver.image;
    let rec = receiver;//new User(receiver.first_name+' '+receiver.last_name, receiver.email,receiver.email,receiver.image);
    //let currentUser = new User(this.loggedData.first_name+' '+this.loggedData.last_name, this.loggedData.email,this.loggedData.email,this.loggedData.imageUrl);
    // this.userfService
    //     .mapObjectKey<User>(this.userfService.currentUser)
    //     .first()
    //     .subscribe((currentUser: User) => {

    this.chatService
      .mapObjectKey<Chat>(this.chatService.getDeepChat(this.loggedData.firebaseId, receiver.firebaseId))
      .first()
      .subscribe((chat: Chat) => {

        if (!chat.title) {

          let timestamp: Object = firebase.database.ServerValue.TIMESTAMP;

          let chat1 = new Chat('', timestamp, receiver.first_name + ' ' + receiver.last_name, (receiver.imageUrl || ''));
          this.chatService.create(chat1, this.loggedData.firebaseId, receiver.firebaseId);

          let chat2 = new Chat('', timestamp, this.loggedData.first_name + ' ' + this.loggedData.last_name, (this.loggedData.imageUrl || ''));
          this.chatService.create(chat2, receiver.firebaseId, this.loggedData.firebaseId);

        }

      });

    //});
    //console.log(rec);
    this.navCtrl.push(ChatPage, {
      recipientUser: rec,
      is_blocked: is_blocked
    });
  }
  blocked(blockId: number, action) {
    this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to ' + (action ? 'block' : 'unblock') + ' this person?',
      buttons: [
         {
          
          text: 'YES',
          handler: () => {
            this.loggedData = JSON.parse(localStorage.getItem('user'));
            this.loggedId = this.loggedData['userId'];

            this.commonService.blockUser(blockId, this.loggedData['userId'], action).subscribe((result1) => {
              let result = JSON.parse(result1['_body']);
              if (result['Status']) {

                this.navCtrl.setRoot(EventFriendPage);

              }
              else {

              }
            });
          }
        },
        {

          text: 'NO',
          role: 'correct',
          handler: () => {
           // console.log('Cancel clicked');
          }
        }
       
      ]
    }).present();
  }
  imageOpen(_img) {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: _img,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  openpic(imge){
    //alert(imge);
    this.navCtrl.setRoot(ViewPage,{image:imge});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventFriendPage');
    //alert("ionViewDidLoad ");
  }
  ionViewWillLeave() {
    this.isCounter = false;
  }

  ionViewDidEnter() {
    //alert("ionViewDidEnter");
    //this.isCounter= true;
    this.commonService.getAllFriendByUser(this.loggedData['userId']).subscribe((result1) => {

      this.allmessages = [];
      let result = JSON.parse(result1['_body']);
      if (result['Status']) {
        if (result['Msg']['request_list']) {
          this.requests = result['Msg']['request_list'].sort( (a, b) =>{
            var x,y;
            

          if(a.receiver_detail.id==this.loggedId)
              x =  a.sender_detail; 
            else
              x =  a.receiver_detail;
             
            if(b.receiver_detail.id==this.loggedId)
              y =  b.sender_detail; 
            else
              y =  b.receiver_detail;

           // console.log(x.first_name,y.first_name);            
            if (x.first_name  < y.first_name ) return -1;
            if (x.first_name  > y.first_name ) return 1;
            return 0;
           
         }
       );;
          this.isrequests = result['Msg']['request_list'].length > 0 ? true : false;
          this.getUnreadMessage(result['Msg']['request_list']);
        }
        else {
          this.isrequests = false;
        }
        this.loading.dismiss();
      }
    });
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
  getUnreadMessage(data) {
    //for(var j=0; j<data.length;j++){
    //this.allmessages = [];
    //console.log(data);
    if (this.isCounter) {
      let j = 0;
      data.forEach(async (c) => {
        let sender = c['receiver_detail']['id'] == this.loggedId ? c['receiver_detail'] : c['sender_detail'];
        let receiver = c['receiver_detail']['id'] != this.loggedId ? c['receiver_detail'] : c['sender_detail'];
        let ms = this.messageService.getMessages(sender.firebaseId, receiver.firebaseId);
        let m = this.messageService.mapListKeys(ms)

          ;
        m.subscribe((messages) => {
          //console.log(messages);
          if (messages.length === 0) {
            let ms = this.messageService.getMessages(receiver.firebaseId, sender.firebaseId);
            let m = this.messageService.mapListKeys(ms)
;

            m.subscribe((m1) => {
              //console.log(sender,receiver,messages)
              this.setAllMsg(m1, c, receiver, j);
              j = j + 1;
            });
          } else {
            //console.log(sender,receiver,messages)
            this.setAllMsg(messages, c, receiver, j);
            j = j + 1;
          }
        }
        );
        //console.log( 'run',this.requests);
        // console.log('times', this.timestmp);

      })
      // if(this.requests[0]['timestamp_last_message']){
      //   //console.log(this.requests[j]);
      //   this.requests = this.requests.sort(function(a, b){
      //     console.log(a['timestamp_last_message']);
      //     console.log(b['timestamp_last_message']);
      //     if(a['timestamp_last_message'] > b['timestamp_last_message'] ){
      //       alert("a is big");
      //       return -1;
      //     }
      //     else {
      //       alert("b is big");
      //       return 1;
      //     }
      //                       // if(a.timestamp_last_message < b.timestamp_last_message) return -1;
      //                       // else if(a.timestamp_last_message > b.timestamp_last_message) return 1;
      //                       // else if(a.timestamp_last_message == b.timestamp_last_message) return 0;
      //                   });
      //   this.allmessages = this.allmessages.sort(function(a, b){
      //     console.log("allmsg",a['timestamp']);
      //     if(a.timestamp < b.timestamp) return -1;
      //     else if(a.timestamp > b.timestamp) return 1;
      //     return 0;
      // })
      // }
    }
    setTimeout(() => {
      this.getUnreadMessage(data);
    }, 1000);
  }
  setAllMsg(messages, c, receiver, j) {
    if (c['chat_status']) {
      let time = c['chat_status']['sender'] == this.loggedId ? 'sender_online' : 'receiver_online';
      let count = messages.filter(function (e) {
        //console.log(e.timestamp,parseInt(c['chat_status'][time]));
        return e.timestamp > parseInt(c['chat_status'][time]) && e.userId == receiver.firebaseId
      })
      this.requests[j]['timestamp_last_message'] = messages[messages.length - 1]['timestamp'];
      // console.log( messages[messages.length-1]['timestamp']);
      //console.log(this.requests[j]['timestamp_last_message']);
      this.allmessages[j] = (count.length);
    }
    else {
      this.allmessages[j] = (0);
    }
    //j = j+1;
  }


}