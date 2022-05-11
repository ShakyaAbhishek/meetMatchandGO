import { Component, ViewChild } from '@angular/core';
import { Content, NavController, NavParams, Platform,Button } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { AngularFireList, AngularFireObject } from 'angularfire2/database';

import { AuthService } from '../../service/chat/auth.service';
import { Chat } from './../../models/chat.model';
import { ChatService } from '../../service/chat/chat.service';
import { Message } from './../../models/message.model';
import { MessageService } from '../../service/chat/message.service';
//import { User } from './../../models/user.model';
import { UserfService } from '../../service/chat/userf.service';

import * as firebase from 'firebase/app';
import { CommonService } from '../../service/common.service';
//import { Observable } from 'rxjs/Observable';
import { EventFriendPage } from "../event-friend/event-friend";
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('sendButton') sendButton: Button;
  messages: AngularFireList<Message>;
  viewMessages: any;
  allmessages = [];
  newMessage: any;
  pageTitle: string;
  sender: any;
  recipient: any;
  private chat1: AngularFireObject<Chat>;
  private chat2: AngularFireObject<Chat>;
  loggedData: any;
  loggedId: number;
  user_list: any;
  dts = [];
  chatStatus: boolean;
  block: boolean;
  value: any;
  time: number;
  reciverLasttime: number;
  currentTime: number;
  totaltime: number;
  msg: string;
  constructor(
    public authService: AuthService,
    public chatService: ChatService,
    public messageService: MessageService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public userService: UserfService,
    public commonService: CommonService,
    public keyboard: Keyboard
  ) {
    //this.keyboard.show();
    //alert("hello");
    this.chatStatus = true;
    this.loggedData = JSON.parse(localStorage.getItem('user'));
    //console.log("logged data=>", this.loggedData);
    this.loggedId = this.loggedData['userId'];
    this.sender = JSON.parse(localStorage.getItem('user'));
    platform.registerBackButtonAction(() => {
      //console.log("second");
      //alert('Back pressed');
      // this.navCtrl.pop();
      this.navCtrl.setRoot(EventFriendPage);
      //backAction();
    }, 2);
  }

  // ionViewCanEnter(): Promise<boolean> {
  //   return this.authService.authenticated;
  // }
  // pushDate(date){
  //   date = new Date(date);
  //   //console.log(date);
  //   this.dts.push(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());
  // }
  // isDate(date){
  //   date = new Date(date);
  //   if(this.dts.indexOf(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate())==-1)
  //     return true
  //   else
  //     return false;
  // }
  ionViewWillLeave() {
    this.chatStatus = false;
  }

  ionViewDidLoad() {

    this.recipient = this.navParams.get('recipientUser');
    //console.log("aaaaaaaa=>",this.recipient.fcm_token);
    this.block = this.navParams.get('is_blocked');
    //console.log(this.block)
    this.chatStatusRefresh();
    //console.log(this.recipient);
    this.pageTitle = this.recipient.first_name;
    // for last name  + ' ' + this.recipient.last_name
    // this.userService
    //   .mapObjectKey<User>(this.userService.currentUser)
    //   .first()
    //   .subscribe((currentUser: User) => {
    //this.sender = currentUser;

    this.chat1 = this.chatService.getDeepChat(this.sender.firebaseId, this.recipient.firebaseId);
    this.chat2 = this.chatService.getDeepChat(this.recipient.firebaseId, this.sender.firebaseId);

    if (this.recipient.imageUrl) {
      this.chatService
        .mapObjectKey(this.chat1)
        .first()
        .subscribe((chat: Chat) => {
          this.chatService.updatePhoto(this.chat1, chat.photo, this.recipient.imageUrl);
        });
    }

    let doSubscription = () => {
      this.viewMessages = this.messageService.mapListKeys(this.messages);
      this.viewMessages
        .subscribe((messages) => {
          this.scrollToBottom();
          this.dts = [];
          this.allmessages = [];
          for (let i = 0; i < messages.length; i++) {
            // console.log(messages[i]);

            var date = new Date(messages[i].timestamp);
            if (this.dts.indexOf(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()) == -1) {
              this.dts.push(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
              this.allmessages.push({
                $key: messages[i].$key,
                text: messages[i].text,
                timestamp: messages[i].timestamp,
                userId: messages[i].userId,
                date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
              });
            }
            else {
              this.allmessages.push({
                $key: messages[i].$key,
                text: messages[i].text,
                timestamp: messages[i].timestamp,
                userId: messages[i].userId,
                date: null
              });
            }
            //console.log(this.allmessages);

          }
        }
        )
    };

    this.messages = this.messageService
      .getMessages(this.sender.firebaseId, this.recipient.firebaseId);

    this.messages
      .valueChanges()
      .first()
      .subscribe((messages: Message[]) => {

        if (messages.length === 0) {
          //console.log(messages.length);
          this.messages = this.messageService

            .getMessages(this.recipient.firebaseId, this.sender.firebaseId);

          doSubscription();

        } else {
          doSubscription();
        }

      });

    //});

  }
  // getEMember(id: any, isloader: boolean) {
  //   if (!isloader)
  //    // this.showLoader();
  //   console.log(id);
  //   this.commonService.getUserMemberByEvents(id,this.loggedData['userId']).subscribe((result1) => {

  //     let result = JSON.parse(result1['_body']);
  //     if (result['Status']) {

  //       this.user_list = result['Msg']['user_list'];
  //       if (!isloader){
  //           // this.loading.dismiss();
  //       }

  //     }
  //   });
  // }
  chatStatusRefresh() {
    if (this.chatStatus) {
      this.commonService.chatEnable({ sender: this.loggedId, receiver: this.recipient.id, time: new Date().getTime() }).subscribe((result1) => {
        setTimeout(() => {
          this.chatStatusRefresh();
        }, 10000);
      });
    }
  }
  // stopBubble(event) {
  //   event.preventDefault(); 
  //   event.stopPropagation(); //Stops event bubbling
  // }

  // ngAfterViewInit() {
  //   let el = this.sendMessage._elementRef.nativeElement;
  //   el
  // }
  sendMessage(newMessage: string): void {
    // alert(this)
    // let el = this.sendButton._elementRef.nativeElement;
    // el.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   event.stopPropagation(); //Stops event bubbling
    // });

    this.msg = newMessage;
    if (newMessage.trim()) {
      // console.log(newMessage);

      this.checkuser();
      let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;

      this.messageService.create(
        new Message(
          this.sender.firebaseId,
          newMessage,
          currentTimestamp
        ),
        this.messages
      ).then(() => {
        this.chat1
          .update({
            lastMessage: newMessage,
            timestamp: currentTimestamp
          });
        this.chat2
          .update({
            lastMessage: newMessage,
            timestamp: currentTimestamp
          });
      });

    }

  }

  private scrollToBottom(duration?: number): void {
    setTimeout(() => {
      if (this.content._scroll) {
        this.content.scrollToBottom(duration || 300);
      }
    }, 10);
  }
  checkuser() {
    //var notify
    //console.log("aaaaaaaa=>", this.recipient);
    //console.log("bbbbbb=>", this.loggedData['userId']);
    this.commonService.getChatStatus(this.loggedData['userId'], this.recipient['id']).subscribe((result1) => {
      const result = JSON.parse(result1['_body']);
      this.time = result['Msg']['receiver_status'];
      // this.reciverLasttime = this.convertime(this.time);
      //console.log("getchat status=>", typeof (Number(this.time)));
      var pastTime = new Date(Number(this.time));
      //console.log(pastTime)
      var presentTime = new Date();
      if ((presentTime.getFullYear() - pastTime.getFullYear()) == 0) {
        if ((presentTime.getMonth() - pastTime.getMonth()) == 0) {
          if ((presentTime.getDate() - pastTime.getDate()) == 0) {
            if ((presentTime.getHours() - pastTime.getHours() == 0)) {
              if (presentTime.getMinutes() - pastTime.getMinutes() <= 1) {
                var diff = presentTime.getMinutes() - pastTime.getMinutes() + " min"
                //console.log(diff)
                //console.log("simple notification")
              }
              else {
                //console.log("push notification");
                this.notification();
              }
            }
            else {
              this.notification();
            }
          }
          else {
            this.notification();
          }
        }
        else {
          this.notification();
        }
      }
      else {
        this.notification();
      }



      //  this.totaltime =this.currentTime-this.reciverLasttime;
      //  if(this.totaltime >= 10){
      //     alert("hello");
      //  }

    });

  }
  notification() {
    this.commonService.sendGCMNotification(this.recipient['id'], this.msg).subscribe((result1) => {
      const result = JSON.parse(result1['_body']);
      if (result['status']) {
        //console.log(result);
      }
    });
  }
  // convertime(t) {
  //   var dt = new Date(t * 1000);
  //   //var hr = dt.getHours();
  //   var m = "0" + dt.getMinutes();
  //   //var s = "0" + dt.getSeconds();
  //   // return hr+ ':' + m.substr(-2) + ':' + s.substr(-2); 
  //   return m.substr(-2);
  // }
}