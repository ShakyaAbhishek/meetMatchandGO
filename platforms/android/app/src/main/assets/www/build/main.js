webpackJsonp([24],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var extractError = function (error) {
    // In a real world app, we might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    BaseService.prototype.mapListKeys = function (list) {
        return list
            .snapshotChanges()
            .map(function (actions) { return actions.map(function (action) { return (__assign({ $key: action.key }, action.payload.val())); }); });
    };
    BaseService.prototype.mapObjectKey = function (object) {
        return object
            .snapshotChanges()
            .map(function (action) { return (__assign({ $key: action.key }, action.payload.val())); });
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_chat_model__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_chat_chat_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_chat_userf_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_chat_message_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_view__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








//import { User } from '../../models/user.model';



/**
 * Generated class for the EventFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventFriendPage = /** @class */ (function () {
    function EventFriendPage(navCtrl, toastCtrl, alertCtrl, commonService, userfService, chatService, loadingCtrl, messageService, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.userfService = userfService;
        this.chatService = chatService;
        this.loadingCtrl = loadingCtrl;
        this.messageService = messageService;
        this.platform = platform;
        this.navParams = navParams;
        this.fst = [];
        // blockId:any;
        this.isrequests = true;
        this.user = {
            blockButton: '',
        };
        this.isCounter = true;
        this.loggedData = JSON.parse(localStorage.getItem('user'));
        this.loggedId = this.loggedData['userId'];
        this.showLoader();
        this.commonService.getAllFriendByUser(this.loggedData['userId']).subscribe(function (result1) {
            _this.allmessages = [];
            var result = JSON.parse(result1['_body']);
            // console.log(result);
            if (result['Status']) {
                if (result['Msg']['request_list']) {
                    _this.requests = result['Msg']['request_list'].sort(function (a, b) {
                        var x, y;
                        if (a.receiver_detail.id == _this.loggedId)
                            x = a.sender_detail;
                        else
                            x = a.receiver_detail;
                        if (b.receiver_detail.id == _this.loggedId)
                            y = b.sender_detail;
                        else
                            y = b.receiver_detail;
                        //console.log(x.first_name,y.first_name);            
                        if (x.first_name < y.first_name)
                            return -1;
                        if (x.first_name > y.first_name)
                            return 1;
                        return 0;
                    });
                    _this.isrequests = result['Msg']['request_list'].length > 0 ? true : false;
                    //this.getUnreadMessage(result['Msg']['request_list']);
                }
                else {
                    _this.isrequests = false;
                }
                _this.loading.dismiss();
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    EventFriendPage_1 = EventFriendPage;
    EventFriendPage.prototype.chat = function (receiver, is_blocked) {
        var _this = this;
        //console.log( receiver);
        receiver.imageUrl = receiver.image;
        var rec = receiver; //new User(receiver.first_name+' '+receiver.last_name, receiver.email,receiver.email,receiver.image);
        //let currentUser = new User(this.loggedData.first_name+' '+this.loggedData.last_name, this.loggedData.email,this.loggedData.email,this.loggedData.imageUrl);
        // this.userfService
        //     .mapObjectKey<User>(this.userfService.currentUser)
        //     .first()
        //     .subscribe((currentUser: User) => {
        this.chatService
            .mapObjectKey(this.chatService.getDeepChat(this.loggedData.firebaseId, receiver.firebaseId))
            .first()
            .subscribe(function (chat) {
            if (!chat.title) {
                var timestamp = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"].ServerValue.TIMESTAMP;
                var chat1 = new __WEBPACK_IMPORTED_MODULE_5__models_chat_model__["a" /* Chat */]('', timestamp, receiver.first_name + ' ' + receiver.last_name, (receiver.imageUrl || ''));
                _this.chatService.create(chat1, _this.loggedData.firebaseId, receiver.firebaseId);
                var chat2 = new __WEBPACK_IMPORTED_MODULE_5__models_chat_model__["a" /* Chat */]('', timestamp, _this.loggedData.first_name + ' ' + _this.loggedData.last_name, (_this.loggedData.imageUrl || ''));
                _this.chatService.create(chat2, receiver.firebaseId, _this.loggedData.firebaseId);
            }
        });
        //});
        //console.log(rec);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], {
            recipientUser: rec,
            is_blocked: is_blocked
        });
    };
    EventFriendPage.prototype.blocked = function (blockId, action) {
        var _this = this;
        this.alertCtrl.create({
            title: 'Confirm',
            message: 'Do you want to ' + (action ? 'block' : 'unblock') + ' this person?',
            buttons: [
                {
                    text: 'YES',
                    handler: function () {
                        _this.loggedData = JSON.parse(localStorage.getItem('user'));
                        _this.loggedId = _this.loggedData['userId'];
                        _this.commonService.blockUser(blockId, _this.loggedData['userId'], action).subscribe(function (result1) {
                            var result = JSON.parse(result1['_body']);
                            if (result['Status']) {
                                _this.navCtrl.setRoot(EventFriendPage_1);
                            }
                            else {
                            }
                        });
                    }
                },
                {
                    text: 'NO',
                    role: 'correct',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                }
            ]
        }).present();
    };
    EventFriendPage.prototype.imageOpen = function (_img) {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: _img,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    EventFriendPage.prototype.openpic = function (imge) {
        //alert(imge);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__view_view__["a" /* ViewPage */], { image: imge });
    };
    EventFriendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventFriendPage');
        //alert("ionViewDidLoad ");
    };
    EventFriendPage.prototype.ionViewWillLeave = function () {
        this.isCounter = false;
    };
    EventFriendPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //alert("ionViewDidEnter");
        //this.isCounter= true;
        this.commonService.getAllFriendByUser(this.loggedData['userId']).subscribe(function (result1) {
            _this.allmessages = [];
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                if (result['Msg']['request_list']) {
                    _this.requests = result['Msg']['request_list'].sort(function (a, b) {
                        var x, y;
                        if (a.receiver_detail.id == _this.loggedId)
                            x = a.sender_detail;
                        else
                            x = a.receiver_detail;
                        if (b.receiver_detail.id == _this.loggedId)
                            y = b.sender_detail;
                        else
                            y = b.receiver_detail;
                        // console.log(x.first_name,y.first_name);            
                        if (x.first_name < y.first_name)
                            return -1;
                        if (x.first_name > y.first_name)
                            return 1;
                        return 0;
                    });
                    ;
                    _this.isrequests = result['Msg']['request_list'].length > 0 ? true : false;
                    _this.getUnreadMessage(result['Msg']['request_list']);
                }
                else {
                    _this.isrequests = false;
                }
                _this.loading.dismiss();
            }
        });
    };
    EventFriendPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    EventFriendPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EventFriendPage.prototype.getUnreadMessage = function (data) {
        var _this = this;
        //for(var j=0; j<data.length;j++){
        //this.allmessages = [];
        //console.log(data);
        if (this.isCounter) {
            var j_1 = 0;
            data.forEach(function (c) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var sender, receiver, ms, m;
                return __generator(this, function (_a) {
                    sender = c['receiver_detail']['id'] == this.loggedId ? c['receiver_detail'] : c['sender_detail'];
                    receiver = c['receiver_detail']['id'] != this.loggedId ? c['receiver_detail'] : c['sender_detail'];
                    ms = this.messageService.getMessages(sender.firebaseId, receiver.firebaseId);
                    m = this.messageService.mapListKeys(ms);
                    m.subscribe(function (messages) {
                        //console.log(messages);
                        if (messages.length === 0) {
                            var ms_1 = _this.messageService.getMessages(receiver.firebaseId, sender.firebaseId);
                            var m_1 = _this.messageService.mapListKeys(ms_1);
                            m_1.subscribe(function (m1) {
                                //console.log(sender,receiver,messages)
                                _this.setAllMsg(m1, c, receiver, j_1);
                                j_1 = j_1 + 1;
                            });
                        }
                        else {
                            //console.log(sender,receiver,messages)
                            _this.setAllMsg(messages, c, receiver, j_1);
                            j_1 = j_1 + 1;
                        }
                    });
                    return [2 /*return*/];
                });
            }); });
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
        setTimeout(function () {
            _this.getUnreadMessage(data);
        }, 1000);
    };
    EventFriendPage.prototype.setAllMsg = function (messages, c, receiver, j) {
        if (c['chat_status']) {
            var time_1 = c['chat_status']['sender'] == this.loggedId ? 'sender_online' : 'receiver_online';
            var count = messages.filter(function (e) {
                //console.log(e.timestamp,parseInt(c['chat_status'][time]));
                return e.timestamp > parseInt(c['chat_status'][time_1]) && e.userId == receiver.firebaseId;
            });
            this.requests[j]['timestamp_last_message'] = messages[messages.length - 1]['timestamp'];
            // console.log( messages[messages.length-1]['timestamp']);
            //console.log(this.requests[j]['timestamp_last_message']);
            this.allmessages[j] = (count.length);
        }
        else {
            this.allmessages[j] = (0);
        }
        //j = j+1;
    };
    EventFriendPage = EventFriendPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-friend',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/event-friend/event-friend.html"*/'<!--\n  Generated template for the RecivedRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n          </div>\n          <!-- <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons> -->\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div style="text-align: center; color: #efba00; font-size: 20px; opacity: 0.8; filter: alpha(opacity=50); background-color: #800020; border-radius: 20px; margin: 5px 50px 0px 50px;">Event Matched Friends </div>\n    <!-- <ion-card class="card_io" *ngFor="let request of requests; let i=index;">\n      \n          <ion-avatar item-start >\n              <img style=" height: 120px; width: 120px; border-radius: 63px; margin-top: 6px;" [src]="request.sender_detail.id==loggedId?request.receiver_detail.image:request.sender_detail.image">\n            </ion-avatar>\n            <h2 style="color: #efba00; font-weight: 700 " >{{request.sender_detail.id==loggedId?request.receiver_detail.first_name+\' \'+request.receiver_detail.last_name:request.sender_detail.first_name+\' \'+request.sender_detail.last_name}}</h2>\n            \n          \n            <hr style=" background-color: #efba00;height: 2px;">\n      \n      <ion-card-content>\n        \n          <div  *ngIf="request.is_blocked==false">\n              <ion-row>\n                <ion-col col-6 >\n              <button ion-button round  icon-start type="button" style="\n              font-size: 15px;\n              margin-top: -19px;\n              color: #000;\n              max-width: 90px;\n              background-color: #efba00;\n          "  (click)="chat(request.sender_detail.id==loggedId ? request.receiver_detail : request.sender_detail)">Chat</button>\n        </ion-col>\n        <ion-col col-6 >\n          <button ion-button round  icon-start type="button" style="          \n              font-size: 15px;\n              margin-top: -19px;\n              color: #000;\n              max-width: 90px;\n              background-color: #efba00;\n      " (click)="blocked(request.sender_detail.id==loggedId ? request.receiver_detail.id : request.sender_detail.id,1)" value="true" >Block</button>\n    </ion-col>\n            </ion-row>\n          </div>\n          <div  *ngIf="request.is_blocked==true">\n            <button ion-button round  icon-start type="button" style="          \n            font-size: 15px;\n            margin-top: -19px;\n            color: #000;\n            background-color: #efba00;\n      " (click)="blocked(request.sender_detail.id==loggedId ? request.receiver_detail.id : request.sender_detail.id,0)" value="false" >Unblock</button>\n             </div>\n      </ion-card-content>\n    </ion-card> -->\n    \n     <ion-list *ngFor="let request of requests; let i=index;">\n        <ion-item style=" border: 1px solid; border-radius: 10px; border-color: #efba00; margin: 5px 0 0 0; opacity: 0.8; filter: alpha(opacity=50); background-color: #800020; height: 82px;">\n          <ion-avatar item-start>\n            <img [src]="request.sender_detail.id==loggedId?request.receiver_detail.image:request.sender_detail.image" class="thumb-img"  (click)="openpic(request.sender_detail.id==loggedId?request.receiver_detail.image:request.sender_detail.image)"  />\n            <!--imageViewer -->\n          </ion-avatar>\n          <h2 style="color: #efba00; margin: 7px 0px -10px 10px; font-size: 2.0rem;" >\n              {{request.sender_detail.id==loggedId?request.receiver_detail.first_name :request.sender_detail.first_name}}\n              <ion-badge id="notifications-badge" color="danger" *ngIf="allmessages[i]">{{allmessages[i]}}</ion-badge> \n            </h2>\n            <!-- first name - last name -->\n          <!-- <h2 style="color: #efba00; margin: -2px 0px 0px 5px; font-size: 2.0rem;" >\n            {{request.sender_detail.id==loggedId?request.receiver_detail.first_name+\' \'+request.receiver_detail.last_name:request.sender_detail.first_name+\' \'+request.sender_detail.last_name}}\n            <ion-badge id="notifications-badge" color="danger" *ngIf="allmessages[i]">{{allmessages[i]}}</ion-badge> \n          </h2> -->\n          <!-- <h2 style="color: #efba00; margin: -2px 0px 0px 5px; font-size: 2.0rem;" >\n              {{request.sender_detail.id==loggedId?request.receiver_detail.event_type+\' \':request.sender_detail.event_type+\' \'}}\n          </h2> -->\n          <p>{{request.location}}</p>\n          <ion-grid *ngIf="request.is_blocked==false" >\n\n            <ion-row>\n              <ion-col col-6>\n                  <button ion-button full style="\n                   font-size: 18px;\n                  color: #000;\n                  height: 30px;\n                  width: 98px;\n                  background-color: #efba00;\n                  border-radius: 10px;\n                  /* margin: 0px 0px 0px -5px;\n                  padding: 5px 15px 5px 15px; */\n              "  (click)="chat(request.sender_detail.id==loggedId ? request.receiver_detail : request.sender_detail,request.is_blocked)">Chat</button>\n        \n              </ion-col>\n              <ion-col col-6>\n\n                \n                  <button ion-button full style="\n                     font-size: 18px;\n                  color: #000;\n                  height: 30px;\n                  width: 98px;\n                  background-color: #efba00;\n                  border-radius: 10px;\n                 /* margin: 0px 0px 0px 0px;\n                  padding: 5px 15px 5px 15px;  */ "\n               (click)="blocked(request.sender_detail.id==loggedId ? request.receiver_detail.id : request.sender_detail.id,1)" value="true" >Block</button>\n                   \n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n          <!-- <div style=" margin: 5px 24px 5px 0px;" *ngIf="request.is_blocked==false">\n          <a style="\n          font-size: 2.0rem;\n          color: #000;\n          background-color: #efba00;\n          border-radius: 10px;\n          margin: 0px 0px 0px 18px;\n          padding: 2px 10px 2px 10px;\n      "  (click)="chat(request.sender_detail.id==loggedId ? request.receiver_detail : request.sender_detail)">Chat</a>\n\n      <a style="\n      font-size: 2.0rem;\n      color: #000;\n      background-color: #efba00;\n      border-radius: 10px;\n      margin: 0px 0px 0px 18px;\n      padding: 2px 10px 2px 10px;"\n   (click)="blocked(request.sender_detail.id==loggedId ? request.receiver_detail.id : request.sender_detail.id,1)" value="true" >Block</a>\n         </div> -->\n\n         <ion-grid  *ngIf="request.is_blocked==true">\n           <ion-row>\n             <ion-col col-6>\n                <button ion-button full style="\n                font-size: 18px;\n                color: #000;\n                height: 30px;\n                width: 98px;\n                background-color: #efba00;\n                border-radius: 10px;\n                margin: 1px 0px -26px -1px;\n                padding: 2px 10px 2px 10px;"\n                \n                *ngIf="request.block_detail.blocked_by==loggedId"\n                (click)="blocked(request.sender_detail.id==loggedId ? request.receiver_detail.id : request.sender_detail.id,0)"  >Unblock</button>\n                <label style=" color: #fff; font-size: 14px " *ngIf="request.block_detail.user_id==loggedId">You are blocked by Your friend</label><br>\n                <button *ngIf="request.block_detail.user_id==loggedId" style="\n                font-size: 18px;\n                color: #000;\n                height: 30px;\n                height: 25px;\n                width: 150px;\n                background-color: #efba00;\n                border-radius: 10px;\n                margin-bottom: 5px;\n                /* margin: 1px 0px -26px 0px; */\n                padding: 2px 10px 2px 10px;" ion-button (click)="chat(request.sender_detail.id==loggedId ? request.receiver_detail : request.sender_detail,request.is_blocked)">Open chat</button>\n             </ion-col>\n           </ion-row>\n         </ion-grid>\n     <!-- <div style="margin: 5px 24px 5px 2px;" *ngIf="request.is_blocked==true">\n        \n      <a style="\n      font-size: 2.0rem;\n      color: #000;\n      background-color: #efba00;\n      border-radius: 10px;\n      margin: 0px 0px 0px 18px;\n      padding: 2px 10px 2px 10px;"\n      *ngIf="request.block_detail.blocked_by==loggedId"\n      (click)="blocked(request.sender_detail.id==loggedId ? request.receiver_detail.id : request.sender_detail.id,0)"  >Unblock</a>\n      <label style=" color: #fff " *ngIf="request.block_detail.user_id==loggedId">You are blocked by Your friend</label>\n         </div> -->\n        </ion-item>\n      </ion-list>\n      <ion-card class="card_io" *ngIf="!isrequests">\n          <h2 align="center" style="margin: 5px 0px 2px 0px; font-size: 20px; color: #efba00;">No Event Friends Found</h2>\n          \n      </ion-card>\n    \n   </ion-content>\n\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/event-friend/event-friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_7__service_chat_userf_service__["a" /* UserfService */],
            __WEBPACK_IMPORTED_MODULE_6__service_chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__service_chat_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], EventFriendPage);
    return EventFriendPage;
    var EventFriendPage_1;
}());

//# sourceMappingURL=event-friend.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewPage = /** @class */ (function () {
    function ViewPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.value = navParams.get('image');
        //alert(this.value);
        this.lastpagename = this.navCtrl.last().name;
        //alert(this.navCtrl.last().name);
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            //this.navCtrl.setRoot(EventFriendPage);
            if (_this.lastpagename == 'EventFriendPage') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__event_friend_event_friend__["a" /* EventFriendPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }
            //this.imageViewer=false;
            //backAction();
        }, 2);
    }
    ViewPage.prototype.backpage = function () {
        if (this.lastpagename == 'EventFriendPage') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__event_friend_event_friend__["a" /* EventFriendPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        }
    };
    ViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewPage');
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/view/view.html"*/'<!--\n  Generated template for the ViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content style="background-color: black;">\n<!-- <p style="color: blue;" >{{value}}</p> -->\n<button ion-button small style="    margin: 0px 0px -50px 2px;\npadding: 10px 20px 0px 20px;\nheight: 50px;\nbackground-color: transparent;\n-webkit-box-shadow: none;\nbox-shadow:none;\ndisplay: block;" (click)="backpage()" ><ion-icon style="color:white; font-weight: bold  ;font-size: 2.4rem;" name="arrow-round-back"></ion-icon></button>\n<img style="height:100%; width:100%" src=\'{{value}}\' />\n\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/view/view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketHolderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ticket_registration_ticket_registration__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_payment__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TicketHolderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketHolderDetailsPage = /** @class */ (function () {
    function TicketHolderDetailsPage(navCtrl, commonService, validation, loadingCtrl, platform, alertCtrl, toastCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.validation = validation;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.tickets = [];
        this.errors = [];
        //console.log(this.navParams.get('userDetail'))
        this.userdetail = JSON.parse(this.navParams.get('userDetail'));
        //console.log(this.userdetail);
        this.totalTicket = this.userdetail['qty'];
        //console.log(JSON.stringify(this.userdetail));
        //console.log(this.userdetail['availability_f']);
        if (this.userdetail['qty']) {
            for (var i = 0; i < this.userdetail['qty']; i++) {
                if (i == 0) {
                    this.tickets.push({ user_id: this.userdetail.userId, first_name: this.userdetail.first_name, last_name: this.userdetail.last_name, email: this.userdetail.email, gender: this.userdetail.gender });
                }
                else
                    this.tickets.push({ user_id: 0, first_name: '', last_name: '', email: '', gender: this.userdetail.gender });
                this.errors.push({ user_id: '', first_name: '', last_name: '', email: '', gender: '' });
            }
            //console.log("tickets =>",this.tickets);
        }
        if (this.userdetail['event_id']) {
            this.showLoader();
            this.commonService.getGroupDiscount(this.userdetail['qty']).subscribe(function (result1) {
                var result = JSON.parse(result1['_body']);
                // console.log(result);
                if (result['Status'] == true) {
                    _this.groupDiscount = result['group_discount'];
                }
                else {
                    //this.presentToast(result['Msg'].toString());
                }
                _this.commonService.getEventDetail(_this.userdetail['event_id']).subscribe(function (result1) {
                    var result = JSON.parse(result1['_body']);
                    /// console.log("aaa->", JSON.stringify(result));
                    _this.loading.dismiss();
                    if (result['Status'] == true) {
                        _this.availavility_m = result['result']['availability_m'];
                        _this.availavility_w = result['result']['availability_f'];
                        _this.eventname = result['result']['event_type'];
                        _this.gdiscount = 0;
                        _this.discount = 0;
                        result['result']['groupDiscount'] = _this.groupDiscount;
                        _this.eventDetail = result['result'];
                        _this.perTicket = result['result']['price'];
                        _this.total = result['result']['price'] * _this.userdetail['qty'];
                        _this.discount1 = (_this.userdetail['discount'] ? (_this.userdetail['discount']['discount']) : 0);
                        _this.discount = (_this.userdetail['discount'] ? ((_this.total * _this.userdetail['discount']['discount']) / 100).toFixed(2) : 0);
                        _this.total = (_this.total - _this.discount).toFixed(2);
                        _this.gdiscount1 = (_this.groupDiscount ? (_this.groupDiscount['discount']) : 0);
                        _this.gdiscount = (_this.groupDiscount ? ((_this.total * _this.groupDiscount['discount']) / 100).toFixed(2) : 0);
                        _this.total = (_this.total - _this.gdiscount).toFixed(2);
                    }
                });
            });
        }
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */], { event_id: _this.userdetail['event_id'] });
            //backAction();
        }, 2);
    }
    TicketHolderDetailsPage.prototype.backToTicketRegistration = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */], { event_id: this.userdetail['event_id'] }, { animate: true, direction: 'backward' });
    };
    TicketHolderDetailsPage.prototype.paymentDetail = function () {
        //console.log("tickets =>",this.tickets);
        var m = 0, f = 0;
        var tb = this.tickets.map(function (t) {
            if (t.gender == 'M') {
                m = m + 1;
            }
            if (t.gender == 'F') {
                f = f + 1;
            }
            return t;
        });
        // console.log(m,f);
        //alert("hii");
        var valid = this.validation.ticketHolders(this.tickets);
        this.errors = valid.errors;
        if (!valid.err) {
            var m = 0, f = 0;
            if (this.availavility_m[2] <= m || this.availavility_w[2] <= f) {
                // alert(this.availavility_m[2]+this.availavility_w[2]);
                var alert_1 = this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: "Sorry, there are only " + (this.availavility_m[2]) + " ticket(s) left for MEN and " + (this.availavility_w[2]) + " ticket(s) left for WOMEN",
                    buttons: ["Ok"]
                });
                alert_1.present();
            }
            else {
                // console.log(JSON.stringify(this.userdetail))
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__payment_payment__["a" /* PaymentPage */], { userdetail: JSON.stringify(this.userdetail), tickets: JSON.stringify(this.tickets), eventDetail: JSON.stringify(this.eventDetail), price: JSON.stringify({ discount: this.discount, gdiscount: this.gdiscount, total: this.total, groupDiscount: this.groupDiscount }) });
                //console.log(this.tickets, this.userdetail);
            }
        }
    };
    TicketHolderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketHolderDetailsPage');
    };
    TicketHolderDetailsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    TicketHolderDetailsPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    TicketHolderDetailsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TicketHolderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket-holder-details',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/ticket-holder-details/ticket-holder-details.html"*/'<!--\n  Generated template for the TicketHolderDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img  src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card class="card_io">\n    <ion-card-content>\n      <form id="home-form5" class="list">\n          <div style="color:#fff; font-weight:bold;text-align: center; display: block;" > {{eventname}} </div>\n          <font style="color:#efba00; font-weight:bold;text-align: center; display: block;"> TICKET REGISTRATION</font>\n          <ion-list *ngFor="let ticket of tickets; let i=index;">\n            <h2 style="color:#efba00; font-weight:bold">Ticket holder {{i+1}}</h2>\n            <ion-item>\n                <ion-label interface="action-sheet" stacked> First Name</ion-label>\n                <ion-input type="text" [readonly]="i==0" [placeholder]="ticket.first_name?ticket.first_name:\' \'" name="first_name" [value]="ticket.first_name" [(ngModel)]="ticket.first_name" interface="action-sheet"></ion-input>\n            </ion-item>\n            <label class="error" *ngIf="errors[i].first_name">{{errors[i].first_name}}</label>\n            <ion-item>\n                <ion-label interface="action-sheet" stacked> Last Name</ion-label>\n              <ion-input type="text" [placeholder]="ticket.last_name?ticket.last_name:\'  \'" [readonly]="i==0" name="last_name" [value]="ticket.last_name" [(ngModel)]="ticket.last_name" interface="action-sheet"></ion-input>\n            </ion-item>\n            <label class="error" *ngIf="errors[i].last_name">{{errors[i].last_name}}</label>\n            <ion-item>\n                <ion-label interface="action-sheet" stacked> Email Address</ion-label>\n                <ion-input type="text" [placeholder]="ticket.email?ticket.email:\'  \'" [readonly]="i==0" name="email" [value]="ticket.email" [(ngModel)]="ticket.email" interface="action-sheet"></ion-input>\n            </ion-item>\n            <label class="error" *ngIf="errors[i].email">{{errors[i].email}}</label>\n            <ion-item [style]="i==0?\'pointer-events:none;\':\'\'">\n                <ion-label interface="action-sheet" stacked> Gender</ion-label>\n                <ion-select interface="action-sheet"  [class]="i==0?\'disable-select\':\'\'" name="gender" [(ngModel)]="ticket.gender" placeholder=" Gender" style="padding-left: 10px;"> \n                  <ion-option value="M" [selected]="ticket.gender==\'M\'">Male</ion-option>\n                  <ion-option value="F" [selected]="ticket.gender==\'F\'">Female</ion-option>\n                </ion-select>\n            </ion-item>\n            <label class="error" *ngIf="errors[i].gender">{{errors[i].gender}}</label>\n          \n            <ion-item>\n              <ion-label style="margin: 0px -75px 0 0;" Interface="action-sheet">Quantity:-</ion-label>\n              <ion-label  interface="action-sheet">{{totalTicket}} {{totalTicket<=1?\'ticket\':\'tickets\'}}@ £{{perTicket}} each</ion-label>\n            </ion-item> \n            <ion-item *ngIf="discount1">\n              <ion-label interface="action-sheet" >Coupon Discount:-</ion-label>\n              <ion-label interface="action-sheet" >{{discount1}}%</ion-label>\n            </ion-item>\n            <ion-item *ngIf="gdiscount1">\n              <ion-label  interface="action-sheet" >Group Discount:-</ion-label>\n              <ion-label  interface="action-sheet" >{{gdiscount1}}%</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label  interface="action-sheet" >Total:-</ion-label>\n              <ion-label  interface="action-sheet" >£{{total}}</ion-label>\n            </ion-item> \n          </ion-list>\n          <button ion-button round icon-start (click)="backToTicketRegistration()"> BACK</button>\n          <button ion-button round icon-start (click)="paymentDetail()"> NEXT</button>                           \n      </form>\n  \n    </ion-card-content>\n  \n  </ion-card>\n          \n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/ticket-holder-details/ticket-holder-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__service_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], TicketHolderDetailsPage);
    return TicketHolderDetailsPage;
}());

//# sourceMappingURL=ticket-holder-details.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_details_event_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_native_in_app_browser__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MyTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTicketsPage = /** @class */ (function () {
    function MyTicketsPage(navCtrl, toastCtrl, commonService, loadingCtrl, platform, iab, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.iab = iab;
        this.navParams = navParams;
        this.isevents = true;
        this.time = new Date().getTime();
        this.loggedData = JSON.parse(localStorage.getItem('user'));
        this.showLoader();
        this.commonService.getliveEvents(this.loggedData['userId']).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.events = result['Msg']['event_list']['result'];
                // console.log(result['Msg']['event_list']['result'].length);
                _this.isevents = result['Msg']['event_list']['result'].length > 0 ? true : false;
                _this.loading.dismiss();
            }
        });
        this.setTime();
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    MyTicketsPage.prototype.eventDetail = function (event_id) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__event_details_event_details__["a" /* EventDetailsPage */], { event_id: event_id });
    };
    MyTicketsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTicketsPage');
    };
    MyTicketsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    MyTicketsPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    MyTicketsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MyTicketsPage.prototype.setTime = function () {
        var _this = this;
        this.time = new Date().getTime();
        setTimeout(function () {
            _this.setTime();
        }, 1000);
    };
    MyTicketsPage.prototype.eventTimer = function (date1, date2) {
        var date_future = date1 * 1000;
        var date_now = date2;
        var seconds = Math.floor((date_future - (date_now)) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        return (this.commonService.str_pad(days, 2, '0', 'STR_PAD_LEFT') + " days " + this.commonService.str_pad(hours, 2, '0', 'STR_PAD_LEFT') + ":" + this.commonService.str_pad(minutes, 2, '0', 'STR_PAD_LEFT') + ":" + this.commonService.str_pad(seconds, 2, '0', 'STR_PAD_LEFT'));
    };
    MyTicketsPage.prototype.downloadTicket = function (event_id) {
        console.log('https://www.meetmatchandgo.com/ticket/' + event_id + '/' + this.loggedData['userId']);
        window.open('https://www.meetmatchandgo.com/ticket/' + event_id + '/' + this.loggedData['userId'], '_system', 'location=yes');
        return false;
        // const browser = this.iab.create('https://www.meetmatchandgo.com/ticket/'+event_id+'/'+this.loggedData['userId']);
        //   //browser.executeScript(...);
        //   // browser.insertCSS(...);
        //   // browser.on('loadstop').subscribe(event => {
        //   //   browser.insertCSS({ code: "body{color: red;" });
        //   // });
        //   browser.show();
    };
    MyTicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-my-tickets',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/my-tickets/my-tickets.html"*/'<!--\n  Generated template for the MyTicketsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img  src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n    <ion-card *ngFor="let event of events; let i=index">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-5>\n        <img [src]="event.image" style="height: 145px;" />\n        <div style=" text-align: center; background-color:#efba00; padding-top: 5px;padding-bottom: 5px;"><font style=" color: #000;font-size: 15px;">{{event.event_date}}</font></div>\n        </ion-col>\n        <ion-col col-7 style="margin: -12px 0px 0px 0px;">\n          <ion-card-title>\n              <font color="#8b3532">{{event.event_type}}</font>\n            <p style="border-bottom: 1px solid; font-weight: 500;">{{event.location}}<br> {{event.place}} </p>\n          </ion-card-title>\n          <div><!--<ion-icon name="people" style="color:#8b3532; "></ion-icon>--><font color="#8b3532" style="font-weight: 500; padding-bottom: 2px;" >Quantity:  </font><font color="#8b3532" style="font-weight: 700; padding-bottom: 2px;" >{{event.ticket}} Person</font>\n            <br><font color="#8b3532" style="font-weight: 500; padding-bottom: 2px;" >Paid Amount: </font> <font color="#8b3532" style="font-weight: 700; padding-bottom: 2px;" >{{event.formated_price}}</font></div>\n          <p>\n           <!-- <ion-icon name="calendar" style="color:#8b3532;"></ion-icon>--><font color="#8b3532" style="font-weight: 500;">{{event.buy_date}} </font>\n          </p>\n          <ion-row >\n          <ion-col col-6>\n\n\n            <button ion-button color="danger" style="height: 2.6rem;font-size: 70%;margin: 7px 0px 2px -4px;" full  (click)="downloadTicket(event.user_subscription_id)">PRINT TICKET</button>\n            \n          </ion-col>\n          <ion-col col-6>\n\n\n             <button ion-button color="danger" style="height: 2.6rem;font-size: 70%;margin: 7px 0px 2px -4px;" full (click)="eventDetail(event.id)" >MORE INFO</button>                   \n          </ion-col>\n           </ion-row>\n          \n          \n        </ion-col>\n        </ion-row>\n        </ion-grid>\n        <p style="background-color:#f53d3d;text-align: center;padding:  10px 0;padding: 8px 0;color: #fff;margin: 0 10px 10px 10px;font-weight: 800; ">ETA: <span class="counter">{{eventTimer(event.end_datetime, time)}}</span></p> \n      </ion-card>\n      <ion-card class="card_io" *ngIf="!isevents;">\n        <h2 align="center" style="margin: 5px 0px 2px 0px; font-size: 20px; color: #efba00;">No Purchased Tickets.</h2>\n        \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/my-tickets/my-tickets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__node_modules_ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */]])
    ], MyTicketsPage);
    return MyTicketsPage;
}());

//# sourceMappingURL=my-tickets.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_chat_userf_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ticket_registration_ticket_registration__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_chat_auth_service__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, user_service, events, commonService, UserfService, authService, validation, alertCtrl, toastCtrl, platform, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user_service = user_service;
        this.events = events;
        this.commonService = commonService;
        this.UserfService = UserfService;
        this.authService = authService;
        this.validation = validation;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.timeLeft = 45;
        this.user = {
            title: '',
            first_name: '',
            last_name: '',
            dob: '',
            gender: '',
            merrital_status: '',
            country: '',
            city: '',
            postcode: '',
            email: '',
            //   mobile: '9999999999',
            //otp_code: '',
            password: '',
            conf_password: '',
            hear_aboutus: '',
            terms_confirmed: false,
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
            postcode: '',
            email: '',
            //  mobile: '',
            //   otp_code: '',
            password: '',
            conf_password: '',
            hear_aboutus: '',
            requestOtp: '',
            terms_confirmed: false,
        };
        this.isOTP = false;
        this.isresendOTP = false;
        this.showLoader();
        this.commonService.getCountries().subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.countryList = result['countries'];
                _this.loading.dismiss();
            }
        });
        this.event_id = this.navParams.get('event_id') ? this.navParams.get('event_id') : 0;
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    SignupPage.prototype.get_age = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    SignupPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    // public terms(){
    //   this.navCtrl.setRoot(TermsPage, {}, { animate: true, direction: 'forward' });
    // }
    SignupPage.prototype.condition = function () {
        var alert = this.alertCtrl.create({
            subTitle: 'Due to data privacy regulations please confirm that you are happy for us to store your details, they will not be shared with any other third parties. Also that you agree to terms and conditions of use.',
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        //alert("hii");
        // console.log("signup credentials", this.user);
        var valid = this.validation.signup(this.user);
        // alert(this.user.agree);
        if (!valid.err) {
            //  alert(this.user.mobile);
            this.showLoader();
            // console.log("signup credentials", this.user);
            this.user.terms_confirmed = this.user.terms_confirmed ? 1 : 0;
            this.user_service.signup(this.user).subscribe(function (result1) {
                var result = JSON.parse(result1['_body']);
                _this.loading.dismiss();
                // console.log(result);
                if (result['Status'] && result['userId']) {
                    _this.showLoader();
                    result['userdetail'] = _this.user;
                    result['userdetail']['userId'] = result['userId'];
                    //console.log(result['userdetail']['firebaseId']);
                    //alert(result['userdetail']['firebaseId']);
                    if (!result['userdetail']['firebaseId']) {
                        //check user userExists or not
                        // alert("check exist user");
                        // this.authService.getUserByEmail(this.user.email).then((result1) => {
                        //   alert("inside check exist user");
                        //  // const resutl = JSON.parse(result1['_body']);
                        //   console.log("aaaaaaaaa=>",result1);
                        //   alert(result1);
                        // });
                        _this.authService.createAuthUser({
                            email: _this.user.email,
                            password: _this.user.password
                        }).then(function (authUser) {
                            var uuid = authUser.uid;
                            _this.user_service.setFirebaseUuid({ id: result['userdetail']['userId'], firebaseId: uuid }).subscribe(function (result2) {
                                _this.showLoader();
                                var result21 = JSON.parse(result2['_body']);
                                //console.log("wwwwwwww=>",result21)
                                _this.alertCtrl.create({
                                    message: 'Thank You - Registration Successful',
                                    buttons: [{
                                            text: 'ok',
                                            handler: function () {
                                                if (result21['Status']) {
                                                    result['userdetail'] = result21['Msg'];
                                                    result['userdetail']['userId'] = result['userId'];
                                                    localStorage.setItem('user', JSON.stringify(result['userdetail']));
                                                    _this.presentToast("You're loggedin successfully!.");
                                                    _this.loading.dismiss();
                                                    _this.loading.dismiss();
                                                    _this.events.publish("user:login", result['userdetail'], Date.now());
                                                    if (_this.event_id) {
                                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */], { event_id: _this.event_id }, { animate: true, direction: 'forward' });
                                                    }
                                                    else {
                                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], {}, { animate: true, direction: 'forward' });
                                                    }
                                                }
                                            }
                                        }]
                                }).present();
                            });
                        }).catch(function (error) {
                            console.log(error);
                            _this.loading.dismiss();
                            //this.loading.dismiss();
                            _this.presentToast(error);
                        });
                    }
                    else {
                        localStorage.setItem('user', JSON.stringify(result['userdetail']));
                        // this.presentToast("You're signup successfully!.");
                        _this.loading.dismiss();
                        //this.loading.dismiss();
                        _this.alertCtrl.create({
                            message: 'Thank You - Registration Successful',
                            buttons: [{
                                    text: 'ok',
                                    handler: function () {
                                        _this.events.publish("user:login", result['userdetail'], Date.now());
                                        if (_this.event_id) {
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */], { event_id: _this.event_id }, { animate: true, direction: 'forward' });
                                        }
                                        else {
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], {}, { animate: true, direction: 'forward' });
                                        }
                                    }
                                }]
                        }).present();
                    }
                    _this.loading.dismiss();
                    //this.loading.dismiss();
                }
                else {
                    _this.loading.dismiss();
                    _this.alertCtrl.create({
                        title: 'Alert',
                        subTitle: 'This Email-Address is already registered!',
                        buttons: ['Ok']
                    }).present();
                    // console.log(result['Msg']);
                    _this.presentToast(result['Msg']);
                    //  this.navCtrl.setRoot(SignupPage, {}, {animate: true, direction: 'forward'});
                    _this.loading.dismiss();
                }
            });
        }
        else {
            this.errors = valid.errors;
        }
    };
    SignupPage.prototype.sendOTP = function () {
        var _this = this;
        var otp = {
            mobile: this.user.phone
        };
        if (this.user.phone) {
            this.showLoader();
            this.user_service.sendOTP(otp).subscribe(function (result1) {
                console.log(result1);
                var result = JSON.parse(result1['_body']);
                console.log(result);
                if (result['Status']) {
                    _this.presentToast("Code sent to mobile.");
                    _this.loading.dismiss();
                    _this.disabled = "true";
                    _this.isOTP = true;
                    _this.startTimer();
                }
                else {
                    _this.loading.dismiss();
                    _this.presentToast("Code not sent to mobile");
                    // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                }
            });
        }
        else {
            this.errors.mobile = 'Please enter mobile No.';
        }
    };
    SignupPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], {}, { animate: true, direction: 'forward' });
    };
    SignupPage.prototype.getCities = function (country, isloader) {
        var _this = this;
        if (!isloader)
            this.showLoader();
        console.log(country);
        this.commonService.getCities(country).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                //this.presentToast('FInd city.');
                _this.cityList = result['cities'];
                if (!isloader)
                    _this.loading.dismiss();
            }
        });
    };
    SignupPage.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.isresendOTP = true;
            }
        }, 1000);
    };
    SignupPage.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n          </div>\n          <!-- <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons> -->\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="card_io">\n    <form>\n\n      <ion-card-header>\n              <ion-avatar item-start>\n                <div style=" color: #efba00; font-weight: 1000; font-size: 1.9rem;">Register Here</div>\n                \n              </ion-avatar>\n      </ion-card-header>\n    \n      <ion-card-content>\n          <form id="home-form5" class="list">\n            <ion-item>\n                <ion-label interface="action-sheet" stacked> Select Title</ion-label>\n                <ion-select interface="action-sheet" placeholder="Select from Dropdown" name="title" [(ngModel)]="user.title" style="padding-left: 7px;" required > \n                  <ion-option value="Mr">Mr</ion-option>\n                  <ion-option value="Mrs">Mrs</ion-option>\n                  <ion-option value="Ms">Ms</ion-option>\n                  <ion-option value="Miss">Miss</ion-option>\n                </ion-select>\n              </ion-item>\n              <label class="error" *ngIf="errors.title">{{errors.title}}</label>\n              <ion-item>\n                  <ion-label interface="action-sheet" stacked> First Name</ion-label>\n                  <ion-input type="text" placeholder=" " maxlength="30" [(ngModel)]="user.first_name" name="first_name" interface="action-sheet" required></ion-input>\n                </ion-item>\n                <label class="error" *ngIf="errors.first_name">{{errors.first_name}}</label>\n                <ion-item>\n                    <ion-label interface="action-sheet" stacked> Last Name</ion-label>\n                  <ion-input type="text" placeholder="  " maxlength="30" [(ngModel)]="user.last_name" name="last_name" required interface="action-sheet"></ion-input>\n                </ion-item>\n                <label class="error" *ngIf="errors.last_name">{{errors.last_name}}</label>\n                <ion-item>\n                    <ion-label interface="action-sheet" stacked> Date of birth</ion-label>\n                    <ion-datetime displayFormat="DD/MM/YYYY" placeholder=" Click to enter DOB" [(ngModel)]="user.dob" name="dob" id="dateofbirth" required style="padding-left: 10px;"></ion-datetime>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.dob">{{errors.dob}}</label>\n                  <ion-item>\n                      <ion-label interface="action-sheet" stacked> Gender</ion-label>\n                      <ion-select interface="action-sheet" placeholder=" Select from Dropdown" name="gender" [(ngModel)]="user.gender" required style="padding-left: 10px;"> \n                        <ion-option value="M">Male</ion-option>\n                        <ion-option value="F">Female</ion-option>\n                      </ion-select>\n                    </ion-item>\n                    <label class="error" *ngIf="errors.gender">{{errors.gender}}</label>\n\n                 \n\n                 <ion-item>\n                        <ion-label interface="action-sheet" stacked> Marital Status</ion-label>\n                        <ion-select interface="action-sheet" placeholder="Select from Dropdown" name="marrital_status" [(ngModel)]="user.marrital_status" required style="padding-left: 10px;"> \n                          <ion-option value="single">Single</ion-option>\n                          <ion-option value="married" >Married</ion-option>\n                          <ion-option value="divorced" >Divorced</ion-option>\n                          <ion-option value="widow">Widow</ion-option>\n                        </ion-select>\n                      </ion-item>\n                      <label class="error" *ngIf="errors.marrital_status">{{errors.marrital_status}}</label>\n                      \n              <ion-item>\n                <ion-label interface="action-sheet" stacked> Country Name</ion-label>\n                <ion-select interface="action-sheet" placeholder="Select from Dropdown" name="country" #C (ionChange)="getCities(C.value,true)"\n                  [(ngModel)]="user.country" style="padding-left: 10px;">\n                  <ion-option *ngFor="let country of countryList; let i=index;" [value]="country.country_id" [selected]="country.country_id == user.country">{{country.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <label class="error" *ngIf="errors.country">{{errors.country}}</label>\n              <ion-item>\n                <ion-label interface="action-sheet" stacked> City Name</ion-label>\n                <ion-select interface="action-sheet" placeholder="Select from Dropdown" name="city" [(ngModel)]="user.city" style="padding-left: 10px;">\n                  <ion-option *ngFor="let city of cityList; let i=index;" [value]="city.zone_id" [selected]="city.zone_id == user.city">{{city.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <label class="error" *ngIf="errors.city">{{errors.city}}</label>\n              <ion-item>\n                <ion-label interface="action-sheet" stacked> Postcode</ion-label>\n                <ion-input type="text" placeholder="   " name="postcode" [(ngModel)]="user.postcode" interface="action-sheet"></ion-input>\n              </ion-item>\n              <label class="error" *ngIf="errors.postcode">{{errors.postcode}}</label>\n                <ion-item>\n                    <ion-label interface="action-sheet" stacked> Email Address</ion-label>\n                    <ion-input type="email" placeholder="   " name="email" [(ngModel)]="user.email" required interface="action-sheet"></ion-input>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.email">{{errors.email}}</label>\n                  <br>\n                     <!-- <div style="text-align: left; padding-left: 10px">\n                       <font color="#efba00">\n                        Please enter your mobile number with no spaces - example 447944123456 <br>\n                        Once entered press <span style="font-weight: 700;">GET CODE</span>  to have a code sent to you by text, enter this code in the box below which confirms your mobile number.\n                       </font></div>\n              \n                    <ion-item>\n                        <ion-label interface="action-sheet" stacked> Mobile Number</ion-label>\n                        <ion-input type="number" placeholder="  "  name="phone" [(ngModel)]="user.phone"  required interface="action-sheet"></ion-input>\n                      </ion-item>\n                      <label class="error" *ngIf="errors.mobile">{{errors.phone}}</label><br>\n                      <button ion-button round icon-start (click)="sendOTP()" [hidden]="disabled" > Get Code</button>\n                     <div [hidden]="!isOTP">\n                      <ion-item >\n                        <ion-input type="number" placeholder="Enter Code from Text Message "  name="otp_code" [(ngModel)]="user.otp_code" required interface="action-sheet"></ion-input>\n                      </ion-item>\n                      <p style="color: white;" >{{timeLeft}} Seconds Left for Resend Code</p>\n                      <div [hidden]="!isresendOTP">\n                          \n                          <button ion-button color="#ea5d4c" (click)="sendOTP()" round>Resend Code</button></div>\n                      \n                      \n                    </div>\n                    <label class="error" *ngIf="errors.otp_code">{{errors.otp_code}}</label> -->\n                      <ion-item>\n                          <ion-label interface="action-sheet" stacked> Password</ion-label>\n                          <ion-input type="Password" placeholder="  " name="password" [(ngModel)]="user.password" required interface="action-sheet"></ion-input>\n                        </ion-item>\n                        <label class="error" *ngIf="errors.password">{{errors.password}}</label>\n                        <ion-item>\n                            <ion-label interface="action-sheet" stacked> Repeat Password</ion-label>\n                            <ion-input type="password" placeholder="  " name="conf_password" [(ngModel)]="user.conf_password" required interface="action-sheet"></ion-input>\n                          </ion-item>\n                          <label class="error" *ngIf="errors.conf_password">{{errors.conf_password}}</label>\n                          <ion-item>\n                            <label class="text" interface="action-sheet" stacked>  How did you hear about us?</label><br>\n                            <select value="Select from Dropdown" name="hear_aboutus" [(ngModel)]="user.hear_aboutus" required style="padding-left: 10px; border-color: transparent; background-color: transparent; margin: 5px 0px 0px 0px; width:100%; ">\n                                <optgroup class="txt" label="SEARCH ENGINE">\n                                  <option value="Google">GOOGLE</option>\n                                  <option value="Yahoo">YAHOO</option>\n                                  <option value="Bing">BING</option>\n                                  <option value="Other">OTHER</option>\n                                </optgroup> \n                                <optgroup class="txt" label="WEBSITE / SOCIALMEDIA">\n                                    <option value="Facebook">FACEBOOK</option>\n                                    <option value="Twitter">TWITTER</option>\n                                    <option value="Meetup">MEETUP</option>\n                                    <option value="Gumtree">GUMTREE</option>\n                                    <option value="Googleplus">GOOGLEPLUS</option>\n                                    <option value="Skiddle">SKIDDLE</option>\n                                    <option value="Linkedin">LINKEDIN</option>\n                                    <option value="Pinterest">PINTEREST</option>\n                                    <option value="Instagram">INSTAGRAM</option>\n                                    <option value="Othersocialwebsite">OTHERSOCIALWEBSITE</option>\n                                  </optgroup> \n                                  <optgroup class="txt" label="PREVIOUS">\n                                      <option value="Previous Attendee">PREVIOUS ATTENDEE</option>\n                              \n                                    </optgroup>  \n                                    <optgroup class="txt" label="OTHER">\n                                      <option value="Friend">FRIEND</option>\n                                      <option value="Flyer">FLYER</option>\n                                      <option value="Newspaper">NEWSPAPER</option>\n                                      <option value="Internet">INTERNET</option>\n                                      <option value="Magazine">MAGAZINE</option>\n                                      \n                                    </optgroup> \n                              </select>                \n                        \n                        </ion-item>\n                    <!-- <ion-item>\n                        <ion-label interface="action-sheet" stacked>  How did you hear about us?</ion-label>\n                        <ion-select interface="action-sheet" placeholder="Select from Dropdown" name="hear_aboutus" [(ngModel)]="user.hear_aboutus" required style="padding-left: 10px;"> \n                       <optgroup  label="Group 2">\n                          <ion-option value="Search Engine/Social Media"> SEARCH ENGINE/SOCIAL MEDIA </ion-option>\n                        <ion-option value="Website">WEBSITE</ion-option>\n                        <ion-option value="Previous Attedendee">PREVIOUS ATTEDENDEE</ion-option>\n                        <ion-option value="Friend">FRIEND</ion-option>\n                        <ion-option value="Flyer">FLYER</ion-option>\n                        <ion-option value="News Paper">NEWS PAPER</ion-option>\n                        <ion-option value="Internet">INTERNET</ion-option>\n                        <ion-option value="Magazine">MAGAZINE</ion-option>\n                          </optgroup>\n                      </ion-select>\n                    </ion-item> -->\n                    <label class="error" *ngIf="errors.hear_aboutus">{{errors.hear_aboutus}}</label>\n                    <br>\n                      <!-- <ion-item>\n                        <ion-label text-wrap> Due to data privacy regulations please confirm that you are happy for us to store your details, they will not be shared with any other third parties. Also that you agree to terms and conditions of use.</ion-label>\n                        <ion-checkbox color="dark" name="terms_confirmed" value="1" [(ngModel)]="user.terms_confirmed"></ion-checkbox>\n                      </ion-item> -->\n                  <div class="term">\n                   <ion-checkbox color="dark" name="terms_confirmed" value="1" [(ngModel)]="user.terms_confirmed"></ion-checkbox>\n      <a href="#" style="color: #efba00; font-size: 15px; " (click)="condition()">Terms and Conditions</a>\n      \n    </div>\n    <label class="error" *ngIf="errors.terms_confirmed">{{errors.terms_confirmed}}</label><br>\n     <!-- <br> -->\n              <button ion-button round icon-start type="button" (click)="signup()"> Register Now</button>\n              <!-- <button ion-button round icon-start (click)="login()"> LOGIN</button> -->\n            </form>\n      </ion-card-content>\n    </form>\n    </ion-card>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__service_chat_userf_service__["a" /* UserfService */],
            __WEBPACK_IMPORTED_MODULE_10__service_chat_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__service_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_review_add_review__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PastEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PastEventsPage = /** @class */ (function () {
    function PastEventsPage(navCtrl, toastCtrl, commonService, platform, loadingCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.isevents = true;
        var loggedData = JSON.parse(localStorage.getItem('user'));
        this.showLoader();
        this.commonService.getPastEvents(loggedData['userId']).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            console.log("past event =>", result);
            if (result['Status']) {
                _this.events = result['Msg']['event_list']['result'];
                _this.isevents = result['Msg']['event_list']['result'].length > 0 ? true : false;
                _this.loading.dismiss();
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    PastEventsPage.prototype.addReview = function (location_id, event_type) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__add_review_add_review__["a" /* AddReviewPage */], { location_id: location_id, event_type: event_type }, { animate: true, direction: 'forward' });
    };
    PastEventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PastEventsPage');
    };
    PastEventsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    PastEventsPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    PastEventsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PastEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-past-events',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/past-events/past-events.html"*/'<!--\n  Generated template for the PastEventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img  src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let event of events; let i=index">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-5>\n        <img [src]="event.image" style="height: 165px;" />\n        <div style=" text-align: center; background-color:#efba00; padding-top: 5px;padding-bottom: 5px;"><font style=" color: #000;font-size: 15px;">{{event.event_date}}</font></div>\n        </ion-col>\n        <ion-col col-7 style=" margin: -3px 0px 0px 0px;">\n          <ion-card-title>\n              <font color="#8b3532">{{event.event_type}} </font>\n            <p style="border-bottom: 1px solid; font-weight: 500;">{{event.location}}<br> {{event.place}} </p>\n          </ion-card-title>\n          <div><ion-icon name="people" style="color:#8b3532; "></ion-icon><font color="#8b3532" style="font-weight: 500; padding-bottom: 2px;" >Quantity: {{event.ticket}} </font><font color="#8b3532" style="font-weight: 500; padding-bottom: 2px;" >Tickets:</font><font color="#8b3532" style="font-weight: 700; padding-bottom: 2px;" >{{event.formated_price}}</font></div>\n          <div>\n            <ion-icon name="cash" style="color: #8b3532;"></ion-icon><font color="#8b3532" style="font-weight: 500; padding-bottom: 2px;" > Paid Amount: {{event.formated_amount}} </font>\n          </div>\n          <p>\n        <ion-icon name="calendar" style="color:#8b3532;"></ion-icon><font color="#8b3532" style="font-weight: 500;"> {{event.buy_date}} </font><br> -->\n            <label color="#8b3532" style="font-weight: 500;">Men: </label>\n            <font [color]= "event.availability_m[1]==\'yellow\'?\'#000\':event.availability_m[1]">\n              <label *ngIf="event.availability_men != 0" >{{event.availability_m[0]}}</label></font>\n            <br>\n            <label color="#8b3532" style="font-weight: 500;">Women: </label>\n            <font [color]="event.availability_f[1]==\'yellow\'?\'#000\':event.availability_f[1]">\n                <label *ngIf="event.availability_women != 0" >{{event.availability_f[0]}}</label></font>\n          </p>\n          <ion-row style="padding-left: 33px;">\n          \n                <button ion-button color="danger" style="height: 2.6rem;font-size: 1.2rem;" (click)="addReview(event.location_id,event.event_type)">Add Review</button>                   \n          </ion-row>\n          \n          \n        </ion-col>\n        </ion-row>\n        </ion-grid>\n       </ion-card>\n        <ion-card class="card_io" *ngIf="!isevents;">\n          <h2 align="center" style="margin: 5px 0px 2px 0px; font-size: 20px; color: #efba00;">No Past Events Found.</h2>\n          \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/past-events/past-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], PastEventsPage);
    return PastEventsPage;
}());

//# sourceMappingURL=past-events.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.endpoint_url = 'https://www.meetmatchandgo.com/api/';
        this.http = http;
        console.log('Common ServicesProvider Provider');
    }
    // user and admin login
    CommonService.prototype.getEventTypes = function () {
        return this.http.get(this.endpoint_url + 'evenTypes').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getFaqs = function () {
        return this.http.get(this.endpoint_url + 'faqList').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getInterests = function () {
        return this.http.get(this.endpoint_url + 'getInterest').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getContactDetail = function () {
        return this.http.get(this.endpoint_url + 'contactDetails').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getTermCondition = function () {
        return this.http.get(this.endpoint_url + 'cmsPageDetail?page_id=2').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getCountries = function () {
        return this.http.get(this.endpoint_url + 'countryList').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getCities = function (country_id) {
        return this.http.get(this.endpoint_url + 'cities?country_id=' + country_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getAgeLimits = function () {
        return this.http.get(this.endpoint_url + 'ageLimits').pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getPastEvents = function (user_id) {
        return this.http.get(this.endpoint_url + 'pastEvents?user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getliveEvents = function (user_id) {
        return this.http.get(this.endpoint_url + 'liveEvents?user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getFriendRequest = function (user_id) {
        return this.http.get(this.endpoint_url + 'getReceivedRequestByUser?user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.addReview = function (review) {
        return this.http.get(this.endpoint_url + 'addReview?' + this.build_query(review, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getEventsBySearch = function (search) {
        return this.http.get(this.endpoint_url + 'eventSearch?' + this.build_query(search, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getGroupDiscount = function (group) {
        return this.http.get(this.endpoint_url + 'getGroupDiscount?person=' + group).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.storeTmpOrder = function (order) {
        return this.http.get(this.endpoint_url + 'addOrder?order=' + JSON.stringify(order)).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.notifyPayment = function (payment) {
        return this.http.get(this.endpoint_url + 'paymentnotify?payment=' + JSON.stringify(payment)).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getEventDetail = function (event_id) {
        return this.http.get(this.endpoint_url + 'eventDetail?event_id=' + event_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.validateCode = function (user) {
        return this.http.get(this.endpoint_url + 'validateCoupon?' + this.build_query({ user_id: user.id, code: user.code }, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.sendEnquiry = function (user) {
        return this.http.get(this.endpoint_url + 'contactForm?' + this.build_query(user, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getAllFriendByUser = function (user) {
        return this.http.get(this.endpoint_url + 'getAllFriendByUser?user_id=' + user).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.blockUser = function (block_user_id, user_id, action) {
        var actionFunction = 'blockUser';
        if (action == 0)
            actionFunction = 'unblockUser';
        return this.http.get(this.endpoint_url + actionFunction + '?block_user_id=' + block_user_id + '&user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    // getPendingSentRequestByUser(user: any) {
    //     return this.http.get(
    //         this.endpoint_url + 'getPendingSentRequestByUser?user_id=' + this.build_query(user, 0, '')).pipe(
    //             map(res => res)
    //         );
    // }
    CommonService.prototype.getPendingSentRequestByUser = function (user_id) {
        return this.http.get(this.endpoint_url + 'getPendingSentRequestByUser?user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getCompleteEvent = function (user_id) {
        return this.http.get(this.endpoint_url + 'getEventByMember?user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getUserMemberByEvents = function (event_id, user_id) {
        return this.http.get(this.endpoint_url + 'getUserMemberByEvent?event_id=' + event_id + '&user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getWaitingList = function (user_id) {
        return this.http.get(this.endpoint_url + 'waitingList?user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.addToWaitingLists = function (event_id, user_id, gender) {
        return this.http.get(this.endpoint_url + 'addToWaitingList?event_id=' + event_id + '&user_id=' + user_id + '&gender=' + gender).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.acceptRequests = function (request_id, user_id, status) {
        var api = '';
        if (status == 1)
            api = 'acceptFriendRequest';
        else
            api = 'declineFriendRequest';
        return this.http.get(this.endpoint_url + api + '?request_id=' + request_id + '&user_id=' + user_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.sendfriendRequests = function (sender_id, receiver_id, event_id) {
        return this.http.get(this.endpoint_url + 'sendfriendRequest?sender_id=' + sender_id + '&receiver_id=' + receiver_id + '&event_id=' + event_id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.updateFCMTokenByUser = function (token, user) {
        return this.http.get(this.endpoint_url + 'updateDeviceToken?' + this.build_query({ id: user, fcm_token: token }, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.chatEnable = function (data) {
        return this.http.get(this.endpoint_url + 'chatEnable?' + this.build_query(data, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.getChatStatus = function (sender, receiver) {
        return this.http.get(this.endpoint_url + 'getChatStatus?sender=' + sender + '&receiver=' + receiver).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.sendGCMNotification = function (id, message) {
        return this.http.get(this.endpoint_url + 'sendGCMNotification?id=' + id + '&message=' + message).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    CommonService.prototype.build_query = function (obj, num_prefix, temp_key) {
        var output_string = [];
        var key;
        Object.keys(obj).forEach(function (val, k) {
            key = val;
            num_prefix && !isNaN(key) ? key = num_prefix + key : '';
            key = (key.replace(/[!'()*]/g, ''));
            temp_key ? key = temp_key + '[' + key + ']' : '';
            if (typeof obj[val] === 'object') {
                var query = this.build_query(obj[val], null, key);
                output_string.push(query);
            }
            else {
                var value = (typeof obj[val] == 'string') ? obj[val].replace(/[!'()*]/g, '') : obj[val];
                output_string.push(key + '=' + value);
            }
        });
        return output_string.join('&');
    };
    CommonService.prototype.str_pad = function (input, padLength, padString, padType) {
        //  discuss at: http://locutus.io/php/str_pad/
        // original by: Kevin van Zonneveld (http://kvz.io)
        // improved by: Michael White (http://getsprink.com)
        //    input by: Marco van Oort
        // bugfixed by: Brett Zamir (http://brett-zamir.me)
        //   example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT')
        //   returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
        //   example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH')
        //   returns 2: '------Kevin van Zonneveld-----'
        var half = '';
        var padToGo;
        var _strPadRepeater = function (s, len) {
            var collect = '';
            while (collect.length < len) {
                collect += s;
            }
            collect = collect.substr(0, len);
            return collect;
        };
        input += '';
        padString = padString !== undefined ? padString : ' ';
        if (padType !== 'STR_PAD_LEFT' && padType !== 'STR_PAD_RIGHT' && padType !== 'STR_PAD_BOTH') {
            padType = 'STR_PAD_RIGHT';
        }
        if ((padToGo = padLength - input.length) > 0) {
            if (padType === 'STR_PAD_LEFT') {
                input = _strPadRepeater(padString, padToGo) + input;
            }
            else if (padType === 'STR_PAD_RIGHT') {
                input = input + _strPadRepeater(padString, padToGo);
            }
            else if (padType === 'STR_PAD_BOTH') {
                half = _strPadRepeater(padString, Math.ceil(padToGo / 2));
                input = half + input + half;
                input = input.substr(0, padLength);
            }
        }
        return input;
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__send_enquiry_send_enquiry__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, loadingCtrl, toastCtrl, commonService, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.platform = platform;
        this.navParams = navParams;
        this.contactDtl = {
            email: "info@meetmatchandgo.com",
            mobile: "",
            phone: "0845 299 7575",
            fax: "",
            address: " MEETMATCHANDGO LIMITED<br>\r\n49 Station Road,<br>\r\nPolegate,<br>\r\nEast Sussex,<br>\r\nBN26 6EA",
            web_address: "https://www.meetmatchandgo.com/"
        };
        this.showLoader();
        this.commonService.getContactDetail().subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            _this.loading.dismiss();
            if (result['Status']) {
                //if (typeof result['result'] == 'object' && result['result'].length > 0)
                _this.contactDtl = result['result'];
                /* else {
                  this.presentToast('No Faq found.');
                } */
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    ContactPage.prototype.sendEnquiry = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__send_enquiry_send_enquiry__["a" /* SendEnquiryPage */], {}, { animate: true, direction: 'forword' });
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    ContactPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    ContactPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="    align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1">\n            <img src="assets/imgs/logo.jpg">\n          </div>\n          <!-- <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons> -->\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-card class="card_io">\n\n        <ion-card-header>\n         <font color="white">Contact Us</font>\n        </ion-card-header>\n      \n        <ion-card-content>\n            <div><font color="white"> \n            <ion-icon name="pin" [innerHTML]="contactDtl.address"></ion-icon><hr>\n            <!-- <ion-icon name="call"> {{contactDtl.phone}}</ion-icon><hr> -->\n            <ion-icon name="globe"> {{contactDtl.web_address}}</ion-icon><hr>\n            <ion-icon name="at"> {{contactDtl.email}}</ion-icon><hr>\n          </font></div>\n              <div>\n                  <button ion-button round full style="font-size: 1.6rem; font-weight: 700; color:black; " (click)="sendEnquiry()" > SEND US A MESSAGE </button>\n              <!-- </div><br>\n              <div>\n                  <button ion-button round full style="font-size: 1.6rem; font-weight: 700; color:black; "><font color="black"> CHAT WITH CLIENT </font></button> -->\n              </div>\n        </ion-card-content>\n      \n      </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingApprovalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PendingApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingApprovalPage = /** @class */ (function () {
    function PendingApprovalPage(navCtrl, toastCtrl, commonService, loadingCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.isrequests = true;
        this.loggedData = JSON.parse(localStorage.getItem('user'));
        this.loggedId = this.loggedData['userId'];
        this.showLoader();
        this.commonService.getPendingSentRequestByUser(this.loggedData['userId']).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            //console.log(result);
            if (result['Status']) {
                _this.requests = typeof result['Msg']['request_list'] != 'string' ? result['Msg']['request_list'] : [];
                _this.isrequests = _this.requests.length > 0 ? true : false;
                _this.loading.dismiss();
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    PendingApprovalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingApprovalPage');
    };
    PendingApprovalPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    PendingApprovalPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    PendingApprovalPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PendingApprovalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pending-approval',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/pending-approval/pending-approval.html"*/'<!--\n  Generated template for the PendingApprovalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img  src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div style="text-align: center; color: #efba00; font-size: 20px; opacity: 0.8; filter: alpha(opacity=50); background-color: #800020; border-radius: 20px; margin: 5px 50px 0px 50px;">Pending Friend Requests </div>\n  <ion-list *ngFor="let request of requests; let i=index;">\n    <ion-item style="border-bottom: 1px solid;border-bottom-color: #efba00;">\n      <ion-avatar item-start>\n        <img [src]="request.sender_detail.id==loggedId?request.receiver_detail.image:request.sender_detail.image">\n      </ion-avatar>\n      <h2>{{request.receiver_detail.first_name+\' \'+request.receiver_detail.last_name}}</h2>\n      <p>{{request.location}}</p>\n      <p>Waiting for a response</p>\n      <!-- <button ion-button color="secondary" style="height: 2.6rem;font-size: 1.1rem;" (click)="acceptRequest()">Accept Request</button>\n      <button ion-button color="danger" style="height: 2.6rem;font-size: 1.1rem;"  (click)="deleteRequest()">Delete Request</button> -->\n    </ion-item>\n  </ion-list>\n \n  <ion-card  class="card_io" *ngIf="!isrequests">\n      <h2 align="center" style="margin: 5px 0px 2px 0px; font-size: 20px; color: #efba00;">No Pending Approvals Found!</h2>\n      \n  </ion-card>      \n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/pending-approval/pending-approval.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], PendingApprovalPage);
    return PendingApprovalPage;
}());

//# sourceMappingURL=pending-approval.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(120);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { map } from 'rxjs/operators/map';



//import { Observable } from 'rxjs/Observable';
var ChatService = /** @class */ (function (_super) {
    __extends(ChatService, _super);
    function ChatService(afAuth, db, http) {
        var _this = _super.call(this) || this;
        _this.afAuth = afAuth;
        _this.db = db;
        _this.http = http;
        _this.setChats();
        return _this;
    }
    ChatService.prototype.setChats = function () {
        var _this = this;
        this.afAuth.authState
            .subscribe(function (authUser) {
            if (authUser) {
                _this.chats = _this.db.list("/chats/" + authUser.uid, function (ref) { return ref.orderByChild('timestamp'); });
            }
        });
    };
    ChatService.prototype.create = function (chat, userId1, userId2) {
        return this.db.object("/chats/" + userId1 + "/" + userId2)
            .set(chat)
            .catch(this.handlePromiseError);
    };
    ChatService.prototype.getDeepChat = function (userId1, userId2) {
        return this.db.object("/chats/" + userId1 + "/" + userId2);
    };
    ChatService.prototype.updatePhoto = function (chat, chatPhoto, recipientUserPhoto) {
        if (chatPhoto != recipientUserPhoto) {
            return chat.update({
                photo: recipientUserPhoto
            }).then(function () {
                return true;
            }).catch(this.handlePromiseError);
        }
        return Promise.resolve(false);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ChatService);
    return ChatService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_friend_event_friend__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, commonService, alertCtrl, loadingCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        //    var dt = new Date();
        //    this.maxYear = dt.getFullYear()+10;
        this.showLoader();
        this.logged = localStorage.getItem('user') ? true : false;
        this.commonService.getEventTypes().subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.eventTypes = result['event_types'];
            }
        });
        this.commonService.getCountries().subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.countryList = result['countries'];
            }
        });
        this.commonService.getAgeLimits().subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.ageGroupList = result['age_limits'];
                _this.loading.dismiss();
            }
        });
        this.search = {
            date: '',
            event_type: '',
            country: '',
            location: '',
            age_men: '',
            age_women: ''
        };
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.exit();
            //this.platform.exitApp();
            //backAction();
        }, 2);
    }
    HomePage.prototype.exit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Do you want to Exit App ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.open2 = function () {
        window.open("https://www.facebook.com/meetmatchandgo", '_system', 'location=yes');
    };
    HomePage.prototype.open3 = function () {
        window.open("https://twitter.com/meetmatchandgo", '_system', 'location=yes');
    };
    HomePage.prototype.open4 = function () {
        window.open("https://plus.google.com/+meetmatchandgo", '_system', 'location=yes');
    };
    HomePage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    HomePage.prototype.showLoader = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 10000);
    };
    HomePage.prototype.searchEvents = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */], this.search);
    };
    HomePage.prototype.getCities = function (country) {
        var _this = this;
        this.showLoader();
        console.log(country);
        this.commonService.getCities(country).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.cityList = result['cities'];
                _this.loading.dismiss();
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    \n    <!-- <ion-grid style="align-items: normal;" >\n      <ion-row>\n        <ion-col col-3><button ion-button menuToggle>\n            <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-6><div style="width: 100% !important;\n          margin-right: 15% !important;\n          margin-top: -5px;">\n            <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div *ngIf="logged==true" >\n          <button  ion-button (click)="opnchat()" style="background: transparent;\n          box-shadow: none;\n          margin-left: 20px;\n          margin-top: 0px;\n          color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n        </div>  \n      </ion-col>\n      </ion-row>\n    </ion-grid> -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"> </ion-icon>\n    </button>\n    <div  *ngIf="logged==true" class="img1">\n      <img src="assets/imgs/logo.jpg">\n    </div>\n    <div  *ngIf="logged==false" class="img1">\n        <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n      </div>\n    <ion-buttons *ngIf="logged==true" end>\n        <button ion-button icon-only (click)="opnchat()">\n          <ion-icon name="chatbubbles"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides disable-side-menu-drag="" options="{\'loop\': true}" slider="slider1" delegate-handle="slider1" id="home-slider1"\n    style="width:100%;height:240px;" pager autoplay="2000">\n    <ion-slide id="home-slide24" style="background:url(&quot;assets/imgs/slide01.jpg&quot;) no-repeat center;background-size:cover;">\n      <div class="spacer" style="width: 300px; height: 20px;"></div>\n      <h3 id="home-heading1" style="color:#FFFFFF;text-align:center;">MEETMATCHANDGO</h3>\n      <div id="home-markdown1" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#EFBA00;font-size:12px;">We are a UK Speed Dating Company</p>\n      </div>\n      <div id="home-markdown2" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#FFFFFF;font-size:12px;">Here to help you find someone new - register for one of our events now.\n        </p>\n      </div>\n    </ion-slide>\n    <ion-slide id="home-slide27" style="background:url(&quot;assets/imgs/slide01.jpg&quot;) no-repeat center;background-size:cover;">\n      <div class="spacer" style="width: 300px; height: 20px;"></div>\n      <h3 id="home-heading2" style="color:#FFFFFF;text-align:center;">MEETMATCHANDGO</h3>\n      <div id="home-markdown5" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#EFBA00;font-size:12px;">We organise amazing speed dating events &amp; parties </p>\n      </div>\n      <div id="home-markdown6" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#FFFFFF;font-size:12px;">Follow us on <a (click)="open3()" title="Meetmatchandgo Twitter" target="new" style="color:#F90">Twitter</a>\n          / <a (click)="open2()" title="Meetmatchandgo on Facebook" target="new" style="color:#F90">Facebook</a>\n          <!-- and \n          <a (click)="open4()" title="Meetmatchandgo on Google" target="_blank" style="color:#F90">Google\n          Plus</a> -->\n           to keep ahead of the latest events</p>\n      </div>\n    </ion-slide>\n    <ion-slide id="home-slide28" style="background:url(&quot;assets/imgs/slide01.jpg&quot;) no-repeat center;background-size:cover;">\n      <div class="spacer" style="width: 300px; height: 20px;"></div>\n      <h3 id="home-heading3" style="color:#FFFFFF;text-align:center;">MEETMATCHANDGO</h3>\n      <div id="home-markdown7" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#EFBA00;font-size:12px;">Dont miss out on finding someone new</p>\n      </div>\n      <div id="home-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#FFFFFF;font-size:12px;">Check out our latest events below</p>\n      </div>\n    </ion-slide>\n    <ion-slide id="home-slide29" style="background:url(&quot;assets/imgs/slide01.jpg&quot;) no-repeat center;background-size:cover;">\n      <div class="spacer" style="width: 300px; height: 20px;"></div>\n      <h3 id="home-heading4" style="color:#FFFFFF;text-align:center;">MEETMATCHANDGO</h3>\n      <div id="home-markdown9" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#EFBA00;font-size:12px;">We have an excellant team of speed dating organisers</p>\n      </div>\n      <div id="home-markdown10" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#FFFFFF;font-size:12px;">to make you feel relaxed and comfortable our event</p>\n      </div>\n    </ion-slide>\n    <ion-slide id="home-slide210" style="background:url(&quot;assets/imgs/slide01.jpg&quot;) no-repeat center;background-size:cover;">\n      <div class="spacer" style="width: 300px; height: 20px;"></div>\n      <h3 id="home-heading5" style="color:#FFFFFF;text-align:center;">MEETMATCHANDGO</h3>\n      <div id="home-markdown11" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#EFBA00;font-size:12px;">Our organisers always make you feel welcomed</p>\n      </div>\n      <div id="home-markdown12" style="text-align:center;" class="show-list-numbers-and-dots">\n        <p style="color:#FFFFFF;font-size:12px;">so you are never left alone or embarrassed to be at any event</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <form id="home-form5" class="list">\n    <ion-item>\n        <ion-label class="label label-md" interface="action-sheet" stacked>     </ion-label>\n      <ion-datetime max="2030" displayFormat="DD/MM/YYYY" name="date" [(ngModel)]="search.date" placeholder="Select Event Start Date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-label class="label label-md" interface="action-sheet" stacked>    </ion-label>\n      <ion-select interface="action-sheet" placeholder="Select Event Type" name="event_type" [(ngModel)]="search.event_type"> \n        <ion-option *ngFor="let type of eventTypes; let i=index;" [value]="type.event_type">{{type.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label class="label label-md" interface="action-sheet" stacked>   </ion-label>\n      <ion-select interface="action-sheet" placeholder="Select Country" name="country" [(ngModel)]="search.country" #C (ionChange)="getCities(C.value)">\n        <ion-option *ngFor="let country of countryList; let i=index;" [value]="country.country_id">{{country.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label class="label label-md" interface="action-sheet" stacked>    </ion-label>\n      <ion-select interface="action-sheet" placeholder="Select City" name="location" [(ngModel)]="search.location">\n        <ion-option *ngFor="let city of cityList; let i=index;" [value]="city.zone_id">{{city.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label class="label label-md" interface="action-sheet"  stacked>    </ion-label>\n      <ion-select interface="action-sheet" placeholder="Select Mens Age Group" name="age_men" [(ngModel)]="search.age_men">\n        <ion-option *ngFor="let age of ageGroupList; let i=index;" [value]="age.id">{{age.limits}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label class="label label-md" interface="action-sheet" stacked>     </ion-label>\n      <ion-select interface="action-sheet" placeholder="Select Womens Age Group" name="age_women" [(ngModel)]="search.age_women">\n        <ion-option *ngFor="let age of ageGroupList; let i=index;" [value]="age.id">{{age.limits}}</ion-option>\n      </ion-select>\n    </ion-item><br>\n    <!-- <button ion-button round icon-start (click)="searchEvents()"><ion-icon name="search" ></ion-icon> Search</button> -->\n  </form>\n</ion-content>\n<ion-footer style="text-align: center;background-color: #8b3532;padding: 4px 0 4px 0;">\n  <button ion-button round icon-start (click)="searchEvents()"><ion-icon name="search" ></ion-icon> Search</button>\n</ion-footer>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__(120);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Observable } from 'rxjs/Observable';
var MessageService = /** @class */ (function (_super) {
    __extends(MessageService, _super);
    function MessageService(db, http) {
        var _this = _super.call(this) || this;
        _this.db = db;
        _this.http = http;
        return _this;
    }
    MessageService.prototype.create = function (message, listMessages) {
        return Promise.resolve(listMessages.push(message));
    };
    MessageService.prototype.getMessages = function (userId1, userId2) {
        //console.log(userId1, userId2);
        return this.db.list("/messages/" + userId1 + "-" + userId2, function (ref) { return ref.limitToLast(200).orderByChild('timestamp'); });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MessageService);
    return MessageService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.logged = localStorage.getItem('user') ? true : false;
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    AboutPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    AboutPage.prototype.open1 = function () {
        window.open("https://www.meetmatchandgo.com", '_system', 'location=yes');
    };
    AboutPage.prototype.open2 = function () {
        window.open("https://www.facebook.com/meetmatchandgo", '_system', 'location=yes');
    };
    AboutPage.prototype.open3 = function () {
        window.open("https://twitter.com/meetmatchandgo", '_system', 'location=yes');
    };
    AboutPage.prototype.open4 = function () {
        window.open("https://plus.google.com/+meetmatchandgo", '_system', 'location=yes');
    };
    AboutPage.prototype.open5 = function () {
        window.open("https://www.instagram.com/meetmatchandgo", '_system', 'location=yes');
    };
    AboutPage.prototype.open6 = function () {
        window.open("https://www.linkedin.com/company/meetmatchandgo", '_system', 'location=yes');
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="    align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div *ngIf="logged==true" class="img1">\n            <img src="assets/imgs/logo.jpg">\n          </div>\n          <div *ngIf="logged==false" class="img1">\n              <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n            </div>\n          <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n\n  <div>\n    <h4 class="contenthead">About Us</h4>\n    <p class="aboutcontent">MeetMatchandGo is a new dating company based in London UK. We are an upcoming dating company who specialises in having event\n    organisers within different locations around the UK. Event organisers will always be around to help during any event and\n    you have the opportunity to rate not only the actual event but also the organiser that was hosting on the day. We do hope\n    you enjoy our organised events and hope you become long term users whether to socialise or to find your perfect match.</p>\n  </div>\n  <!--<ion-card style="padding:0px 0px">\n      <ion-card-header style="color: firebrick">About Us</ion-card-header>\n      <ion-card-content>\n        MeetMatchandGo is a new dating company based in London UK. We are an upcoming dating company who specialises in having event organisers within different locations around the UK. Event organisers will always be around to help during any event and you have the opportunity to rate not only the actual event but also the organiser that was hosting on the day. We do hope you enjoy our organised events and hope you become long term users whether to socialise or to find your perfect match.\n      </ion-card-content>\n    </ion-card>-->\n  <div class="headingline"><font size=3 color=white>Contact with us</font></div>\n  <div >\n  <a ion-button color="danger" full clear (click)="open1()" target="__blank">\n    <span class="button-inner">\n    <ion-icon name="link"> <font color=black>Visit our Website</font></ion-icon>\n    </span></a><hr>\n  <a ion-button color="black" full clear (click)="open2()" target="__blank"><ion-icon name="logo-facebook"> <font color=black>Link us on Facebook</font></ion-icon></a><hr>\n  <a (click)="open3()" target="__blank" ion-button color="blue" full clear><ion-icon name="logo-twitter"> <font color=black>Follow us on Twitter</font></ion-icon></a><hr>\n  <!-- <a (click)="open4()" target="__blank" ion-button color="danger" full clear><ion-icon name="logo-googleplus"> <font color=black>Follow us on Google plus</font></ion-icon></a><hr> -->\n  <a (click)="open5()" target="__blank" ion-button color="danger" full clear><ion-icon name="logo-instagram"> <font color=black>Follow us on Instagram</font></ion-icon></a><hr>\n  <a (click)="open6()" target="__blank" ion-button color="blue" full clear><ion-icon name="logo-linkedin"> <font color=black>Follow us on Linkedin</font></ion-icon></a><hr>\n  </div>\n  \n  <div class="headingline"><font size=1 color=white>All Rights Reserved @ meetmatchandgo.com</font></div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_tickets_my_tickets__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ticket_holder_details_ticket_holder_details__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, commonService, loadingCtrl, toastCtrl, platform, payPal, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.payPal = payPal;
        this.navParams = navParams;
        this.men = [];
        this.women = [];
        //console.log(this.navParams.get('userdetail'), this.navParams.get('tickets'), this.navParams.get('eventDetail'));
        this.userdetail = JSON.parse(this.navParams.get('userdetail'));
        //console.log(this.userdetail);
        this.tickets = JSON.parse(this.navParams.get('tickets'));
        //console.log("Tickets =>",this.tickets)
        if (this.tickets) {
            for (var i = 0; i < this.tickets.length; i++) {
                if (this.tickets[i].gender == 'M') {
                    this.men.push(this.tickets[i]);
                }
                else {
                    this.women.push(this.tickets[i]);
                }
                this.menTotal = this.men.length;
                this.womenTotal = this.women.length;
            }
        }
        this.eventDetail = JSON.parse(this.navParams.get('eventDetail'));
        this.price = JSON.parse(this.navParams.get('price'));
        if (this.userdetail && this.tickets && this.eventDetail) {
            this.showLoader();
            this.commonService.storeTmpOrder({
                user_id: this.userdetail['id'],
                discount_code: this.userdetail['code'] ? this.userdetail['code'] : '',
                discount: this.price['discount'] ? this.price['discount'] : 0,
                group_id: this.price['groupDiscount'] ? this.price['groupDiscount']['id'] : 0,
                event_id: this.eventDetail['id'],
                price: this.price['total'],
                users: this.tickets
            }).subscribe(function (result1) {
                var result = JSON.parse(result1['_body']);
                _this.loading.dismiss();
                if (result['Status'] == true) {
                    _this.tmpOrderId = result['order_id'];
                }
            });
        }
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__ticket_holder_details_ticket_holder_details__["a" /* TicketHolderDetailsPage */], { userDetail: JSON.stringify(_this.userdetail) });
            //backAction();
        }, 2);
    }
    PaymentPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    PaymentPage.prototype.ngAfterViewInit = function () {
        //this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(() => {
        var total = this.price['total'].toString();
        var $this = this;
        // paypal.Button.render({
        //   env: 'sandbox',
        //   client: {
        //     production: '',
        //     sandbox: 'ATMDuuNhE157HEqvAg4-1XYDVldy5Opzwcc0lfoR5vQwj9zgLoTvgJ-NmJtd8pK5JJk3PG1DnGmV9yFx'
        //   },
        //   commit: true,
        //   payment: function (data, actions) {
        //     console.log($this,total);
        //     return actions.payment.create({
        //       payment: {
        //         transactions: [
        //           {
        //             amount: { total: total, currency: $this.eventDetail['currency_code'] },
        //             item_list: {
        //               items: [
        //                 {
        //                   name: 'MEETMATCHANDGO Event at ' + $this.eventDetail['location'] + ' - ' + $this.eventDetail['place'] + ' on ' + $this.eventDetail['event_date'] + ' at ' + $this.eventDetail['start_time'],
        //                   description: 'MEETMATCHANDGO Event at ' + $this.eventDetail['location'] + ' - ' + $this.eventDetail['place'] + ' on ' + $this.eventDetail['event_date'] + ' at ' + $this.eventDetail['start_time'],
        //                   quantity: $this.userdetail['qty'].toString(),
        //                   price: total,//$this.eventDetail['price'].toString(),
        //                   currency: $this.eventDetail['currency_code']
        //                 }
        //               ]
        //             }
        //           }
        //         ]
        //       }
        //     })
        //   },
        //   onAuthorize: function (data, actions) {
        //     return actions.payment.execute().then( (payment)=> {
        //       // TODO
        //       console.log(payment);
        //       if (payment.state.toUpperCase() == 'APPROVED' || payment.state.toUpperCase() == 'COMPLETED' || payment.state.toUpperCase() == 'PENDING'){
        //         $this.showLoader();
        //         $this.commonService.notifyPayment({
        //           order_id: $this.tmpOrderId,
        //           payment_status: payment.state.toUpperCase(),
        //           txn_id: payment.id,
        //           mc_currency: payment.transactions[0].amount.currency,
        //           response: payment
        //         }).subscribe((result1) => {
        //           let result = JSON.parse(result1['_body']);
        //           $this.loading.dismiss();
        //           if (result['Status'] == true) {
        //             $this.presentToast(result['Msg'].toString());
        //             $this.navCtrl.setRoot(MyTicketsPage);
        //           }
        //           else {
        //             $this.presentToast(result['Msg'].toString());
        //           }
        //         });
        //       }
        //       $this.paypalResponse = payment;
        //     })
        //   },
        //   onCancel: function (data, actions) {
        //     // Show a cancel page or return to cart
        //   }
        // }, '#paypal-button');
        //});
    };
    PaymentPage.prototype.payment = function () {
        var _this = this;
        var total = this.price['total'].toString();
        var $this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: '',
            PayPalEnvironmentSandbox: 'ATMDuuNhE157HEqvAg4-1XYDVldy5Opzwcc0lfoR5vQwj9zgLoTvgJ-NmJtd8pK5JJk3PG1DnGmV9yFx'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["c" /* PayPalPayment */](total, $this.eventDetail['currency_code'], 'MEETMATCHANDGO Event at ' + $this.eventDetail['location'] + ' - ' + $this.eventDetail['place'] + ' on ' + $this.eventDetail['event_date'] + ' at ' + $this.eventDetail['start_time'], 'MEETMATCHANDGO Event at ' + $this.eventDetail['location'] + ' - ' + $this.eventDetail['place'] + ' on ' + $this.eventDetail['event_date'] + ' at ' + $this.eventDetail['start_time']);
                _this.payPal.renderSinglePaymentUI(payment).then(function (response) {
                    // Successfully paid
                    //alert(JSON.stringify(response));
                    var payment = response.response;
                    console.log(payment);
                    if (payment.state.toUpperCase() == 'APPROVED' || payment.state.toUpperCase() == 'COMPLETED' || payment.state.toUpperCase() == 'PENDING') {
                        $this.showLoader();
                        $this.commonService.notifyPayment({
                            order_id: $this.tmpOrderId,
                            payment_status: payment.state.toUpperCase(),
                            txn_id: payment.id,
                            mc_currency: $this.eventDetail['currency_code'],
                            response: payment
                        }).subscribe(function (result1) {
                            var result = JSON.parse(result1['_body']);
                            $this.loading.dismiss();
                            if (result['Status'] == true) {
                                $this.presentToast(result['Msg'].toString());
                                $this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__my_tickets_my_tickets__["a" /* MyTicketsPage */]);
                            }
                            else {
                                $this.presentToast(result['Msg'].toString());
                            }
                        });
                    }
                    $this.paypalResponse = payment;
                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, function (error) {
                    alert(JSON.stringify(error));
                    // Error or render dialog closed without being successful
                });
            }, function (error) {
                alert(JSON.stringify(error));
                // Error in configuration
            });
        }, function (error) {
            alert(JSON.stringify(error));
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    PaymentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/payment/payment.html"*/'<!--\n  Generated template for the TicketRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img  src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card style="    display: contents;" class="card_io">\n\n    <ion-card-header>\n       \n    </ion-card-header>\n  \n    <ion-card-content>\n      <table>\n        <tr>\n          <th colspan="3" style="background-color:#800020; text-align: center; padding-top: 8px;padding-bottom: 8px;"><font style="color: white;font-size: 15px;">SUMMARY</font></th>\n\n        </tr>\n        <tr>\n          <td><font style="color:#8b3532; font-weight:bold ">Event Type</font></td>\n         <td colspan="2">{{eventDetail.event_type}}</td>\n        </tr>\n        <tr>\n          <td><font style="color:#8b3532; font-weight:bold ">Venue</font></td>\n         <td colspan="2">{{eventDetail.location}}</td>\n        </tr>\n        <tr>\n          <td><font style="color:#8b3532; font-weight:bold ">Location</font></td>\n         <td colspan="2">{{eventDetail.place}}- {{eventDetail.zone}}</td>\n        </tr>\n        <tr>\n          <td><font style="color:#8b3532; font-weight:bold ">Date</font></td>\n      <!--   <td colspan="2">{{eventDetail.event_date}}</td> -->\n      <td colspan="2">{{eventDetail.date}}</td>\n        </tr>\n        <tr>\n          <td><font style="color:#8b3532; font-weight:bold ">Start Time</font></td>\n         <td colspan="2">{{eventDetail.start_time}}</td>\n        </tr>\n        <tr>\n          <td><font style="color:#8b3532; font-weight:bold ">Purchased By</font></td>\n         <td colspan="2">{{userdetail.first_name + \' \' + userdetail.last_name}}</td>\n        </tr>\n      </table>\n\n      <table>\n        <tr>\n          <th colspan="3" style="background-color:#800020; padding-top: 8px;padding-bottom: 8px; text-align: center;"><font style="color: white;font-size: 15px;">{{menTotal?menTotal:\'No\'}} {{menTotal<=1?\'ticket has\':\'tickets have\'}} been purchased for men</font></th>\n\n        </tr>\n      </table>\n      <table >\n        <tbody *ngFor="let m of men; let i=index;">\n        <tr>\n          <td><font style="color:#8b3532; font-weight:bold ">Name {{i+1}}</font></td>\n         <td colspan="2">{{m.first_name + \' \' + m.last_name}}</td>\n        </tr>\n        <tr>\n          <td><font style="color:#8b3532; font-weight:bold ">Email {{i+1}}</font></td>\n         <td colspan="2">{{m.email}}</td>\n        </tr>\n      </tbody>\n      </table>\n    <table *ngIf="men">\n      <tr>\n        <td colspan="3"></td>\n      </tr>\n    </table>\n\n    <table>\n        <tr>\n          <th colspan="3" style="background-color:#800020; padding-top: 8px;padding-bottom: 8px; text-align: center;"><font style=" color: white;font-size: 15px;">{{womenTotal?womenTotal:\'No\'}} {{womenTotal<=1?\'ticket has\':\'tickets have\'}} been purchased for women</font></th>\n\n        </tr>\n      </table>\n    \n        <table>\n            <tbody *ngFor="let wm of women; let i=index;">\n        <tr>\n          <td>\n            <font style="color:#8b3532; font-weight:bold ">Name {{i+1}}</font>\n          </td>\n          <td colspan="2">{{wm.first_name + \' \' + wm.last_name}}</td>\n        </tr>\n        <tr>\n          <td>\n            <font style="color:#8b3532; font-weight:bold ">Email {{i+1}}</font>\n          </td>\n          <td colspan="2">{{wm.email}}</td>\n        </tr>\n      </table>\n      <table *ngIf="women">\n        <tr>\n          <td colspan="3"></td>\n        </tr>\n      </tbody>\n      </table>\n      <table>\n        <tr *ngIf="price.discount">\n          <td>\n            <font style="color:#8b3532; font-weight:bold ">Coupon Discount Applied</font>\n          </td>\n          <td colspan="2">£{{price.discount}}</td>\n        </tr>\n        <tr *ngIf="price.gdiscount">\n          <td>\n            <font style="color:#8b3532; font-weight:bold ">Group Discount Applied</font>\n          </td>\n          <td colspan="2">£{{price.gdiscount}}</td>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <th colspan="3" style="background-color:silver; text-align: center; padding-top: 8px;padding-bottom: 8px;"><font style=" color: green;font-size: 15px;">Order Total</font></th>\n\n        </tr>\n        <tr>\n          <td colspan="3">The total amount for your order is £{{price.total}}<br> <br>Please proceed to complete payment for your event by pressing the button to input your card details</td>\n        </tr>\n        <tr>\n          \n           <td colspan="3"><!--<div id="paypal-button" style="text-align: center;"></div><br>--><button ion-button color="danger" (click)="payment()" full>PROCEED TO MAKE PAYMENT</button></td>\n        </tr>\n      </table>\n\n      \n    \n    </ion-card-content>\n            \n            </ion-card>\n        \n      </ion-content>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
* Generated class for the ForgotPasswordPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, user_service, events, loadingCtrl, toastCtrl, validation, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user_service = user_service;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.validation = validation;
        this.platform = platform;
        this.navParams = navParams;
        this.forgot = {
            email: ''
        };
        this.errors = {
            email: ''
        };
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            //backAction();
        }, 2);
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.forgotPassword = function () {
        var _this = this;
        var valid = this.validation.forgot(this.forgot);
        if (!valid.err) {
            this.showLoader();
            //console.log("login credentials", this.user);
            this.user_service.forgot(this.forgot).subscribe(function (result1) {
                // console.log(result1);
                var result = JSON.parse(result1['_body']);
                // console.log(result);
                if (result['Status']) {
                    //this.presentToast(result['Msg']);
                    _this.presentToast('Mail has been sent to your Email Adderss');
                    //console.log(result['Msg']);
                    _this.loading.dismiss();
                    _this.forgot = {
                        email: ''
                    };
                    // . this.navCtrl.setRoot(ProfilePage, {}, { animate: true, direction: 'forward' });
                }
                else {
                    //alert('hello');
                    _this.loading.dismiss();
                    _this.presentToast('Email Address Not Found!');
                    //this.presentToast(result['Msg']);
                    //  this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                }
            });
        }
        else {
            this.errors = valid.errors;
        }
    };
    ForgotPasswordPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    ForgotPasswordPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    ForgotPasswordPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <!-- <ion-grid style="align-items: normal;" >\n            <ion-row>\n              <ion-col col-3><button ion-button menuToggle>\n                  <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-6><div style="width: 100% !important;\n                margin-right: 15% !important;\n                margin-top: -5px;">\n                  <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n                </div>\n              </ion-col>\n              <ion-col col-3>\n                <button  ion-button (click)="opnchat()" style="background: transparent;\n                box-shadow: none;\n                margin-left: 20px;\n                margin-top: 0px;\n                color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> -->\n          <button ion-button menuToggle>\n              <ion-icon name="menu"> </ion-icon>\n            </button>\n            <div class="img1">\n              <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n            </div>\n            <!-- <ion-buttons *ngIf="logged==true" end>\n                <button ion-button icon-only (click)="opnchat()">\n                  <ion-icon name="chatbubbles"></ion-icon>\n                </button>\n              </ion-buttons> -->\n      \n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-card class="card_io">\n        <form>\n  \n          <ion-card-header>\n           <font color="#efba00">Forgot Password</font>\n          </ion-card-header>\n        \n          <ion-card-content>\n            <ion-item>\n                <ion-label interface="action-sheet" stacked style="padding-left: 10px;"> Enter Registered Email Address</ion-label>\n              <ion-input type="text" placeholder=" " name="email" required [(ngModel)]="forgot.email" interface="action-sheet" style="padding-left: 7px;"></ion-input>\n            </ion-item>\n            <label class="error" *ngIf="errors.email">{{errors.email}}</label>\n            <br>\n           <button ion-button round icon-start (click)="forgotPassword()"> SUBMIT</button>\n           </ion-card-content>\n        </form>\n        </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__service_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__past_events_past_events__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddReviewPage = /** @class */ (function () {
    function AddReviewPage(navCtrl, commonService, alertCtrl, validation, loadingCtrl, toastCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.alertCtrl = alertCtrl;
        this.validation = validation;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.errors = {
            location_id: '',
            user_id: '',
            description: '',
            rating: ''
        };
        this.review = {
            location_id: '',
            user_id: '',
            description: '',
            rating: ''
        };
        this.logged = localStorage.getItem('user') ? true : false;
        this.review.location_id = navParams.get('location_id');
        this.event_type = navParams.get('event_type');
        var loggedData = JSON.parse(localStorage.getItem('user'));
        this.review.user_id = loggedData['userId'];
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__past_events_past_events__["a" /* PastEventsPage */]);
            //backAction();
        }, 2);
    }
    AddReviewPage.prototype.saveReview = function () {
        var _this = this;
        var valid = this.validation.addReview(this.review);
        if (!valid.err) {
            this.showLoader();
            this.commonService.addReview(this.review).subscribe(function (result1) {
                var result = JSON.parse(result1['_body']);
                if (result['Status']) {
                    _this.presentToast("Your review added successfully!.");
                    _this.loading.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: '',
                        subTitle: 'Your review added successfully!.',
                        buttons: ['Dismiss']
                    });
                    alert_1.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__past_events_past_events__["a" /* PastEventsPage */], {}, { animate: true, direction: 'forward' });
                }
                else {
                    _this.loading.dismiss();
                    _this.presentToast(result['Msg']);
                }
            });
        }
        else {
            this.errors = valid.errors;
        }
    };
    AddReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddReviewPage');
    };
    AddReviewPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    AddReviewPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    AddReviewPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 7000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AddReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-review',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/add-review/add-review.html"*/'<!--\n  Generated template for the AddReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="    align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1">\n            <img src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-card class="card_io">\n\n    <ion-card-header>\n   <h2 style=" text-align: center; color:#efba00; font-weight:bold">{{event_type}}</h2>  \n   \n    </ion-card-header>\n  \n    <ion-card-content>\n      <form id="home-form5" class="list">\n            <ion-item>\n              <ion-select interface="action-sheet" name="rating" [(ngModel)]="review.rating" placeholder="Select Rating out of 5"> \n                <ion-option vlaue="">Select Rating out of 5</ion-option>\n                <ion-option vlaue="1.0">1.0</ion-option>\n                <ion-option vlaue="1.5">1.5</ion-option>\n                <ion-option vlaue="2.0">2.0</ion-option>\n                <ion-option vlaue="2.5">2.5</ion-option>\n                <ion-option vlaue="3.0">3.0</ion-option>\n                <ion-option vlaue="3.5">3.5</ion-option>\n                <ion-option vlaue="4.0">4.0</ion-option>\n                <ion-option vlaue="4.5">4.5</ion-option>\n                <ion-option vlaue="5.0">5.0</ion-option>\n              </ion-select>\n            </ion-item>\n            <label class="error" *ngIf="errors.rating">{{errors.rating}}</label>\n            <ion-item>\n              <ion-label interface="action-sheet" stacked> Review Message</ion-label>\n              <ion-textarea #msgInput rows="3" maxLength="500"  name="description" [(ngModel)]="review.description" placeholder="Please Enter Your Message Here....." interface="action-sheet" [ngModelOptions]="{standalone: true}" ></ion-textarea>\n            </ion-item>\n            <label class="error" *ngIf="errors.description">{{errors.description}}</label>\n            <button ion-button round icon-start (click)="saveReview()">SUBMIT</button>\n      </form>\n    </ion-card-content>\n  \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/add-review/add-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__service_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AddReviewPage);
    return AddReviewPage;
}());

//# sourceMappingURL=add-review.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, loadingCtrl, toastCtrl, commonService, validation, platform, user_service, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.validation = validation;
        this.platform = platform;
        this.user_service = user_service;
        this.navParams = navParams;
        this.logged = localStorage.getItem('user') ? true : false;
        var loggedData = JSON.parse(localStorage.getItem('user'));
        this.user = {
            user_id: loggedData['userId'],
            old_password: '',
            password: '',
            repassword: ''
        };
        this.errors = {
            old_password: '',
            password: '',
            repassword: ''
        };
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    ChangePasswordPage.prototype.changePasswords = function () {
        var _this = this;
        var valid = this.validation.changePassword(this.user);
        console.log(valid);
        if (!valid.err) {
            this.showLoader();
            //console.log("login credentials", this.user);
            this.user_service.changePassword(this.user).subscribe(function (result1) {
                var result = JSON.parse(result1['_body']);
                console.log(result);
                if (result['Status']) {
                    //this.presentToast('Image succesful uploaded.');
                    _this.loading.dismiss();
                    _this.presentToast("Your Password update successfully!.");
                    setTimeout(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */], {}, { animate: true, direction: 'forward' });
                    }, 1000);
                }
                else {
                    _this.loading.dismiss();
                    if (typeof result['Msg'] == 'object') {
                        _this.errors = result['Msg'].errors;
                    }
                    else
                        _this.presentToast(result['Msg']);
                    // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                }
            });
        }
        else {
            this.errors = valid.errors;
        }
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    ChangePasswordPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    ChangePasswordPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/change-password/change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="    align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div  *ngIf="logged==true" class="img1">\n            <img src="assets/imgs/logo.jpg">\n          </div>\n          <div  *ngIf="logged==false" class="img1">\n              <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n            </div>\n          <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-card class="card_io">\n      <form>\n      <ion-card-header>\n       <font color="#efba00">Change Password</font>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-item>\n            <ion-label interface="action-sheet" stacked style="padding-left: 5px;"> Enter Old Password</ion-label>\n          <ion-input type="text" placeholder="  " name="old_password" [(ngModel)]="user.old_password" interface="action-sheet"></ion-input>\n        </ion-item>\n        <label class="error" *ngIf="errors.old_password">{{errors.old_password}}</label>\n        <ion-item>\n            <ion-label interface="action-sheet" stacked style="padding-left: 5px;"> Enter New Password</ion-label>\n          <ion-input type="password" placeholder="  " name="password" [(ngModel)]="user.password" interface="action-sheet"></ion-input>\n        </ion-item>\n        <label class="error" *ngIf="errors.password">{{errors.password}}</label>\n        <ion-item>\n            <ion-label interface="action-sheet" stacked style="padding-left: 5px;"> Re-enter New Password</ion-label>\n          <ion-input type="password" placeholder="  " name="repassword" [(ngModel)]="user.repassword" interface="action-sheet"></ion-input>\n        </ion-item>\n        <label class="error" *ngIf="errors.repassword">{{errors.repassword}}</label><br>\n      </ion-card-content>\n      <button ion-button round icon-start (click)="changePasswords()" > SUBMIT</button><br>\n    </form>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__service_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendEnquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_contact__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SendEnquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendEnquiryPage = /** @class */ (function () {
    function SendEnquiryPage(navCtrl, commonService, validation, loadingCtrl, toastCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.validation = validation;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.user = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };
        this.errors = {
            name: '',
            email: '',
            message: '',
            subject: '',
        };
        var loggedUser = JSON.parse(localStorage.getItem('user'));
        this.user.email = loggedUser ? loggedUser['email'] : '';
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__contact_contact__["a" /* ContactPage */]);
            //backAction();
        }, 2);
    }
    SendEnquiryPage.prototype.contactUs = function () {
        var _this = this;
        // alert(this.user.name);
        // alert(this.user.email);
        // alert(this.user.message);
        // alert(this.user.subject);
        var valid = this.validation.sendEnquiry(this.user);
        if (!valid.err) {
            this.showLoader();
            this.commonService.sendEnquiry(this.user).subscribe(function (result1) {
                var result = JSON.parse(result1['_body']);
                if (result['Status']) {
                    _this.presentToast("Message successfully sent.");
                    _this.loading.dismiss();
                    setTimeout(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__contact_contact__["a" /* ContactPage */], {}, { animate: true, direction: 'forward' });
                    }, 2000);
                }
                else {
                    _this.loading.dismiss();
                    //this.presentToast("Unfortunately, your message was not sent - Please try again shortly.");
                    _this.presentToast(result['Msg']);
                }
            });
        }
        else {
            this.errors = valid.errors;
        }
    };
    SendEnquiryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendEnquiryPage');
    };
    SendEnquiryPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    SendEnquiryPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    SendEnquiryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 8000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SendEnquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-send-enquiry',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/send-enquiry/send-enquiry.html"*/'<!--\n  Generated template for the SendEnquiryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n          </div>\n          <!-- <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card class="card_io">\n\n      <ion-card-header>\n     <font style="color:#efba00"> SEND ENQUIRY </font>   \n      </ion-card-header>\n\n      <ion-card-content *ngIf="user">\n          <form id="home-form5" class="list">\n              <ion-item>\n                  <ion-label interface="action-sheet" stacked>Name</ion-label>\n                  <ion-input type="text" placeholder="  " name="name"  [(ngModel)]="user.name" interface="action-sheet" [ngModelOptions]="{standalone: true}"></ion-input>\n                </ion-item>\n                <label class="error" *ngIf="errors.name">{{errors.name}}</label>\n                <ion-item>\n                    <ion-label interface="action-sheet" stacked>Email</ion-label>\n                    <ion-input type="text" placeholder="  " name="email"  [(ngModel)]="user.email" interface="action-sheet" [ngModelOptions]="{standalone: true}">{{user.email}}</ion-input>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.email">{{errors.email}}</label>\n                  <ion-item>\n                      <ion-label interface="action-sheet" stacked>Subject</ion-label>\n                      <ion-input type="text" placeholder="  " name="subject"  [(ngModel)]="user.subject" interface="action-sheet" [ngModelOptions]="{standalone: true}"></ion-input>\n                    </ion-item>\n                    <label class="error" *ngIf="errors.subject">{{errors.subject}}</label>\n                    <ion-item>\n                        <ion-label interface="action-sheet" stacked>Message</ion-label>\n                        <!-- <ion-input type="text" placeholder=" Message" name="message"  [(ngModel)]="user.message" interface="action-sheet" [ngModelOptions]="{standalone: true}"></ion-input> -->\n                        <ion-textarea #msgInput rows="3" maxLength="500"  name="message" [(ngModel)]="user.message" placeholder=" " interface="action-sheet" [ngModelOptions]="{standalone: true}" ></ion-textarea>\n                      </ion-item>\n                      <label class="error" *ngIf="errors.message">{{errors.message}}</label><br>\n                    <button ion-button round icon-start (click)="contactUs()" > SUBMIT </button>\n                    <!-- <button ion-button round icon-start> RESET </button> -->\n                              \n                  </form>\n                      \n      </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/send-enquiry/send-enquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__service_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */]])
    ], SendEnquiryPage);
    return SendEnquiryPage;
}());

//# sourceMappingURL=send-enquiry.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventMemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pending_approval_pending_approval__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EventMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventMemberPage = /** @class */ (function () {
    // requestsend=false;
    // showMsg=false;
    function EventMemberPage(navCtrl, toastCtrl, commonService, loadingCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.isevents = true;
        this.user = {
            id: '',
        };
        this.logged = localStorage.getItem('user') ? true : false;
        this.loggedData = JSON.parse(localStorage.getItem('user'));
        this.loggedId = this.loggedData['userId'];
        this.loggedGender = this.loggedData['gender'];
        //alert(this.loggedGender);
        this.showLoader();
        this.commonService.getCompleteEvent(this.loggedData['userId']).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.eventMemberList = typeof result['Msg']['event_list'] != 'string' ? result['Msg']['event_list'] : [];
                _this.isevents = _this.eventMemberList.length > 0 ? true : false;
                _this.loading.dismiss();
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    EventMemberPage.prototype.getEMember = function (id, isloader) {
        var _this = this;
        if (!isloader)
            this.showLoader();
        console.log(id);
        this.commonService.getUserMemberByEvents(id, this.loggedData['userId']).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                //console.log(result['Msg']['user_list']);
                _this.user_list = typeof result['Msg']['user_list'] == 'string' ? [] : result['Msg']['user_list'];
                if (!isloader)
                    _this.loading.dismiss();
            }
        });
    };
    EventMemberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventMemberPage');
    };
    EventMemberPage.prototype.sendfriendRequests = function (receiver_id, event_id, isloader) {
        var _this = this;
        if (!isloader)
            this.showLoader();
        // console.log(id);
        this.commonService.sendfriendRequests(this.loggedData['userId'], receiver_id, event_id).subscribe(function (result1) {
            if (!isloader) {
                _this.loading.dismiss();
            }
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                //  this.navCtrl.setRoot(EventFriendPage);
                console.log("request send");
                // this.requestsend=true;
                _this.presentToast("Friend request send");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pending_approval_pending_approval__["a" /* PendingApprovalPage */]);
            }
            else {
                // this.showMsg=true;
                // this.presentToast("Friend request already sent.")
            }
        });
    };
    EventMemberPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    EventMemberPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    EventMemberPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EventMemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-event-member',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/event-member/event-member.html"*/'<!--\n  Generated template for the EventMemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1">\n            <img src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div style="text-align: center; color: #efba00; font-size: 20px; opacity: 0.8; filter: alpha(opacity=50); background-color: #800020; border-radius: 20px; margin: 5px 50px 10px 50px;"> Event Members </div>\n    <ion-item style="margin: 10px 0 16px;">\n        <ion-label interface="action-sheet" stacked> Event Members</ion-label>\n      <ion-select interface="action-sheet" placeholder="Select a Previous Event" name="eventMember" #C (ionChange)="getEMember(C.value,true)" [(ngModel)]="user.eventMember" >\n        <ion-option *ngFor="let eventMember of eventMemberList; let i=index;" [value]="eventMember.id" [selected]="eventMember.id==user.id" >{{eventMember.event_name}}</ion-option>\n       </ion-select>\n     </ion-item>\n    \n     <ion-list *ngFor="let users of user_list; let i=index">\n\n\n        <div *ngIf="loggedGender==\'M\' && users.gender==\'F\'">\n      <ion-item style="border-bottom: 1px solid;border-bottom-color: #efba00;">\n        <ion-avatar item-start>\n          <img [src]="users.image"  alt="image" style="border-radius: 50%;width: 50px;height: 55px;" />\n        </ion-avatar>\n        <h2>{{users.first_name}}</h2>\n        \n        <p>{{users.location}}</p>\n        <button ion-button color="secondary" *ngIf="!users.hasRequest.id" style="height: 2.6rem;font-size: 1.1rem;"  (click)="sendfriendRequests(users.id,users.event)">SEND REQUEST</button>\n        \n      \n        <p *ngIf="users.hasRequest.id">Request Already Sent.</p>\n      </ion-item>\n    </div>\n    <div *ngIf="loggedGender==\'F\' && users.gender==\'M\'">\n        <ion-item style="border-bottom: 1px solid;border-bottom-color: #efba00;">\n          <ion-avatar item-start>\n            <img [src]="users.image" alt="image" style="border-radius: 50%;width: 50px;height: 55px;" />\n          </ion-avatar>\n          <h2>{{users.first_name}}</h2>\n          \n          <p>{{users.location}}</p>\n          <button ion-button color="secondary" *ngIf="!users.hasRequest.id" style="height: 2.6rem;font-size: 1.1rem;"  (click)="sendfriendRequests(users.id,users.event)">SEND REQUEST</button>\n        \n          <p *ngIf="users.hasRequest.id">Request Already Sent.</p>\n        </ion-item>\n      </div>\n    </ion-list>\n    \n    <ion-list style=" border-bottom: 0px " *ngIf="!isevents">\n      <!-- <h2 align="center">No members listed yet-Please check back later </h2> -->\n      <div style="text-align: center; color: #efba00; font-size: 20px; opacity: 0.8; filter: alpha(opacity=50); background-color: #800020; border-radius: 20px; margin: 10px 50px 0px 50px;padding: 5px 0px 5px 10px;">No members listed yet-Please check back later </div>\n    </ion-list> \n        \n  \n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/event-member/event-member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */]])
    ], EventMemberPage);
    return EventMemberPage;
}());

//# sourceMappingURL=event-member.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FaqSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqSPage = /** @class */ (function () {
    function FaqSPage(navCtrl, loadingCtrl, toastCtrl, commonService, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.platform = platform;
        this.navParams = navParams;
        this.shownFaq = null;
        this.faqs = [
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
        this.showLoader();
        this.logged = localStorage.getItem('user') ? true : false;
        this.commonService.getFaqs().subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            _this.loading.dismiss();
            if (result['Status']) {
                //if (typeof result['result'] == 'object' && result['result'].length > 0)
                _this.faqs = result['result'];
                /* else {
                  this.presentToast('No Faq found.');
                } */
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    FaqSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqSPage');
    };
    FaqSPage.prototype.toggleFaq = function (faq) {
        if (this.isFaqShown(faq)) {
            this.shownFaq = null;
        }
        else {
            this.shownFaq = faq;
        }
    };
    ;
    FaqSPage.prototype.isFaqShown = function (faq) {
        return this.shownFaq === faq;
    };
    ;
    FaqSPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    FaqSPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    FaqSPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    FaqSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq-s',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/faq-s/faq-s.html"*/'<!--\n  Generated template for the FaqSPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div  *ngIf="logged==true" class="img1">\n            <img src="assets/imgs/logo.jpg">\n          </div>\n          <div *ngIf="logged==false"  class="img1">\n              <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n            </div>\n          <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="color:#990000; text-align: center"><h3>Frequently Asked Questions</h3></div>\n  <p>MeetMatchandGo’s useful frequently asked questions (FAQ) section provides information for people who haven’t been to a speed dating event before or require further information regarding the events. Take a look before you make a booking with us as they are sure to be of help to you.  If you’re still unsure about anything to do with speed dating evenings just get in touch with us at MeetMatchandGo.com where our staff can help you out in a friendly and understanding way.</p>\n\n  <ion-list>\n    <ion-item *ngFor="let d of faqs; let i=index" text-wrap (click)="toggleFaq(i)" [ngClass]="{active: isFaqShown(i)}">\n      <div class="border">\n        <h4>\n          {{d.question}}\n          <ion-icon class="faq-icon" color="success" item-right [name]="isFaqShown(i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n        </h4>\n      </div>\n      <div *ngIf="isFaqShown(i)" class="faq-description">{{d.answer}}</div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/faq-s/faq-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], FaqSPage);
    return FaqSPage;
}());

//# sourceMappingURL=faq-s.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecivedRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_friend_event_friend__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ValidationService } from '../../service/validation.service';
/**
 * Generated class for the RecivedRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecivedRequestPage = /** @class */ (function () {
    function RecivedRequestPage(navCtrl, toastCtrl, commonService, loadingCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.isevents = true;
        this.loggedData = JSON.parse(localStorage.getItem('user'));
        this.loggedId = this.loggedData['userId'];
        this.showLoader();
        this.commonService.getFriendRequest(this.loggedData['userId']).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.requests = typeof result['Msg']['request_list'] != 'string' ? result['Msg']['request_list'] : [];
                _this.isevents = _this.requests.length > 0 ? true : false;
                _this.loading.dismiss();
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    RecivedRequestPage.prototype.acceptRequest = function (request_id, status) {
        var _this = this;
        this.showLoader();
        // console.log(id);
        this.commonService.acceptRequests(request_id, this.loggedData['userId'], status ? 1 : 2).subscribe(function (result1) {
            _this.loading.dismiss();
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__event_friend_event_friend__["a" /* EventFriendPage */]);
            }
        });
    };
    RecivedRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecivedRequestPage');
    };
    RecivedRequestPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    RecivedRequestPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    RecivedRequestPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RecivedRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recived-request',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/recived-request/recived-request.html"*/'<!--\n  Generated template for the RecivedRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img  src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div style="text-align: center; color: #efba00; font-size: 20px; opacity: 0.8; filter: alpha(opacity=50); background-color: #800020; border-radius: 20px; margin: 5px 50px 0px 50px;">Received Requests </div>\n    <ion-list *ngFor="let request of requests; let i=index;">\n        <ion-item style="border-bottom: 1px solid;border-bottom-color: #efba00; margin: 5px 0px 0px 0px; border-radius: 10px; ">\n          <ion-avatar item-start>\n            <img [src]="request.sender_detail.id==loggedId?request.receiver_detail.image:request.sender_detail.image">\n          </ion-avatar>\n          <h2>{{request.sender_detail.id==loggedId?request.receiver_detail.first_name+\' \'+request.receiver_detail.last_name:request.sender_detail.first_name+\' \'+request.sender_detail.last_name}}</h2>\n          <p>{{request.location}}</p>\n          <button ion-button color="secondary" style="height: 2.6rem;font-size: 1.1rem;" (click)="acceptRequest(request.id,true)">Accept Request</button>\n            \n                <button ion-button color="danger" style="height: 2.6rem;font-size: 1.1rem;" (click)="acceptRequest(request.id,false)" >Deny</button>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngIf="!isevents">\n        <div style="text-align: center; color: #efba00; font-size: 20px; opacity: 0.8; filter: alpha(opacity=50); background-color: #800020; border-radius: 20px; margin: 10px 50px 0px 50px;"> No Requests Found! </div>\n      </ion-list>\n   </ion-content>\n\n\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/recived-request/recived-request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], RecivedRequestPage);
    return RecivedRequestPage;
}());

//# sourceMappingURL=recived-request.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, loadingCtrl, toastCtrl, commonService, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.platform = platform;
        this.navParams = navParams;
        this.terms = {
            content_text: ''
        };
        this.showLoader();
        this.logged = localStorage.getItem('user') ? true : false;
        this.commonService.getTermCondition().subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            _this.loading.dismiss();
            if (result['Status']) {
                //if (typeof result['result'] == 'object' && result['result'].length > 0)
                _this.terms = result['result'];
                /* else {
                  this.presentToast('No Faq found.');
                } */
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    TermsPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    TermsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3>\n              <button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div  *ngIf="logged==true" class="img1">\n            <img src="assets/imgs/logo.jpg">\n          </div>\n          <div *ngIf="logged==false"  class="img1">\n              <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n            </div>\n          <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <div style="color:#990000; text-align: center"><h3>Terms & conditions</h3></div>\n  <p [innerHTML]="terms.content_text"></p>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 253;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		894,
		23
	],
	"../pages/add-review/add-review.module": [
		895,
		22
	],
	"../pages/change-password/change-password.module": [
		896,
		21
	],
	"../pages/contact/contact.module": [
		897,
		20
	],
	"../pages/event-details/event-details.module": [
		898,
		19
	],
	"../pages/event-friend/event-friend.module": [
		915,
		18
	],
	"../pages/event-member/event-member.module": [
		899,
		17
	],
	"../pages/event-waiting-list/event-waiting-list.module": [
		900,
		16
	],
	"../pages/events/events.module": [
		901,
		15
	],
	"../pages/faq-s/faq-s.module": [
		902,
		14
	],
	"../pages/forgot-password/forgot-password.module": [
		903,
		13
	],
	"../pages/login/login.module": [
		904,
		12
	],
	"../pages/my-tickets/my-tickets.module": [
		905,
		11
	],
	"../pages/past-events/past-events.module": [
		906,
		10
	],
	"../pages/payment/payment.module": [
		914,
		9
	],
	"../pages/pending-approval/pending-approval.module": [
		907,
		8
	],
	"../pages/profile/profile.module": [
		916,
		7
	],
	"../pages/recived-request/recived-request.module": [
		908,
		6
	],
	"../pages/send-enquiry/send-enquiry.module": [
		909,
		5
	],
	"../pages/signup/signup.module": [
		917,
		4
	],
	"../pages/terms/terms.module": [
		910,
		3
	],
	"../pages/ticket-holder-details/ticket-holder-details.module": [
		911,
		2
	],
	"../pages/ticket-registration/ticket-registration.module": [
		913,
		1
	],
	"../pages/view/view.module": [
		912,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 297;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_chat_auth_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_chat_chat_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_message_model__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_chat_message_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_chat_userf_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { User } from './../../models/user.model';



//import { Observable } from 'rxjs/Observable';

var ChatPage = /** @class */ (function () {
    function ChatPage(authService, chatService, messageService, navCtrl, navParams, platform, userService, commonService, keyboard) {
        var _this = this;
        this.authService = authService;
        this.chatService = chatService;
        this.messageService = messageService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.userService = userService;
        this.commonService = commonService;
        this.keyboard = keyboard;
        this.allmessages = [];
        this.dts = [];
        //this.keyboard.show();
        //alert("hello");
        this.chatStatus = true;
        this.loggedData = JSON.parse(localStorage.getItem('user'));
        //console.log("logged data=>", this.loggedData);
        this.loggedId = this.loggedData['userId'];
        this.sender = JSON.parse(localStorage.getItem('user'));
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__event_friend_event_friend__["a" /* EventFriendPage */]);
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
    ChatPage.prototype.ionViewWillLeave = function () {
        this.chatStatus = false;
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
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
                .subscribe(function (chat) {
                _this.chatService.updatePhoto(_this.chat1, chat.photo, _this.recipient.imageUrl);
            });
        }
        var doSubscription = function () {
            _this.viewMessages = _this.messageService.mapListKeys(_this.messages);
            _this.viewMessages
                .subscribe(function (messages) {
                _this.scrollToBottom();
                _this.dts = [];
                _this.allmessages = [];
                for (var i = 0; i < messages.length; i++) {
                    // console.log(messages[i]);
                    var date = new Date(messages[i].timestamp);
                    if (_this.dts.indexOf(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()) == -1) {
                        _this.dts.push(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
                        _this.allmessages.push({
                            $key: messages[i].$key,
                            text: messages[i].text,
                            timestamp: messages[i].timestamp,
                            userId: messages[i].userId,
                            date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
                        });
                    }
                    else {
                        _this.allmessages.push({
                            $key: messages[i].$key,
                            text: messages[i].text,
                            timestamp: messages[i].timestamp,
                            userId: messages[i].userId,
                            date: null
                        });
                    }
                    //console.log(this.allmessages);
                }
            });
        };
        this.messages = this.messageService
            .getMessages(this.sender.firebaseId, this.recipient.firebaseId);
        this.messages
            .valueChanges()
            .first()
            .subscribe(function (messages) {
            if (messages.length === 0) {
                //console.log(messages.length);
                _this.messages = _this.messageService
                    .getMessages(_this.recipient.firebaseId, _this.sender.firebaseId);
                doSubscription();
            }
            else {
                doSubscription();
            }
        });
        //});
    };
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
    ChatPage.prototype.chatStatusRefresh = function () {
        var _this = this;
        if (this.chatStatus) {
            this.commonService.chatEnable({ sender: this.loggedId, receiver: this.recipient.id, time: new Date().getTime() }).subscribe(function (result1) {
                setTimeout(function () {
                    _this.chatStatusRefresh();
                }, 10000);
            });
        }
    };
    // stopBubble(event) {
    //   event.preventDefault(); 
    //   event.stopPropagation(); //Stops event bubbling
    // }
    // ngAfterViewInit() {
    //   let el = this.sendMessage._elementRef.nativeElement;
    //   el
    // }
    ChatPage.prototype.sendMessage = function (newMessage) {
        // alert(this)
        // let el = this.sendButton._elementRef.nativeElement;
        // el.addEventListener('click', (event) => {
        //   event.preventDefault();
        //   event.stopPropagation(); //Stops event bubbling
        // });
        var _this = this;
        this.msg = newMessage;
        if (newMessage.trim()) {
            // console.log(newMessage);
            this.checkuser();
            var currentTimestamp_1 = __WEBPACK_IMPORTED_MODULE_8_firebase_app__["database"].ServerValue.TIMESTAMP;
            this.messageService.create(new __WEBPACK_IMPORTED_MODULE_5__models_message_model__["a" /* Message */](this.sender.firebaseId, newMessage, currentTimestamp_1), this.messages).then(function () {
                _this.chat1
                    .update({
                    lastMessage: newMessage,
                    timestamp: currentTimestamp_1
                });
                _this.chat2
                    .update({
                    lastMessage: newMessage,
                    timestamp: currentTimestamp_1
                });
            });
        }
    };
    ChatPage.prototype.scrollToBottom = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content._scroll) {
                _this.content.scrollToBottom(duration || 300);
            }
        }, 10);
    };
    ChatPage.prototype.checkuser = function () {
        var _this = this;
        //var notify
        //console.log("aaaaaaaa=>", this.recipient);
        //console.log("bbbbbb=>", this.loggedData['userId']);
        this.commonService.getChatStatus(this.loggedData['userId'], this.recipient['id']).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            _this.time = result['Msg']['receiver_status'];
            // this.reciverLasttime = this.convertime(this.time);
            //console.log("getchat status=>", typeof (Number(this.time)));
            var pastTime = new Date(Number(_this.time));
            //console.log(pastTime)
            var presentTime = new Date();
            if ((presentTime.getFullYear() - pastTime.getFullYear()) == 0) {
                if ((presentTime.getMonth() - pastTime.getMonth()) == 0) {
                    if ((presentTime.getDate() - pastTime.getDate()) == 0) {
                        if ((presentTime.getHours() - pastTime.getHours() == 0)) {
                            if (presentTime.getMinutes() - pastTime.getMinutes() <= 1) {
                                var diff = presentTime.getMinutes() - pastTime.getMinutes() + " min";
                                //console.log(diff)
                                //console.log("simple notification")
                            }
                            else {
                                //console.log("push notification");
                                _this.notification();
                            }
                        }
                        else {
                            _this.notification();
                        }
                    }
                    else {
                        _this.notification();
                    }
                }
                else {
                    _this.notification();
                }
            }
            else {
                _this.notification();
            }
            //  this.totaltime =this.currentTime-this.reciverLasttime;
            //  if(this.totaltime >= 10){
            //     alert("hello");
            //  }
        });
    };
    ChatPage.prototype.notification = function () {
        this.commonService.sendGCMNotification(this.recipient['id'], this.msg).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['status']) {
                //console.log(result);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sendButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Button */])
    ], ChatPage.prototype, "sendButton", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/chat/chat.html"*/'<ion-header>\n  \n  <!-- <custom-logged-header [title]="pageTitle" [user]="recipient"></custom-logged-header> -->\n  <ion-navbar>\n\n    <!-- <button ion-button menuToggle="user-menu" >\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <!-- <button>click</button> -->\n    <ion-title>\n      \n      <ion-item detail-none no-lines color="transparent" *ngIf="recipient; else titleTemplate">\n        <ion-avatar item-start>\n          <img [src]="recipient.imageUrl || \'assets/images/no-photo.jpg\'">\n        </ion-avatar>\n        {{ pageTitle }}\n      </ion-item>\n  \n      <ng-template #titleTemplate>\n        {{ pageTitle }}\n      </ng-template>\n      \n    </ion-title>\n  \n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="onLogout()">\n        <ion-icon name="exit"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <img src="./assets/imgs/background_img.jpg" class="background-Image"> -->\n  <!-- <div *ngFor="let users of user_list; let i=index">\n    <div *ngIf="users.hasRequest.is_accepted==0">\n    <message-box > waiting for the response </message-box>\n  </div>\n    <div *ngIf="users.hasRequest.is_accepted==1" > -->\n    \n    \n\n      <div *ngFor="let m of allmessages"  >\n      <label class="dates" style="border-radius: 10px; text-align:center;position: sticky; opacity: 0.8; " *ngIf=" m.date ">{{ m.timestamp | date:\' dd-MM-yyyy\' }}</label>\n      <div  [ngClass]="(m.userId === sender.firebaseId)?\'sender\':\'receiver\'"  >\n      <div class="text " [ngClass]="(m.userId === sender.firebaseId)?\'sender-background\':\'reciver-background\'">\n       <div [ngStyle]="{\'text-align\': (m.userId == sender.firebaseId) ? \'justify\' : \'justify\' }"><p  >{{ m.text }}</p></div>\n      <p class="timestamp" [ngStyle]="{\'text-align\': (m.userId == sender.firebaseId) ? \'right\' : \'left\' }">{{ m.timestamp | date:\' hh:mm a\' }}</p>\n     </div>\n    </div>\n </div>\n \n \n  <!-- <message-box   *ngFor="let m of viewMessages | async;" [message]="m" [isFromSender]="(m.userId === sender.firebaseId)" style="padding: 16px;"></message-box> -->\n  <!-- </div></div> -->\n\n  </ion-content>\n              \n\n<ion-footer>\n\n<ion-toolbar>\n    <ion-item  no-lines>\n    \n  \n   \n<!--     <ion-textarea  #msgInput rows="2" type=" messages " onkeyup="event" [disabled]="block" (keyup.enter)="sendMessage(newMessage); newMessage=\'\'" placeholder="{{ block?\'Your blocked\':\'Message...\'}}" [(ngModel)]="newMessage"></ion-textarea>\n     <button ion-button item-end  [disabled]="block" (click)="sendMessage(newMessage); newMessage=\'\'">\n     <ion-icon name="send"></ion-icon>\n    </button>  -->\n   <!--    <ion-input type=" messages "  onkeyup="event" [disabled]="block" (keyup.enter)="sendMessage(newMessage); newMessage=\'\'" placeholder="{{ block?\'Your blocked\':\'Message...\'}}" [(ngModel)]="newMessage" ></ion-input> -->\n   <div class="sender1">\n    <textarea id="inputID" type="text " rows="2" cols="40" class="text1" onkeyup="event" [disabled]="block" (keyup.enter)="sendMessage(newMessage); newMessage=\'\'" placeholder="{{ block?\'You are blocked\':\'Message..\'}}" [(ngModel)]="newMessage" ></textarea>\n\n    \n     <label for="inputID" class="send-chat" (click)="sendMessage(newMessage); newMessage=\'\'"> \n        <ion-icon name="send"></ion-icon>    \n     </label>                                                                                                                                                                                             \n     \n    \n    </div>   \n   </ion-item>\n   \n  </ion-toolbar>\n\n </ion-footer>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_chat_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__service_chat_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_6__service_chat_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__service_chat_userf_service__["a" /* UserfService */],
            __WEBPACK_IMPORTED_MODULE_9__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ValidationService = /** @class */ (function () {
    function ValidationService() {
        console.log('Hello ServicesProvider Provider');
    }
    // user and admin login
    ValidationService.prototype.login = function (login) {
        var error = { email: '', password: '' };
        var err = false;
        if (!login.email) {
            error.email = 'Email Address is required.';
            err = true;
        }
        else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(login.email)) {
            error.email = 'Invalid email Address.';
            err = true;
        }
        if (!login.password) {
            error.password = 'Password is required.';
            err = true;
        }
        else if (login.password.length < 8) {
            error.password = 'Your password must contain 8 or more characters.';
            err = true;
        }
        return { err: err, errors: error };
    };
    ValidationService.prototype.forgot = function (forgot) {
        var error = { email: '' };
        var err = false;
        if (!forgot.email) {
            error.email = 'Email Address is required.';
            err = true;
        }
        else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(forgot.email)) {
            error.email = 'Invalid email Address.';
            err = true;
        }
        return { err: err, errors: error };
    };
    // sendOTP1(user: any) {
    //     let error= { phone_reg: '' };
    //     let err = false;
    // if(!user.phone_reg){
    //     error.phone_reg ='New Mobile No. is required';
    //     err = true;
    // }
    // else if (user.phone_reg.length > 12 ){
    //     error.phone_reg = 'New Mobile No. is invalid.';
    //     err = true;
    // }
    // return { err: err, errors: error };
    // }
    ValidationService.prototype.update = function (user) {
        var error = { about_us: "", phone_reg: "", otp_code: "", account_number: "", address: "", city: "", company_address: "", company_name: "", country: "", dob: "", email: "", encription: "", facebookId: "", find_us: "", first_name: "", forgot: "", gender: "", googlePlusId: "", hear_aboutus: "", image: "", imageUrl: "", imageUrlThumb: "assets/imgs/guest.png", interest1: "", interest2: "", is_newsletter: "", last_login_date: "", last_name: "", latitude: "", loginType: "", longitude: "", marrital_status: "", postcode: "", question_answer: "", sort_code: "", state: "", status: "", timestamp: "", title: "", type: "C", updated: "", website: "" };
        var err = false;
        if (!user.title) {
            error.title = 'Title is required.';
            err = true;
        }
        if (!user.city) {
            error.city = 'city is required.';
            err = true;
        }
        if (!user.country) {
            error.country = 'country is required.';
            err = true;
        }
        if (!user.first_name) {
            error.first_name = 'First Name is required.';
            err = true;
        }
        else if (user.first_name.length > 30) {
            error.first_name = ' First Name Should Be Minimum 30 Character.';
            err = true;
        }
        if (!user.last_name) {
            error.last_name = 'Last Name is required.';
            err = true;
        }
        else if (user.last_name.length > 30) {
            error.last_name = ' Last Name Should Be Minimum 30 Character.';
            err = true;
        }
        if (!user.dob) {
            error.dob = 'Date of Birth is required.';
            err = true;
        }
        if (!user.gender) {
            error.gender = 'Gender is required.';
            err = true;
        }
        if (!user.marrital_status) {
            error.marrital_status = 'Marital Status is required.';
            err = true;
        }
        // if (!user.address) {
        //     error.address = 'Address is required.';
        //     err = true;
        // }
        if (!user.postcode) {
            error.postcode = 'Postcode is required.';
            err = true;
        }
        // if (!user.phone) {
        //     error.phone = 'Mobile No. is required.';
        //     err = true;
        // }
        // else if (user.phone.length < 9) {
        //     error.phone = 'Mobile No. is invalid.';
        //     err = true;
        // }
        if (!user.interest1) {
            error.interest1 = 'First Interest is required.';
            err = true;
        }
        if (!user.interest2) {
            error.interest2 = 'Second Interest is required.';
            err = true;
        }
        if (!user.about_us) {
            error.about_us = 'About me is required.';
            err = true;
        }
        else if (user.about_us.length < 150) {
            error.about_us = 'About me charactor must be greater than 150.';
            err = true;
        }
        if (user.phone_reg) {
            if (user.phone_reg.length < 9) {
                error.phone_reg = 'New Mobile No. is invalid.';
                err = true;
            }
            else if (user.phone_reg.length > 12) {
                error.phone_reg = 'New Mobile No. is Invalid.';
                err = true;
            }
            if (!user.otp_code) {
                error.otp_code = 'OTP is required.';
                err = true;
            }
        }
        if (!user.email) {
            error.email = 'Email Address is required.';
            err = true;
        }
        else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
            error.email = 'Invalid email Address.';
            err = true;
        }
        return { err: err, errors: error };
    };
    ValidationService.prototype.signup = function (user) {
        var error = { about_us: "", terms_confirmed: "",
            postcode: "", address: "", city: "", country: "", dob: "", email: "", first_name: "", last_name: "", gender: "", hear_aboutus: "", marrital_status: "", phone: "", title: "", password: "", conf_password: "", };
        var err = false;
        if (!user.title) {
            error.title = 'Title is required.';
            err = true;
        }
        if (!user.city) {
            error.city = 'City is required.';
            err = true;
        }
        if (!user.country) {
            error.country = 'Country is required.';
            err = true;
        }
        if (!user.terms_confirmed) {
            error.terms_confirmed = 'Please agree to the terms and conditions.';
            err = true;
        }
        if (!user.first_name) {
            error.first_name = 'First Name is required.';
            err = true;
        }
        else if (user.first_name.length > 30) {
            error.first_name = ' First Name Should Be Minimum 30 Character.';
            err = true;
        }
        if (!user.last_name) {
            error.last_name = 'Last Name is required.';
            err = true;
        }
        else if (user.last_name.length > 30) {
            error.last_name = ' Last Name Should Be Minimum 30 Character.';
            err = true;
        }
        if (!user.dob) {
            error.dob = 'Date of Birth is required.';
            err = true;
        }
        else if (this.get_age(new Date(user.dob), new Date()) < 18) {
            error.dob = 'Members must be 18 years old or above.';
            err = true;
        }
        if (!user.gender) {
            error.gender = 'Gender is required.';
            err = true;
        }
        if (!user.marrital_status) {
            error.marrital_status = 'Marital Status is required.';
            err = true;
        }
        if (!user.postcode) {
            error.postcode = 'Postcode is required.';
            err = true;
        }
        else if (!/^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/.test(user.postcode)) {
            error.postcode = 'Invalid Postcode.';
            err = true;
        }
        // if (!user.otp_code) {
        //     error.otp_code = 'Mobile not confirmed - Click GET CODE!';
        //     err = true;
        // }
        if (!user.password) {
            error.password = 'Password is required.';
            err = true;
        }
        else if (user.password.length < 8) {
            error.password = 'Your password must contain 8 or more characters.';
            err = true;
        }
        if (user.password !== user.conf_password) {
            error.conf_password = 'Enter the same password.';
            err = true;
        }
        // if (!user.phone) {
        //     error.phone = 'Mobile No. is required.';
        //     err = true;
        // }
        // else if (user.phone.length < 12) {
        //     error.phone = 'Mobile No. is invalid.';
        //     err = true;
        // }
        if (!user.hear_aboutus) {
            error.hear_aboutus = 'Hear about us is required.';
            err = true;
        }
        if (!user.email) {
            error.email = 'Email Address is required.';
            err = true;
        }
        else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
            error.email = 'Invalid email Address.';
            err = true;
        }
        return { err: err, errors: error };
    };
    ValidationService.prototype.get_age = function (born, now) {
        var birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
        if (now >= birthday)
            return now.getFullYear() - born.getFullYear();
        else
            return now.getFullYear() - born.getFullYear() - 1;
    };
    ValidationService.prototype.addReview = function (review) {
        var error = {
            location_id: '',
            user_id: '',
            description: '',
            rating: ''
        };
        var err = false;
        if (!review.location_id) {
            error.location_id = 'Location is required.';
            err = true;
        }
        if (!review.description) {
            error.description = 'Description is required.';
            err = true;
        }
        if (!review.rating) {
            error.rating = 'Rating is required.';
            err = true;
        }
        if (!review.user_id) {
            error.user_id = 'User is logged out, Please login again.';
            err = true;
        }
        return { err: err, errors: error };
    };
    ValidationService.prototype.ticketRegistration = function (user) {
        var error = {
            title: '',
            first_name: '',
            last_name: '',
            code: '',
            // dob: '',
            gender: '',
            email: '',
            phone: '',
            qty: '',
            agree: ''
        };
        var err = false;
        if (!user.title) {
            error.title = 'Title is required.';
            err = true;
        }
        if (!user.agree) {
            error.agree = 'Please agree to the terms and conditions.';
            err = true;
        }
        if (!user.first_name) {
            error.first_name = 'First Name is required.';
            err = true;
        }
        if (!user.last_name) {
            error.last_name = 'Last Name is required.';
            err = true;
        }
        // if (!user.dob) {
        //     error.dob = 'Date of Birth is required.';
        //     err = true;
        // }
        if (!user.gender) {
            error.gender = 'Gender is required.';
            err = true;
        }
        if (!user.qty) {
            error.qty = 'Quantity is required.';
            err = true;
        }
        if (!user.phone) {
            error.phone = 'Mobile No. is required.';
            err = true;
        }
        else if (user.phone.length < 9) {
            error.phone = 'Mobile No. is invalid.';
            err = true;
        }
        if (!user.email) {
            error.email = 'Email Address is required.';
            err = true;
        }
        else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
            error.email = 'Invalid email Address.';
            err = true;
        }
        return { err: err, errors: error };
    };
    ValidationService.prototype.ticketHolders = function (tickes) {
        var errors = [];
        var err = false;
        if (tickes)
            for (var i = 0; i < tickes.length; i++) {
                var error = {
                    first_name: '',
                    last_name: '',
                    gender: '',
                    email: '',
                };
                if (!tickes[i].first_name) {
                    error.first_name = 'First Name is required.';
                    err = true;
                }
                if (!tickes[i].last_name) {
                    error.last_name = 'Last Name is required.';
                    err = true;
                }
                if (!tickes[i].gender) {
                    error.gender = 'Gender is required.';
                    err = true;
                }
                if (!tickes[i].email) {
                    error.email = 'Email Address is required.';
                    err = true;
                }
                else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(tickes[i].email)) {
                    error.email = 'Invalid email Address.';
                    err = true;
                }
                errors.push(error);
            }
        return { err: err, errors: errors };
    };
    ValidationService.prototype.sendEnquiry = function (user) {
        var error = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };
        var err = false;
        if (!user.name) {
            error.name = 'Name is required.';
            err = true;
        }
        if (!user.email) {
            error.email = 'Email Address is required.';
            err = true;
        }
        else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
            error.email = 'Invalid email Address.';
            err = true;
        }
        if (!user.subject) {
            error.subject = 'Subject is required.';
            err = true;
        }
        if (!user.message) {
            error.message = 'Message is required.';
            err = true;
        }
        return { err: err, errors: error };
    };
    ValidationService.prototype.changePassword = function (user) {
        var error = { old_password: "", password: "", repassword: "" };
        var err = false;
        if (!user.old_password) {
            error.old_password = 'Old Password is Required.';
            err = true;
        }
        if (!user.password) {
            error.password = 'Password is required.';
            err = true;
        }
        else if (user.password.length < 6) {
            error.password = 'Password must have 6 or more characters.';
            err = true;
        }
        if (!user.repassword) {
            error.repassword = 'Repeat Password is required.';
            err = true;
        }
        if (user.password !== user.repassword) {
            error.repassword = 'Enter the same password.';
            err = true;
        }
        return { err: err, errors: error };
    };
    ValidationService.prototype.acceptRequest = function (requests) {
        var error = {
            user_id: '',
            request_id: ''
        };
        var err = false;
        if (!requests.user_id) {
            error.user_id = 'User ID is required.';
            err = true;
        }
        if (!requests.request_id) {
            error.user_id = 'Request ID is required.';
            err = true;
        }
        return { err: err, errors: error };
    };
    ValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(userId, text, timestamp) {
        this.userId = userId;
        this.text = text;
        this.timestamp = timestamp;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(20);

var BaseComponent = /** @class */ (function () {
    function BaseComponent(alertCtrl, authService, app, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.app = app;
        this.menuCtrl = menuCtrl;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.navCtrl = this.app.getActiveNavs()[0];
    };
    BaseComponent.prototype.onLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: 'Do you want to quit?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.authService.logout()
                            .then(function () {
                            localStorage.removeItem('user');
                            _this.events.publish("user:logout", JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {
                                imageUrlThumb: 'assets/imgs/guest.png',
                                first_name: 'Guest',
                                last_name: ''
                            }, Date.now());
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'forward' });
                        });
                    }
                },
                {
                    text: 'No'
                }
            ]
        }).present();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, username, email, photo) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.photo = photo;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_events_events__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_change_password_change_password__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_event_member_event_member__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_recived_request_recived_request__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pending_approval_pending_approval__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_event_friend_event_friend__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_past_events_past_events__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_event_waiting_list_event_waiting_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_tickets_my_tickets__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_faq_s_faq_s__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_review_add_review__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_event_details_event_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_ticket_holder_details_ticket_holder_details__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_send_enquiry_send_enquiry__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_ticket_registration_ticket_registration__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_keyboard__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__service_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_image_picker__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_base64__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_storage__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_file__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_transfer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_path__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_crop__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_in_app_browser__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_network__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_push__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_angularfire2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angularfire2_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_angularfire2_database__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ionic_img_viewer__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__service_chat_auth_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pipes_capitalize_pipe__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_chat_chat__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__service_chat_chat_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__service_chat_message_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__service_chat_userf_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_custom_logged_header_custom_logged_header_component__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_message_box_message_box_component__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_progress_bar_progress_bar_component__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_user_info_user_info_component__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_user_menu_user_menu_component__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_paypal__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_view_view__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































//CHAT Import Firebase start

















//CHAT Import Firebase end
var firebaseAppConfig = {
    apiKey: "AIzaSyDu0g3oimmw_FOcu0EnF0RGrUGKR2SFCxo",
    authDomain: "meetmatchandgo-27e9f.firebaseapp.com",
    databaseURL: "https://meetmatchandgo-27e9f.firebaseio.com",
    projectId: "meetmatchandgo-27e9f",
    storageBucket: "meetmatchandgo-27e9f.appspot.com",
    messagingSenderId: "676370397397"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_member_event_member__["a" /* EventMemberPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_recived_request_recived_request__["a" /* RecivedRequestPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pending_approval_pending_approval__["a" /* PendingApprovalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_event_friend_event_friend__["a" /* EventFriendPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_past_events_past_events__["a" /* PastEventsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_waiting_list_event_waiting_list__["a" /* EventWaitingListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_faq_s_faq_s__["a" /* FaqSPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_event_details_event_details__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_ticket_holder_details_ticket_holder_details__["a" /* TicketHolderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_send_enquiry_send_enquiry__["a" /* SendEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_51__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_52__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_56__components_custom_logged_header_custom_logged_header_component__["a" /* CustomLoggedHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_message_box_message_box_component__["a" /* MessageBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_user_menu_user_menu_component__["a" /* UserMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_user_info_user_info_component__["a" /* UserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_62__pages_view_view__["a" /* ViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-review/add-review.module#AddReviewPageModule', name: 'AddReviewPage', segment: 'add-review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-details/event-details.module#EventDetailsPageModule', name: 'EventDetailsPage', segment: 'event-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-member/event-member.module#EventMemberPageModule', name: 'EventMemberPage', segment: 'event-member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-waiting-list/event-waiting-list.module#EventWaitingListPageModule', name: 'EventWaitingListPage', segment: 'event-waiting-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq-s/faq-s.module#FaqSPageModule', name: 'FaqSPage', segment: 'faq-s', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-tickets/my-tickets.module#MyTicketsPageModule', name: 'MyTicketsPage', segment: 'my-tickets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/past-events/past-events.module#PastEventsPageModule', name: 'PastEventsPage', segment: 'past-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending-approval/pending-approval.module#PendingApprovalPageModule', name: 'PendingApprovalPage', segment: 'pending-approval', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recived-request/recived-request.module#RecivedRequestPageModule', name: 'RecivedRequestPage', segment: 'recived-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send-enquiry/send-enquiry.module#SendEnquiryPageModule', name: 'SendEnquiryPage', segment: 'send-enquiry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket-holder-details/ticket-holder-details.module#TicketHolderDetailsPageModule', name: 'TicketHolderDetailsPage', segment: 'ticket-holder-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket-registration/ticket-registration.module#TicketRegistrationPageModule', name: 'TicketRegistrationPage', segment: 'ticket-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-friend/event-friend.module#EventFriendPageModule', name: 'EventFriendPage', segment: 'event-friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_37__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__MMG',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_46_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAppConfig),
                __WEBPACK_IMPORTED_MODULE_47_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_48_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_49_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_event_member_event_member__["a" /* EventMemberPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_recived_request_recived_request__["a" /* RecivedRequestPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pending_approval_pending_approval__["a" /* PendingApprovalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_event_friend_event_friend__["a" /* EventFriendPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_past_events_past_events__["a" /* PastEventsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_event_waiting_list_event_waiting_list__["a" /* EventWaitingListPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_faq_s_faq_s__["a" /* FaqSPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_event_details_event_details__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_ticket_holder_details_ticket_holder_details__["a" /* TicketHolderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_send_enquiry_send_enquiry__["a" /* SendEnquiryPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_view_view__["a" /* ViewPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_32__service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_33__service_validation_service__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_34__service_common_service__["a" /* CommonService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_61__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_50__service_chat_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_53__service_chat_chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_54__service_chat_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_55__service_chat_userf_service__["a" /* UserfService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(120);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(afAuth, http) {
        var _this = _super.call(this) || this;
        _this.afAuth = afAuth;
        _this.http = http;
        console.log('Hello Auth Provider');
        return _this;
    }
    AuthService.prototype.createAuthUser = function (user) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .catch(this.handlePromiseError);
    };
    AuthService.prototype.signinWithEmail = function (user) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .then(function (authUser) {
            return authUser != null;
        }).catch(this.handlePromiseError);
    };
    AuthService.prototype.getUserByEmail = function (email) {
        return this.afAuth.auth.fetchProvidersForEmail(email)
            .then(function (authUser) {
            return authUser != null;
        }).catch(this.handlePromiseError);
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.afAuth
                    .authState
                    .first()
                    .subscribe(function (authUser) {
                    (authUser) ? resolve(true) : reject(false);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserService = /** @class */ (function () {
    function UserService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.endpoint_url = 'https://www.meetmatchandgo.com/api/';
        this.http = http;
        console.log('User ServicesProvider Provider');
        if (localStorage.getItem('user')) {
            this.logged = true;
        }
    }
    // user and admin login
    UserService.prototype.login = function (login) {
        //console.log(this.commonService.build_query(login,0,''));
        return this.http.get(this.endpoint_url + 'login?' + this.commonService.build_query(login, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService.prototype.forgot = function (forgot) {
        return this.http.get(this.endpoint_url + 'forgotPassword?' + this.commonService.build_query(forgot, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService.prototype.setFirebaseUuid = function (user) {
        return this.http.get(this.endpoint_url + 'updateFirebaseId?' + this.commonService.build_query(user, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService.prototype.getLoggedUserData = function (id) {
        return this.http.get(this.endpoint_url + 'loggedUserData?id=' + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService.prototype.update = function (user) {
        console.log(this.commonService.build_query(user, 0, ''));
        return this.http.get(this.endpoint_url + 'profileUpdate?' + this.commonService.build_query(user, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService.prototype.signup = function (user) {
        return this.http.get(this.endpoint_url + 'signup?' + this.commonService.build_query(user, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService.prototype.checkUserEmails = function (email) {
        return this.http.get(this.endpoint_url + 'checkUserEmail?' + email).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService.prototype.sendOTP = function (user) {
        return this.http.get(this.endpoint_url + 'validateMobileCode?' + this.commonService.build_query(user, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService.prototype.changePassword = function (user) {
        console.log(this.commonService.build_query(user, 0, ''));
        return this.http.get(this.endpoint_url + 'changePassword?' + this.commonService.build_query(user, 0, '')).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res; }));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__common_service__["a" /* CommonService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticket_holder_details_ticket_holder_details__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_details_event_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TicketRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketRegistrationPage = /** @class */ (function () {
    //event: any;
    function TicketRegistrationPage(navCtrl, navParams, commonService, loadingCtrl, toastCtrl, alertCtrl, platform, validation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.validation = validation;
        this.user = {
            id: '',
            title: '',
            first_name: '',
            last_name: '',
            // dob: '',
            gender: '',
            email: '',
            code: '',
            phone: '',
            qty: '',
            agree: '',
            event_id: '',
            discount: ''
        };
        this.errors = {
            title: '',
            first_name: '',
            last_name: '',
            dob: '',
            gender: '',
            code: '',
            email: '',
            phone: '',
            qty: '',
            agree: ''
        };
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
        this.user.id = this.user['userId'];
        this.user.event_id = navParams.get('event_id');
        if (navParams.get('event_id')) {
            this.showLoader();
            this.commonService.getEventDetail(navParams.get('event_id')).subscribe(function (result1) {
                var result = JSON.parse(result1['_body']);
                _this.loading.dismiss();
                if (result['Status']) {
                    _this.user.code = result['result']['voucher'];
                    _this.eventname = result['result']['event_type'];
                    //console.log(this.event['voucher']);
                }
            });
        }
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed'); 
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__event_details_event_details__["a" /* EventDetailsPage */], { event_id: navParams.get('event_id') });
            //backAction();
        }, 2);
    }
    TicketRegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketRegistrationPage');
    };
    TicketRegistrationPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    // ticketRegistration(){
    //   let valid = this.validation.ticketRegistration(this.user);
    //   this.errors = valid.errors;
    //   if (!valid.err) {
    //     //console.log("login credentials", this.user);
    //     if (this.user.code){
    //       this.showLoader();
    //       this.commonService.validateCode(this.user).subscribe((result1) => {
    //         let result = JSON.parse(result1['_body']);
    //         this.loading.dismiss();
    //         if (result['Status'] == true) {
    //           this.user.discount = result['discount'];
    //           //console.log(JSON.stringify(this.user));
    //           this.navCtrl.setRoot(TicketHolderDetailsPage,{userDetail: JSON.stringify(this.user)});
    //         }
    //         else{
    //           this.errors.code = result['Msg'].toString();
    //         }
    //       });
    //     }
    //     else{
    //       //console.log(JSON.stringify(this.user));
    //       this.navCtrl.setRoot(TicketHolderDetailsPage, { userDetail: JSON.stringify(this.user) });
    //     }
    //   }
    // }
    TicketRegistrationPage.prototype.ticketRegistration = function () {
        var _this = this;
        var valid = this.validation.ticketRegistration(this.user);
        this.errors = valid.errors;
        if (this.user.phone == '0000000000') {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'Please update your mobile and hobbies within your profile to book events',
                buttons: [{
                        text: 'ok',
                        role: 'ok',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* ProfilePage */]);
                        }
                    }]
            });
            alert_1.present();
        }
        if (!valid.err) {
            //  console.log("login credentials", this.user);
            if (this.user.code) {
                this.showLoader();
                this.commonService.validateCode(this.user).subscribe(function (result1) {
                    var result = JSON.parse(result1['_body']);
                    _this.loading.dismiss();
                    if (result['Status'] == true) {
                        _this.user.discount = result['discount'];
                        //console.log(JSON.stringify(this.user));
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__ticket_holder_details_ticket_holder_details__["a" /* TicketHolderDetailsPage */], { userDetail: JSON.stringify(_this.user) });
                    }
                    else {
                        _this.errors.code = result['Msg'].toString();
                    }
                });
            }
            else {
                //console.log(JSON.stringify(this.user));
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__ticket_holder_details_ticket_holder_details__["a" /* TicketHolderDetailsPage */], { userDetail: JSON.stringify(this.user) });
            }
        }
        else {
            this.errors = valid.errors;
            //  this.navCtrl.setRoot(TicketRegistrationPage);
        }
    };
    TicketRegistrationPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    TicketRegistrationPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TicketRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-ticket-registration',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/ticket-registration/ticket-registration.html"*/'<!--\n  Generated template for the TicketRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1" >\n            <img  src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons  end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card class="card_io">\n\n    <ion-card-header>\n        <div style="color:#fff; font-weight:bold;text-align: center; display: block;" > {{eventname}} </div>\n     <font style="color:#efba00; font-weight:bold;text-align: center; display: block;"> TICKET REGISTRATION</font>\n     \n    </ion-card-header>\n  \n    <ion-card-content>\n        <form id="home-form5" class="list">\n          <ion-item>\n              <ion-label interface="action-sheet" stacked> Select Title</ion-label>\n              <!-- <ion-input style=" text-transform: capitalize;" type="text" placeholder=" Title" name="title" [(ngModel)]="user.title" interface="action-sheet"></ion-input> -->\n              <ion-select interface="action-sheet" name="title" [(ngModel)]="user.title" placeholder="Select Title" style="padding-left: 10px;"> \n                <ion-option value="Mr">Mr</ion-option>\n                <ion-option value="Mrs">Mrs</ion-option>\n                <ion-option value="Ms">Ms</ion-option>\n                <ion-option value="Miss">Miss</ion-option>\n              </ion-select> \n            </ion-item>\n            <label class="error" *ngIf="errors.title">{{errors.title}}</label>\n            <ion-item>\n                <ion-label interface="action-sheet" stacked> First Name</ion-label>\n                <ion-input type="text" placeholder=" First Name" name="first_name" [(ngModel)]="user.first_name" interface="action-sheet"></ion-input>\n              </ion-item>\n              <label class="error" *ngIf="errors.first_name">{{errors.first_name}}</label>\n              <ion-item>\n                  <ion-label interface="action-sheet" stacked> Last Name</ion-label>\n                <ion-input type="text" placeholder=" Last Name " name="last_name" [(ngModel)]="user.last_name" interface="action-sheet"></ion-input>\n              </ion-item>\n              <label class="error" *ngIf="errors.last_name">{{errors.last_name}}</label>\n              <!-- <ion-item>\n                  <ion-label interface="action-sheet" stacked> Date of birth</ion-label>\n                  <ion-input type="text" readonly placeholder=" Date of birth" name="dob" [(ngModel)]="user.dob" style="padding-left: 10px;"></ion-input>\n                </ion-item>\n                <label class="error" *ngIf="errors.dob">{{errors.dob}}</label> -->\n\n                <!--for disable the choose gender==style="pointer-events:none;"== -->\n                <ion-item >\n                    <ion-label interface="action-sheet" stacked> Gender</ion-label>\n                    <ion-select  interface="action-sheet" placeholder=" Gender" name="gender" [(ngModel)]="user.gender" style="padding-left: 10px;"> \n                      <ion-option value="M">Male</ion-option>\n                      <ion-option value="F">Female</ion-option>\n                    </ion-select>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.gender">{{errors.gender}}</label>\n                  <ion-item>\n                    <ion-label interface="action-sheet" stacked> Email Address</ion-label>\n                    <ion-input type="email" readonly placeholder=" Email Address " name="email" [(ngModel)]="user.email" interface="action-sheet"></ion-input>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.email">{{errors.email}}</label>\n                  <ion-item style="pointer-events:none;">\n                    <ion-label interface="action-sheet" stacked> Mobile Number</ion-label>\n                    <ion-input type="number" placeholder=" Mobile Number " name="phone" [(ngModel)]="user.phone" interface="action-sheet"></ion-input>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.phone">{{errors.phone}}</label>\n                  <ion-item>\n                    <ion-input type="text" placeholder="Promo/Voucher Code " name="code" [(ngModel)]="user.code" interface="action-sheet"></ion-input>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.code">{{errors.code}}</label>\n                  <ion-item>\n                    <ion-select interface="action-sheet" placeholder="Quantity of tickets" name="qty" [(ngModel)]="user.qty" > \n                      <ion-option value="1">1</ion-option>\n                      <ion-option value="2">2</ion-option>\n                      <ion-option value="3">3</ion-option>\n                      <ion-option value="4">4</ion-option>\n                      <ion-option value="5">5</ion-option>\n                      <ion-option value="6">6</ion-option>\n                      <ion-option value="7">7</ion-option>\n                      <ion-option value="8">8</ion-option>\n                      <ion-option value="9">9</ion-option>\n                      <ion-option value="10">10</ion-option>\n                      <ion-option value="11">11</ion-option>\n                      <ion-option value="12">12</ion-option>\n                      <ion-option value="13">13</ion-option>\n                      <ion-option value="14">14</ion-option>\n                      <ion-option value="15">15</ion-option>\n                      <ion-option value="16">16</ion-option>\n                      <ion-option value="17">17</ion-option>\n                      <ion-option value="18">18</ion-option>\n\n                    </ion-select>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.qty">{{errors.qty}}</label>\n                  <ion-item>\n                    <ion-label text-wrap> I agree to the MEETMATCHANDGO terms and conditions and that all ticket holders are over 18 years old.</ion-label>\n                    <ion-checkbox color="dark" name="agree" [(ngModel)]="user.agree"></ion-checkbox>\n                  </ion-item>\n                  <label class="error" *ngIf="errors.agree">{{errors.agree}}</label>\n\n              \n                 <button ion-button round icon-star (click)="ticketRegistration()"> NEXT</button>   \n                </form>\n              \n              </ion-card-content>\n            \n            </ion-card>\n        \n      </ion-content>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/ticket-registration/ticket-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__service_validation_service__["a" /* ValidationService */]])
    ], TicketRegistrationPage);
    return TicketRegistrationPage;
}());

//# sourceMappingURL=ticket-registration.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ticket_registration_ticket_registration__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_chat_auth_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_chat_userf_service__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, user_service, authService, UserfService, events, validation, alertCtrl, toastCtrl, platform, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user_service = user_service;
        this.authService = authService;
        this.UserfService = UserfService;
        this.events = events;
        this.validation = validation;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.user = {
            email: '',
            password: ''
        };
        this.errors = {
            email: '',
            password: ''
        };
        this.event_id = this.navParams.get('event_id') ? this.navParams.get('event_id') : 0;
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPasswordPage */], {}, { animate: true, direction: 'forward' });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], { event_id: this.event_id }, { animate: true, direction: 'forward' });
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var valid = this.validation.login(this.user);
        if (!valid.err) {
            this.showLoader();
            // console.log("login credentials", this.user);
            this.user_service.login(this.user).subscribe(function (result1) {
                //console.log(result1);
                var result = JSON.parse(result1['_body']);
                //console.log(result);
                if (result['Status']) {
                    result['userdetail']['userId'] = result['userId'];
                    if (!result['userdetail']['firebaseId']) {
                        _this.authService.createAuthUser({
                            email: _this.user.email,
                            password: _this.user.password
                        }).then(function (authUser) {
                            var uuid = authUser.uid;
                            _this.user_service.setFirebaseUuid({ id: result['userdetail']['userId'], firebaseId: uuid }).subscribe(function (result2) {
                                var result21 = JSON.parse(result2['_body']);
                                if (result21['Status']) {
                                    result['userdetail'] = result21['Msg'];
                                    //console.log(result['userdetail']['userId']);
                                    // let alert = this.alertCtrl.create({
                                    //   title: 'Welcome ',
                                    //   subTitle: result['userdetail']['first_name'],
                                    //   buttons: ['Dismiss']
                                    // });
                                    // alert.present();
                                    _this.presentToast("   Welcome " + result['userdetail']['first_name'], "middel");
                                    result['userdetail']['userId'] = result['userId'];
                                    localStorage.setItem('user', JSON.stringify(result['userdetail']));
                                    _this.presentToast("You're loggedin successfully!.", "bottom");
                                    _this.loading.dismiss();
                                    _this.events.publish("user:login", result['userdetail'], Date.now());
                                    setTimeout(function () {
                                        if (_this.event_id) {
                                            //this.alertCtrl.Dismissed();
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */], { event_id: _this.event_id }, { animate: true, direction: 'forward' });
                                        }
                                        else {
                                            //this.alertCtrl.Dismissed();
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], {}, { animate: true, direction: 'forward' });
                                        }
                                    }, 1000);
                                }
                            });
                        }).catch(function (error) {
                            console.log(error);
                            _this.loading.dismiss();
                            _this.presentToast(error, "bottom");
                        });
                    }
                    else {
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
                        _this.presentToast("    Welcome " + result['userdetail']['first_name'], "middle");
                        _this.presentToast("You're loggedin successfully!.", "bottom");
                        _this.loading.dismiss();
                        _this.events.publish("user:login", result['userdetail'], Date.now());
                        setTimeout(function () {
                            if (_this.event_id) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */], { event_id: _this.event_id }, { animate: true, direction: 'forward' });
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */], {}, { animate: true, direction: 'forward' });
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
                    _this.loading.dismiss();
                    _this.presentToast('Email or Password is Incorrect', "bottom");
                    // this.presentToast(result['Msg']);
                    // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                }
            });
        }
        else {
            this.errors = valid.errors;
        }
    };
    LoginPage.prototype.presentToast = function (msg, toastposition) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: toastposition,
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            //console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <!-- <ion-grid style="align-items: normal;" >\n            <ion-row>\n              <ion-col col-3><button ion-button menuToggle>\n                  <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-6><div style="width: 100% !important;\n                margin-right: 15% !important;\n                margin-top: -5px;">\n                  <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n                </div>\n              </ion-col>\n              <ion-col col-3>\n                <button  ion-button (click)="opnchat()" style="background: transparent;\n                box-shadow: none;\n                margin-left: 20px;\n                margin-top: 0px;\n                color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> -->\n          <button ion-button menuToggle>\n              <ion-icon name="menu"> </ion-icon>\n            </button>\n            <div class="img1">\n              <img style="margin-right: 15%;" src="assets/imgs/logo.jpg">\n            </div>\n            <!-- <ion-buttons *ngIf="logged==true" end>\n                <button ion-button icon-only (click)="opnchat()">\n                  <ion-icon name="chatbubbles"></ion-icon>\n                </button>\n              </ion-buttons> -->\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n    <ion-card class="card_io">\n      <form>\n\n        <ion-card-header>\n         <font color="#efba00">Login Here</font>\n        </ion-card-header>\n      \n        <ion-card-content>\n          <ion-item>\n              <ion-label interface="action-sheet" stacked style="padding-left: 10px;"> Email Address</ion-label>\n            <ion-input type="email" placeholder=" " name="email" [(ngModel)]="user.email" interface="action-sheet" style="padding-left: 7px;" required></ion-input>\n            \n          </ion-item>\n          <label class="error" *ngIf="errors.email">{{errors.email}}</label>\n          <ion-item>\n              <ion-label interface="action-sheet" stacked style="padding-left: 10px;"> Password</ion-label>\n            <ion-input type="password" placeholder=" " name="password" [(ngModel)]="user.password" interface="action-sheet" required style="padding-left: 7px;"></ion-input>\n          </ion-item>\n          <label class="error" *ngIf="errors.password">{{errors.password}}</label>\n          <br>\n          <a href="#" style="color: #efba00; text-align:center;" (click)="forgot()">Forgot Password?</a>           \n          &nbsp;\n\n          <a href="#" style="color: #efba00; text-align:center;" (click)="signup()">Register</a>\n\n        </ion-card-content>\n        <button ion-button round icon-start (click)="login()"> LOGIN</button>\n        <!-- <button ion-button round icon-start (click)="signup()"> SIGN UP</button> -->\n      </form>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__service_chat_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__service_chat_userf_service__["a" /* UserfService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__service_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_validation_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
* Generated class for the ProfilePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, user_service, validation, imagePicker, base64, camera, events, transfer, platform, file, filePath, actionSheetCtrl, alertCtrl, toastCtrl, commonService, loadingCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user_service = user_service;
        this.validation = validation;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.camera = camera;
        this.events = events;
        this.transfer = transfer;
        this.platform = platform;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.user = {
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
        this.changeNumber = false;
        this.lastImage = null;
        this.footer = false;
        this.timeLeft = 30;
        this.timeLeft1 = 30;
        this.getauth = true;
        var loggedData = JSON.parse(localStorage.getItem('user'));
        this.showLoader();
        this.commonService.getCountries().subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                //this.presentToast('Find Country.' + localStorage.getItem('user'));
                _this.countryList = result['countries'];
                _this.commonService.getInterests().subscribe(function (result1) {
                    var result = JSON.parse(result1['_body']);
                    if (result['Status']) {
                        //this.presentToast('FInd Interest.' + loggedData['userId']);
                        _this.interests = result['Msg']['interest'];
                        _this.user_service.getLoggedUserData(loggedData['userId']).subscribe(function (result1) {
                            //console.log("aaaaaa=>",this.user);
                            var result = JSON.parse(result1['_body']);
                            _this.loading.dismiss();
                            //console.log(result);
                            if (result['Status']) {
                                //this.presentToast('Find Profile.');
                                //if (typeof result['result'] == 'object' && result['result'].length > 0)
                                if (result['Msg']['country']) {
                                    _this.getCities(result['Msg']['country'], false);
                                }
                                _this.user = result['Msg'];
                                _this.user.phone = _this.user.phone == '' ? "0000000000" : _this.user.phone = _this.user.phone.length == 12 ? _this.user.phone : '44' + (_this.user.phone);
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
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.uploadImage = function () {
        var _this = this;
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
        var fileTransfer = this.transfer.create();
        this.showLoader();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            // if(data['Status']){
            _this.loading.dismiss();
            _this.presentToast('Image succesful loaded.');
            // data['Msg']['userId'] = data['Msg']['id'];
            // localStorage.setItem('user', JSON.stringify(data['Msg']));
            //this.presentToast("Your profile Imager update successfully!.");
            _this.navCtrl.setRoot(ProfilePage_1, {}, { animate: true, direction: 'forward' });
            _this.events.publish("user:update", Date.now());
            alert("Please Update your profile.");
            _this.footer = false;
            // }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error while uploading file.');
        });
    };
    ProfilePage.prototype.getPhoto = function () {
        this.footer = true;
    };
    ProfilePage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    ProfilePage.prototype.cancle11 = function () {
        this.footer = false;
    };
    ProfilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 75,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: true,
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    ProfilePage.prototype.changePhone = function () {
        this.changeNumber = this.changeNumber ? false : true;
        // this.getauth = this.getauth ? true : false;
    };
    ProfilePage.prototype.stateTrue = function () {
        //alert("hello")
        this.getauth = true;
    };
    ProfilePage.prototype.update = function () {
        var _this = this;
        this.alertCtrl.create({
            message: 'Do you want update your profile?',
            buttons: [
                {
                    text: 'YES',
                    handler: function () {
                        var valid = _this.validation.update(_this.user);
                        //console.log(valid)
                        if (!valid.err) {
                            if (_this.user.phone_reg)
                                _this.user.phone_reg = _this.user.phone_reg.length == 11 ? '0' + _this.user.phone_reg : _this.user.phone_reg;
                            //alert(this.user.phone_reg); 
                            _this.showLoader();
                            //console.log("login credentials", this.user);
                            _this.user_service.update(_this.user).subscribe(function (result1) {
                                var result = JSON.parse(result1['_body']);
                                //console.log(result);
                                if (result['Status']) {
                                    //this.presentToast('Image succesful uploaded.');
                                    result['Msg']['userId'] = result['Msg']['id'];
                                    localStorage.setItem('user', JSON.stringify(result['Msg']));
                                    _this.loading.dismiss();
                                    // this.presentToast("Your profile has been successfully updated.");
                                    _this.alertCtrl.create({
                                        // title: 'Updated',
                                        message: 'Your profile has been successfully updated.',
                                        buttons: [{
                                                text: 'ok',
                                                handler: function () {
                                                    _this.events.publish("user:update", result['Msg'], Date.now());
                                                    _this.navCtrl.setRoot(ProfilePage_1, {}, { animate: true, direction: 'forward' });
                                                }
                                            }]
                                    }).present();
                                }
                                else {
                                    _this.loading.dismiss();
                                    _this.presentToast(result['Msg']);
                                    // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                                }
                            });
                        }
                        else {
                            _this.errors = valid.errors;
                        }
                    }
                },
                {
                    text: 'NO'
                }
            ]
        }).present();
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...',
        });
        this.loading.present();
    };
    ProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilePage.prototype.getCities = function (country, isloader) {
        var _this = this;
        if (!isloader)
            this.showLoader();
        //console.log(country);
        this.commonService.getCities(country).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                //this.presentToast('FInd city.');
                _this.cityList = result['cities'];
                if (!isloader)
                    _this.loading.dismiss();
            }
        });
    };
    // Create a new name for the image
    ProfilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ProfilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    // Always get the accurate path to your apps folder
    ProfilePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ProfilePage.prototype.sendOTP = function () {
        var _this = this;
        var otp = {
            mobile: this.user.phone_reg
        };
        if (this.user.phone_reg) {
            this.showLoader();
            this.user_service.sendOTP(otp).subscribe(function (result1) {
                //console.log(result1);
                var result = JSON.parse(result1['_body']);
                //console.log(result);
                if (result['Status']) {
                    _this.timeLeft = 30;
                    _this.presentToast("Code has been sent by text - please wait");
                    _this.loading.dismiss();
                    _this.disabled = "true";
                    _this.isOTP = true;
                    _this.startTimer();
                }
                else {
                    _this.loading.dismiss();
                    _this.presentToast("OTP Not sent!");
                    //this.presentToast(result['Msg']);
                    // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                }
            });
        }
        else {
            this.errors.mobile = 'Please enter mobile No.';
        }
    };
    ProfilePage.prototype.sendOTP1 = function () {
        var _this = this;
        //  let valid = this.validation.sendOTP1(this.user);
        var otp = {
            mobile: this.user.phone_reg
        };
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
            this.user_service.sendOTP(otp).subscribe(function (result1) {
                //console.log(result1);
                var result = JSON.parse(result1['_body']);
                //console.log(result);
                if (result['Status']) {
                    _this.getauth = false;
                    _this.user.phone_reg = _this.user.phone_reg.length > 12 ? 'invalid' : _this.user.phone_reg;
                    _this.presentToast("Code has been sent by text - please wait");
                    _this.loading.dismiss();
                    _this.disabled = "true";
                    _this.isOTP = true;
                    _this.startTimer();
                }
                else {
                    _this.loading.dismiss();
                    _this.presentToast(result['Msg']);
                    // this.navCtrl.setRoot(LoginPage, {}, {animate: true, direction: 'forward'});
                }
            });
        }
        // }
        // else {
        // // this.errors.mobile = 'Please enter mobile No.'
        //   this.errors = valid.errors;
        // }
    };
    ProfilePage.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.iscounters = true;
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.isresendOTP = true;
                _this.iscounters = false;
                clearInterval(_this.interval);
            }
        }, 1000);
    };
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
    ProfilePage.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/profile/profile.html"*/'<!--\nGenerated template for the ProfilePage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!-- <ion-grid style="align-items: normal;" >\n  <ion-row>\n  <ion-col col-3><button ion-button menuToggle>\n  <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n  </button>\n  </ion-col>\n  <ion-col col-6><div style="width: 100% !important;\n  margin-right: 15% !important;\n  margin-top: -5px;">\n  <img style=" width: 100%;" src="assets/imgs/logo.jpg">\n  </div>\n  </ion-col>\n  <ion-col col-3><button ion-button (click)="opnchat()" style="background: transparent;\n  box-shadow: none;\n  margin-left: 20px;\n  margin-top: 0px;\n  color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n  </ion-col>\n  </ion-row>\n  </ion-grid> -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"> </ion-icon>\n    </button>\n    <div class="img1">\n\n      <img src="assets/imgs/logo.jpg">\n\n    </div>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="opnchat()">\n        <ion-icon name="chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card class="card_io">\n\n    <ion-card-header>\n      <ion-avatar item-start>\n        <div class="img2"> <img (click)="getPhoto()" [src]="user.imageUrlThumb" style="border-radius: 50%; width:100px; height: 100px;"></div>\n        <h2 style="font-weight: 500; font-size: 18px; color: #efba00; text-align: center;">Touch Picture to Update</h2>\n\n      </ion-avatar>\n\n    </ion-card-header>\n\n    <ion-card-content>\n      <form id="home-form5" class="list">\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> Select Title</ion-label>\n          <ion-select interface="action-sheet" name="title" [(ngModel)]="user.title" placeholder="Select Title" style="padding-left: 10px;">\n            <ion-option value="Mr">Mr</ion-option>\n            <ion-option value="Mrs">Mrs</ion-option>\n            <ion-option value="Ms">Ms</ion-option>\n            <ion-option value="Miss">Miss</ion-option>\n          </ion-select>\n        </ion-item>\n        <label class="error" *ngIf="errors.title">{{errors.title}}</label>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> First Name</ion-label>\n          <ion-input type="text" placeholder=" First Name" maxlength="30" name="first_name" [(ngModel)]="user.first_name"\n            interface="action-sheet"></ion-input>\n        </ion-item>\n        <label class="error" *ngIf="errors.first_name">{{errors.first_name}}</label>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> Last Name</ion-label>\n          <ion-input type="text" placeholder=" Last Name " maxlength="30" name="last_name" [(ngModel)]="user.last_name"\n            interface="action-sheet"></ion-input>\n        </ion-item>\n        <label class="error" *ngIf="errors.last_name">{{errors.last_name}}</label>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> Date of birth</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" placeholder=" Date" name="dob" [(ngModel)]="user.dob" style="padding-left: 10px;"></ion-datetime>\n        </ion-item>\n        <label class="error" *ngIf="errors.dob">{{errors.dob}}</label>\n        <ion-item style="pointer-events:none;">\n          <ion-label interface="action-sheet" stacked> Gender</ion-label>\n          <ion-select interface="action-sheet" placeholder=" Gender" name="gender" [(ngModel)]="user.gender" style="padding-left: 10px;">\n            <ion-option value="Male">Male</ion-option>\n            <ion-option value="Female">Female</ion-option>\n          </ion-select>\n        </ion-item>\n        <label class="error" *ngIf="errors.gender">{{errors.gender}}</label>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> Marital Status</ion-label>\n          <ion-select interface="action-sheet" placeholder="Marital Status" name="marrital_status" [(ngModel)]="user.marrital_status"\n            style="padding-left: 10px;">\n            <ion-option value="Single">Single</ion-option>\n            <ion-option value="Married">Married</ion-option>\n            <ion-option value="Divorced">Divorced</ion-option>\n            <ion-option value="Widow">Widow</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <label class="error" *ngIf="errors.marrital_status">{{errors.marrital_status}}</label>\n        <div style="text-align: left; padding-left: 10px">\n          <font color="#efba00">Personal details are strictly confidential however if a match is made your mobile,email\n            and city will be shared with your match.</font>\n        </div>\n        <!-- <ion-item>\n  <ion-label interface="action-sheet" stacked> Address</ion-label>\n  <ion-input type="text" placeholder=" Address " name="address" [(ngModel)]="user.address" interface="action-sheet"></ion-input>\n  </ion-item>\n  <label class="error" *ngIf="errors.address">{{errors.address}}</label> -->\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> Country Name</ion-label>\n          <ion-select interface="action-sheet" placeholder="Select Country" name="country" #C (ionChange)="getCities(C.value,true)"\n            [(ngModel)]="user.country" style="padding-left: 10px;">\n            <ion-option *ngFor="let country of countryList; let i=index;" [value]="country.country_id" [selected]="country.country_id == user.country">{{country.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <label class="error" *ngIf="errors.country">{{errors.country}}</label>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> City Name</ion-label>\n          <ion-select interface="action-sheet" placeholder="Select City" name="city" [(ngModel)]="user.city" style="padding-left: 10px;">\n            <ion-option *ngFor="let city of cityList; let i=index;" [value]="city.zone_id" [selected]="city.zone_id == user.city">{{city.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <label class="error" *ngIf="errors.city">{{errors.city}}</label>\n        <div style="text-align: left; padding-left: 10px">\n          <font color="#efba00">Postcode is used to indicate distance in miles between you and a potential match.\n          </font>\n        </div>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> Postcode</ion-label>\n          <ion-input type="text" autocapitalize="none" placeholder=" Postcode " name="postcode" [(ngModel)]="user.postcode"\n            interface="action-sheet"></ion-input>\n        </ion-item>\n        <label class="error" *ngIf="errors.postcode">{{errors.postcode}}</label>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> Email Id</ion-label>\n          <ion-input type="email" placeholder=" Email Id " name="email" [(ngModel)]="user.email" readonly interface="action-sheet"></ion-input>\n        </ion-item>\n        <label class="error" *ngIf="errors.email">{{errors.email}}</label>\n        <div style="text-align: left; padding-left: 10px">\n          <font color="#efba00">\n            Please enter your mobile without the leading zero. Example 07944123456 should be entered as 447944123456 -\n            Then press "Get Authentication Code by Text\n          </font>\n        </div>\n\n        <ion-item style="pointer-events:none;">\n          <ion-label interface="action-sheet" stacked> Mobile Number</ion-label>\n          <ion-input type="number" placeholder="0000000000 " value="0000000000" name="phone" [(ngModel)]="user.phone "\n            interface="action-sheet" maxlength=10></ion-input>\n          <!-- == \'\'? \'0000000000\' :user.phone -->\n        </ion-item>\n        <!-- <label class="error" *ngIf="errors.phone">{{errors.phone}}</label> -->\n        <ion-item style="text-align: center">\n          <button ion-button round icon-start style="color:black;" (click)="changePhone()"> Press to Enter Mobile\n            Number </button>\n        </ion-item>\n        <ion-item *ngIf="changeNumber">\n          <ion-label interface="action-sheet" stacked>Enter New Number Here</ion-label>\n          <ion-input type="tel" placeholder=" " (keypress)="stateTrue()" maxlength="12" name="phone_reg" [(ngModel)]="user.phone_reg" interface="action-sheet"></ion-input>\n        </ion-item>\n\n        <label class="error" *ngIf="errors.phone_reg">{{errors.phone_reg}}</label><br>\n        <div *ngIf="getauth">\n          <button ion-button round icon-start style="padding: 6px 10px 0px 10px; margin-bottom: 12px; margin-top: -1px; "\n            *ngIf="changeNumber" (click)="sendOTP1()">\n            <h6 style="font-weight:bold;"> Get Authentication Code by Text </h6>\n          </button>\n        </div>\n\n        <div *ngIf="changeNumber">\n          <div [hidden]="!isOTP">\n            <ion-item>\n              <ion-input type="number" placeholder="Enter The code " name="otp_code" [(ngModel)]="user.otp_code"\n                required interface="action-sheet"></ion-input>\n            </ion-item>\n            <div [hidden]="!iscounters">\n              <p style="color: white;">{{timeLeft > 9? timeLeft : \'0\'+timeLeft}} Seconds Left for Resend Code</p>\n            </div>\n\n            <div [hidden]="!isresendOTP">\n\n              <button ion-button style="padding: 6px 10px 0px 10px; margin-bottom: 12px; margin-top: 4px; " (click)="sendOTP()"\n                round>\n                <h6 style="font-weight:bold;">Resend Authentication Code</h6>\n              </button>\n              <!-- <p style="color: white;">{{timeLeft1}} Seconds Left for Resend Code</p> -->\n            </div>\n\n            <label class="error" *ngIf="errors.otp_code">{{errors.otp_code}}</label>\n          </div>\n        </div>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> First Interest</ion-label>\n          <ion-select interface="action-sheet" placeholder="Select from Dropdown" name="interest1" [(ngModel)]="user.interest1"\n            style="padding-left: 10px;">\n            <ion-option *ngFor="let int of interests; let i=index;" [value]="int.id" [selected]="int.id == user.interest1">{{int.interest}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <label class="error" *ngIf="errors.interest1">{{errors.interest1}}</label>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> Second Interest</ion-label>\n          <ion-select interface="action-sheet" placeholder="Select from Dropdown" name="interest2" [(ngModel)]="user.interest2"\n            style="padding-left: 10px;">\n            <ion-option *ngFor="let int of interests; let i=index;" [value]="int.id" [selected]="int.id == user.interest2">{{int.interest}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <label class="error" *ngIf="errors.interest2">{{errors.interest2}}</label>\n        <ion-item>\n          <ion-label interface="action-sheet" stacked> About Me</ion-label>\n          <ion-textarea style="margin-left: 10px" #msgInput rows="3" maxLength="500" name="about_us" [(ngModel)]="user.about_us"\n            placeholder="Please enter something about yourself...."></ion-textarea>\n        </ion-item>\n        <label class="error" *ngIf="errors.about_us">{{errors.about_us}}</label><br><br>\n        <button ion-button round icon-start (click)="update()"> SUBMIT</button>\n      </form>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n<ion-footer *ngIf="footer">\n  <ion-toolbar color="primary">\n    <ion-buttons>\n      <button ion-button icon-left (click)="presentActionSheet()">\n        <ion-icon name="camera"></ion-icon>Select Image\n      </button>\n      <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n        <ion-icon name="cloud-upload"></ion-icon>Upload\n      </button>\n      <button ion-button icon-left (click)="cancle11()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__service_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
var Chat = /** @class */ (function () {
    function Chat(lastMessage, timestamp, title, photo) {
        this.lastMessage = lastMessage;
        this.timestamp = timestamp;
        this.title = title;
        this.photo = photo;
    }
    return Chat;
}());

//# sourceMappingURL=chat.model.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_network__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_events_events__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_change_password_change_password__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_event_member_event_member__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recived_request_recived_request__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pending_approval_pending_approval__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_event_friend_event_friend__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_past_events_past_events__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_event_waiting_list_event_waiting_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_tickets_my_tickets__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_push__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_faq_s_faq_s__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_user_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_transfer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_base64__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_chat_auth_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_signup_signup__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_view_view__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { StatusBar } from '@ionic-native/status-bar';





























var MyApp = /** @class */ (function () {
    function MyApp(platform, 
        // public navCtrl: NavController,
        push, commonService, 
        //private statusBar: StatusBar, 
        network, loadingCtrl, userService, base64, events, alertCtrl, toastCtrl, camera, file, authService, filePath, actionSheetCtrl, transfer, menuCtrl, splashScreen) {
        //network
        var _this = this;
        this.platform = platform;
        this.push = push;
        this.commonService = commonService;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.base64 = base64;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.file = file;
        this.authService = authService;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.menuCtrl = menuCtrl;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.footer = false;
        this.lastImage = null;
        this.shownGroup = null;
        this.shownGroup1 = null;
        this.shownGroup2 = null;
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            console.log('Network unavailable');
            _this.presentToast('Please check your connection.');
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
        var connectSubscription = this.network.onConnect().subscribe(function () {
            console.log('Network connected!');
            _this.presentToast('Network connected!');
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
        this.events.subscribe('user:update', function (user, time) {
            console.log('Welcome', localStorage.getItem('user'), 'at', time);
            //this.presentToast('Login : '+localStorage.getItem('user'));
            _this.logged = localStorage.getItem('user') ? true : false;
            _this.loggedData = _this.logged ? JSON.parse(localStorage.getItem('user')) : {
                imageUrlThumb: 'assets/imgs/guest.png',
                first_name: 'Guest',
                last_name: ''
            };
            // this.platform= platform;
            // this.platform.ready().then( () => {
            //   this.statusBar.styleDefault();
            // });
            _this.pages = [
                { title: 'Search Events', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
                { title: 'Events Calendar', component: __WEBPACK_IMPORTED_MODULE_8__pages_events_events__["a" /* EventsPage */], icon: "calendar" },
                { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */], icon: "person" },
            ];
            _this.pages1 = [
                { title: 'Past Events', component: __WEBPACK_IMPORTED_MODULE_14__pages_past_events_past_events__["a" /* PastEventsPage */], icon: "bookmarks" },
                { title: 'My Tickets', component: __WEBPACK_IMPORTED_MODULE_16__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */], icon: "bookmark" },
                { title: 'Event Members', component: __WEBPACK_IMPORTED_MODULE_10__pages_event_member_event_member__["a" /* EventMemberPage */], icon: "people" },
                { title: 'Event Waiting List', component: __WEBPACK_IMPORTED_MODULE_15__pages_event_waiting_list_event_waiting_list__["a" /* EventWaitingListPage */], icon: "timer" },
            ];
            _this.pages3 = [
                { title: 'Received Friends Request', component: __WEBPACK_IMPORTED_MODULE_11__pages_recived_request_recived_request__["a" /* RecivedRequestPage */], icon: "ios-contacts-outline" },
                { title: 'Pending Friends Approval', component: __WEBPACK_IMPORTED_MODULE_12__pages_pending_approval_pending_approval__["a" /* PendingApprovalPage */], icon: "ios-contacts-outline" },
                { title: 'Event Matched Friends', component: __WEBPACK_IMPORTED_MODULE_13__pages_event_friend_event_friend__["a" /* EventFriendPage */], icon: "contacts" },
            ];
            _this.pages2 = [
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: "text" },
                { title: 'FAQ', component: __WEBPACK_IMPORTED_MODULE_21__pages_faq_s_faq_s__["a" /* FaqSPage */], icon: "help" },
                { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__["a" /* TermsPage */], icon: "bookmark" },
                { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */], icon: "call" },
                { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_9__pages_change_password_change_password__["a" /* ChangePasswordPage */], icon: "briefcase" }
            ];
            _this.initializeApp();
        });
        this.events.subscribe('user:login', function (user, time) {
            console.log('Welcome', localStorage.getItem('user'), 'at', time);
            //this.presentToast('Login : '+localStorage.getItem('user'));
            _this.logged = localStorage.getItem('user') ? true : false;
            _this.loggedData = _this.logged ? JSON.parse(localStorage.getItem('user')) : {
                imageUrlThumb: 'assets/imgs/guest.png',
                first_name: 'Guest',
                last_name: ''
            };
            _this.pages = [
                { title: 'Search Events', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
                { title: 'Events Calendar', component: __WEBPACK_IMPORTED_MODULE_8__pages_events_events__["a" /* EventsPage */], icon: "calendar" },
                { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */], icon: "person" },
            ];
            _this.pages1 = [
                { title: 'Past Events', component: __WEBPACK_IMPORTED_MODULE_14__pages_past_events_past_events__["a" /* PastEventsPage */], icon: "bookmarks" },
                { title: 'My Tickets', component: __WEBPACK_IMPORTED_MODULE_16__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */], icon: "bookmark" },
                { title: 'Event Members', component: __WEBPACK_IMPORTED_MODULE_10__pages_event_member_event_member__["a" /* EventMemberPage */], icon: "people" },
                { title: 'Event Waiting List', component: __WEBPACK_IMPORTED_MODULE_15__pages_event_waiting_list_event_waiting_list__["a" /* EventWaitingListPage */], icon: "timer" },
            ];
            _this.pages3 = [
                { title: 'Recieved Friends Request', component: __WEBPACK_IMPORTED_MODULE_11__pages_recived_request_recived_request__["a" /* RecivedRequestPage */], icon: "ios-contacts-outline" },
                { title: 'Pending Friends Approval', component: __WEBPACK_IMPORTED_MODULE_12__pages_pending_approval_pending_approval__["a" /* PendingApprovalPage */], icon: "ios-contacts-outline" },
                { title: 'Event Matched Friends', component: __WEBPACK_IMPORTED_MODULE_13__pages_event_friend_event_friend__["a" /* EventFriendPage */], icon: "contacts" },
            ];
            _this.pages2 = [
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: "text" },
                { title: 'FAQ', component: __WEBPACK_IMPORTED_MODULE_21__pages_faq_s_faq_s__["a" /* FaqSPage */], icon: "help" },
                { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__["a" /* TermsPage */], icon: "bookmark" },
                { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */], icon: "call" },
                { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_9__pages_change_password_change_password__["a" /* ChangePasswordPage */], icon: "briefcase" }
            ];
            _this.initializeApp();
        });
        this.events.subscribe('user:logout', function (user, time) {
            //console.log('Welcome', user, 'at', time);
            _this.logged = localStorage.getItem('user') ? true : false;
            _this.loggedData = _this.logged ? JSON.parse(localStorage.getItem('user')) : {
                imageUrlThumb: 'assets/imgs/guest.png',
                first_name: 'Guest',
                last_name: ''
            };
            _this.pages = [
                { title: 'Search Events', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */], icon: "person" },
                { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_28__pages_signup_signup__["a" /* SignupPage */], icon: "contact" },
            ];
            _this.pages2 = [
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: "text" },
                { title: 'FAQ', component: __WEBPACK_IMPORTED_MODULE_21__pages_faq_s_faq_s__["a" /* FaqSPage */], icon: "help" },
                { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__["a" /* TermsPage */], icon: "bookmark" },
                { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */], icon: "call" },
            ];
            _this.initializeApp();
        });
        this.initializeApp();
        //console.log(this.logged, this.loggedData);
        // used for an example of ngFor and navigation
        if (!this.logged) {
            this.pages = [
                { title: 'Search Events', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */], icon: "person" },
                { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_28__pages_signup_signup__["a" /* SignupPage */], icon: "contact" },
            ];
        }
        else {
            //console.log(this.loggedData);
            this.pages = [
                { title: 'Search Events', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
                { title: 'Events Calendar', component: __WEBPACK_IMPORTED_MODULE_8__pages_events_events__["a" /* EventsPage */], icon: "calendar" },
                { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */], icon: "person" },
            ];
            this.pages1 = [
                { title: 'Past Events', component: __WEBPACK_IMPORTED_MODULE_14__pages_past_events_past_events__["a" /* PastEventsPage */], icon: "bookmarks" },
                { title: 'My Tickets', component: __WEBPACK_IMPORTED_MODULE_16__pages_my_tickets_my_tickets__["a" /* MyTicketsPage */], icon: "bookmark" },
                { title: 'Event Members', component: __WEBPACK_IMPORTED_MODULE_10__pages_event_member_event_member__["a" /* EventMemberPage */], icon: "people" },
                { title: 'Event Waiting List', component: __WEBPACK_IMPORTED_MODULE_15__pages_event_waiting_list_event_waiting_list__["a" /* EventWaitingListPage */], icon: "timer" },
            ];
            this.pages3 = [
                { title: 'Recieved Friends Request', component: __WEBPACK_IMPORTED_MODULE_11__pages_recived_request_recived_request__["a" /* RecivedRequestPage */], icon: "ios-contacts-outline" },
                { title: 'Pending Friends Approval', component: __WEBPACK_IMPORTED_MODULE_12__pages_pending_approval_pending_approval__["a" /* PendingApprovalPage */], icon: "ios-contacts-outline" },
                { title: 'Event Matched Friends', component: __WEBPACK_IMPORTED_MODULE_13__pages_event_friend_event_friend__["a" /* EventFriendPage */], icon: "contacts" },
            ];
        }
        if (!this.logged) {
            this.pages2 = [
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: "text" },
                { title: 'FAQ', component: __WEBPACK_IMPORTED_MODULE_21__pages_faq_s_faq_s__["a" /* FaqSPage */], icon: "help" },
                { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__["a" /* TermsPage */], icon: "bookmark" },
                { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */], icon: "call" },
            ];
        }
        else {
            this.pages2 = [
                { title: 'About', component: __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */], icon: "text" },
                { title: 'FAQ', component: __WEBPACK_IMPORTED_MODULE_21__pages_faq_s_faq_s__["a" /* FaqSPage */], icon: "help" },
                { title: 'Terms & Conditions', component: __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__["a" /* TermsPage */], icon: "bookmark" },
                { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */], icon: "call" },
                { title: 'Change Password', component: __WEBPACK_IMPORTED_MODULE_9__pages_change_password_change_password__["a" /* ChangePasswordPage */], icon: "briefcase" }
            ];
        }
    }
    MyApp.prototype.openpic = function (imge) {
        //alert(imge);
        this.menuCtrl.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_30__pages_view_view__["a" /* ViewPage */], { image: imge });
    };
    MyApp.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.initPushNotification();
        });
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We don\'t have permission to send push notifications');
            }
        });
        // to initialize push notifications
        var options = {
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
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            console.log('Received a notification', notification);
            //Notification Display Section
            var confirmAlert = _this.alertCtrl.create({
                title: notification.title ? decodeURIComponent(notification.title) : 'MeetMatchGo',
                subTitle: 'New Message',
                message: decodeURIComponent(notification.message),
                buttons: [{
                        text: 'Ignore',
                    }, {
                        text: 'View',
                        handler: function () {
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_event_friend_event_friend__["a" /* EventFriendPage */]);
                            //TODO: Your logic here
                            //self.nav.push(DetailsPage, {message: data.message});
                        }
                    }]
            });
            confirmAlert.present();
            //
        });
        pushObject.on('registration').
            subscribe(function (registration) {
            //alert('Device registered&&&'+ JSON.stringify(registration)+'****'+JSON.stringify(this.loggedData)+'%%%%'+ this.logged);
            if (_this.logged) {
                _this.commonService.updateFCMTokenByUser(registration.registrationId, _this.loggedData['userId']).subscribe(function (result1) {
                    if (!result1) {
                        _this.initializeApp();
                    }
                    else {
                        //alert(JSON.stringify(result1)+'&&&'+JSON.stringify(registration))
                    }
                });
            }
        });
        pushObject.on('error').
            subscribe(function (error) {
            return console.error('Error with Push plugin', error);
        });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: 'Do you want to logout?',
            buttons: [
                {
                    text: 'YES',
                    handler: function () {
                        _this.authService.logout()
                            .then(function () {
                            localStorage.removeItem('user');
                            _this.events.publish("user:logout", _this.loggedData, Date.now());
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], {}, { animate: true, direction: 'forward' });
                        });
                    }
                },
                {
                    text: 'NO'
                }
            ]
        }).present();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MyApp.prototype.uploadImage = function () {
        var _this = this;
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
        var fileTransfer = this.transfer.create();
        this.showLoader();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            if (data['Status']) {
                _this.presentToast('Image succesful uploaded.');
                _this.loading.dismiss();
                data['Msg']['userId'] = data['Msg']['id'];
                localStorage.setItem('user', JSON.stringify(data['Msg']));
                _this.presentToast("Your profile update successfully!.");
                _this.logged = localStorage.getItem('user') ? true : false;
                _this.loggedData = _this.logged ? JSON.parse(localStorage.getItem('user')) : {
                    imageUrlThumb: 'assets/imgs/guest.png',
                    first_name: 'Guest',
                    last_name: ''
                };
                _this.footer = false;
                _this.initializeApp();
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast('Error while uploading file.');
        });
    };
    MyApp.prototype.getPhoto = function () {
        if (this.logged)
            this.footer = true;
    };
    MyApp.prototype.cancle11 = function () {
        this.footer = false;
    };
    MyApp.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    MyApp.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Create a new name for the image
    MyApp.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    MyApp.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    //help & support
    MyApp.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MyApp.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    // friends
    MyApp.prototype.toggleGroup1 = function (group) {
        if (this.isGroupShown1(group)) {
            this.shownGroup1 = null;
        }
        else {
            this.shownGroup1 = group;
        }
    };
    ;
    MyApp.prototype.isGroupShown1 = function (group) {
        return this.shownGroup1 === group;
    };
    ;
    //my event
    MyApp.prototype.toggleGroup2 = function (group) {
        if (this.isGroupShown2(group)) {
            this.shownGroup2 = null;
        }
        else {
            this.shownGroup2 = group;
        }
    };
    ;
    MyApp.prototype.isGroupShown2 = function (group) {
        return this.shownGroup2 === group;
    };
    ;
    // Always get the accurate path to your apps folder
    MyApp.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item *ngIf="logged==true;" style=" border-bottom: 0px  " >\n          <div class="img2"><ion-avatar item-start  ><img [src]="loggedData.imageUrlThumb"  (click)="openpic(loggedData.imageUrlThumb)"  style="border-radius: 50%; overflow: hidden; width: 100px; height: 100px;" /></ion-avatar>\n          </div>\n           <!-- for open image large use [imageViewer] -->\n      </ion-item>\n\n      <ion-item *ngIf="logged==false;" style=" border-bottom: 0px  " >\n        <div class="img2"><ion-avatar item-start  ><img [src]="loggedData.imageUrlThumb"   style="border-radius: 50%; overflow: hidden; width: 100px; height: 100px;" /></ion-avatar>\n        </div>\n         <!-- for open image large use [imageViewer] -->\n    </ion-item>\n\n      <h2 class="h2" style="color: #000" >Welcome {{loggedData.first_name}}</h2>\n      <!-- user last name \' \'+ loggedData.last_name -->\n    </ion-toolbar>\n  </ion-header> \n\n  <ion-content>\n    \n    <ion-list>\n      \n      <button style="border-bottom: 1px solid;" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n\n    <ion-list *ngIf="logged" >\n      <ion-item  text-wrap style="    border-bottom: 1px solid black;" (click)="toggleGroup2()" [ngClass]="{active: isGroupShown2()}"  > <label style=" color: #000; font-size: 16px; font-weight: 500;" > My Event</label>\n          <ion-icon style="position: absolute; right: 0; top: 0;" color="success" item-right [name]="isGroupShown2() ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n          <div style=" border-top: 1px solid;     margin: 15px 0px -10px 0; " *ngIf="isGroupShown2()"> <button menuClose ion-item *ngFor="let p of pages1" (click)="openPage(p)">\n              <ion-icon name="{{p.icon}}"></ion-icon>\n              {{p.title}}\n            </button></div>\n       </ion-item>\n  </ion-list>\n\n    <ion-list *ngIf="logged" >\n        <ion-item  text-wrap style="    border-bottom: 1px solid black;" (click)="toggleGroup1()" [ngClass]="{active: isGroupShown1()}"  > <label style=" color: #000; font-size: 16px; font-weight: 500;" > Friends</label>\n            <ion-icon style="position: absolute; right: 0; top: 0;" color="success" item-right [name]="isGroupShown1() ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n            <div style=" border-top: 1px solid;     margin: 15px 0px -10px 0; " *ngIf="isGroupShown1()"> <button menuClose ion-item *ngFor="let p of pages3" (click)="openPage(p)">\n                <ion-icon name="{{p.icon}}"></ion-icon>\n                {{p.title}}\n              </button></div>\n         </ion-item>\n    </ion-list>\n\n    <ion-list  >\n        <ion-item  text-wrap style="    border-bottom: 1px solid black;" (click)="toggleGroup()" [ngClass]="{active: isGroupShown()}"  > <label style=" color: #000; font-size: 16px; font-weight: 500;" > Help & Support</label>\n            <ion-icon style="position: absolute; right: 0; top: 0;" color="success" item-right [name]="isGroupShown() ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n            <div style=" border-top: 1px solid;    margin: 15px 0px -10px 0; " *ngIf="isGroupShown()"> <button menuClose ion-item *ngFor="let p of pages2" (click)="openPage(p)">\n                <ion-icon name="{{p.icon}}"></ion-icon>\n                {{p.title}}\n              </button></div>\n           \n        </ion-item>\n      <button menuClose ion-item  (click)="logout()" *ngIf="logged">\n        <ion-icon name="md-log-out"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n    \n  </ion-content>\n  <!-- <ion-footer *ngIf="footer">\n    <ion-toolbar color="primary">\n      <ion-buttons>\n        <button ion-button icon-left (click)="presentActionSheet()">\n          <ion-icon name="camera"></ion-icon>Select Image\n        </button>\n        <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n          <ion-icon name="cloud-upload"></ion-icon>Upload\n        </button>\n        <button ion-button icon-left (click)="cancle11()" >\n            <ion-icon name="close"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer> -->\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_29__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_22__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_27__service_chat_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, onlyFirst) {
        if (onlyFirst)
            return value.charAt(0).toUpperCase() + value.substr(1);
        var words = value.split(' ');
        var output = '';
        words.forEach(function (value, index, words) {
            output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';
        });
        return output;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'capitalize'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CapitalizePipe);
    return CapitalizePipe;
}());

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomLoggedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_chat_auth_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_component__ = __webpack_require__(489);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { User } from './../../models/user.model';
var CustomLoggedHeaderComponent = /** @class */ (function (_super) {
    __extends(CustomLoggedHeaderComponent, _super);
    function CustomLoggedHeaderComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CustomLoggedHeaderComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CustomLoggedHeaderComponent.prototype, "user", void 0);
    CustomLoggedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-logged-header',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/components/custom-logged-header/custom-logged-header.component.html"*/'<ion-navbar>\n\n  <button ion-button menuToggle="user-menu">\n    <ion-icon name="menu"></ion-icon>\n  </button>\n\n  <ion-title>\n\n    <ion-item detail-none no-lines color="transparent" *ngIf="user; else titleTemplate">\n      <ion-avatar item-start>\n        <img [src]="user.imageUrl || \'assets/images/no-photo.jpg\'">\n      </ion-avatar>\n      {{ title }}\n    </ion-item>\n\n    <ng-template #titleTemplate>\n      {{ title }}\n    </ng-template>\n    \n  </ion-title>\n\n  <!-- <ion-buttons end>\n    <button ion-button icon-only (click)="onLogout()">\n      <ion-icon name="exit"></ion-icon>\n    </button>\n  </ion-buttons> -->\n\n</ion-navbar>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/components/custom-logged-header/custom-logged-header.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_chat_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* MenuController */]])
    ], CustomLoggedHeaderComponent);
    return CustomLoggedHeaderComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=custom-logged-header.component.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */])
    ], MessageBoxComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MessageBoxComponent.prototype, "isFromSender", void 0);
    MessageBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'message-box',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/components/message-box/message-box.component.html"*/'<div class="text" [ngClass]="{\'sender-background\': isFromSender}">\n  <p>{{ message.text }}</p>\n  <p class="timestamp">{{ message.timestamp | date:\' hh:mm a\' }}</p>\n</div>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/components/message-box/message-box.component.html"*/,
            host: {
                '[style.justify-content]': '((!isFromSender) ? "flex-start" : "flex-end")',
                '[style.text-align]': '((!isFromSender) ? "left" : "right")'
            }
        }),
        __metadata("design:paramtypes", [])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());

//# sourceMappingURL=message-box.component.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/components/progress-bar/progress-bar.component.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{ progress }}%\n  </div>\n</div>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/components/progress-bar/progress-bar.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        this.isMenu = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */])
    ], UserInfoComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], UserInfoComponent.prototype, "isMenu", void 0);
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-info',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/components/user-info/user-info.component.html"*/'<div *ngIf="user">\n  <ion-avatar [ngClass]="{\'custom-background\': isMenu}">\n    <img class="round" [src]="user.photo || \'assets/images/no-photo.jpg\'">\n  </ion-avatar>\n  <h2 text-center>{{ user.name }}</h2>\n  <p text-center>@{{ user.username }}</p>\n</div>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/components/user-info/user-info.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());

//# sourceMappingURL=user-info.component.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_chat_auth_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(490);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserMenuComponent = /** @class */ (function (_super) {
    __extends(UserMenuComponent, _super);
    function UserMenuComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    UserMenuComponent.prototype.onProfile = function () {
        //this.navCtrl.push(UserProfilePage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('user'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */])
    ], UserMenuComponent.prototype, "currentUser", void 0);
    UserMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-menu',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/components/user-menu/user-menu.component.html"*/'<ion-content>\n\n  <user-info [user]="currentUser" [isMenu]="true"></user-info>\n\n  <ion-list no-lines>\n    <button ion-item icon-right detail-none menuClose="user-menu" (click)="onProfile()">\n      Profile\n      <ion-icon name="person" item-end></ion-icon>\n    </button>\n    <button ion-item icon-right detail-none menuClose="user-menu" (click)="onLogout()">\n      Logout\n      <ion-icon name="log-out" item-end></ion-icon>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/components/user-menu/user-menu.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_chat_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* MenuController */]])
    ], UserMenuComponent);
    return UserMenuComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_component__["a" /* BaseComponent */]));

//# sourceMappingURL=user-menu.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_storage__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { map } from 'rxjs/operators/map';





var UserfService = /** @class */ (function (_super) {
    __extends(UserfService, _super);
    function UserfService(afAuth, db, firebaseApp, http) {
        var _this = _super.call(this) || this;
        _this.afAuth = afAuth;
        _this.db = db;
        _this.firebaseApp = firebaseApp;
        _this.http = http;
        _this.listenAuthState();
        return _this;
    }
    UserfService.prototype.setUsers = function (uidToExclude) {
        this.users = this.mapListKeys(this.db.list("/users", function (ref) { return ref.orderByChild('name'); }))
            .map(function (users) {
            return users.filter(function (user) { return user.$key !== uidToExclude; });
        });
    };
    UserfService.prototype.listenAuthState = function () {
        var _this = this;
        this.afAuth
            .authState
            .subscribe(function (authUser) {
            if (authUser) {
                console.log('Auth state alterado!', authUser.uid);
                console.log('aaaaaaaaaa!', authUser.email);
                _this.currentUser = _this.db.object("/users/" + authUser.uid);
                _this.setUsers(authUser.uid);
            }
        });
    };
    UserfService.prototype.create = function (user, uuid) {
        return this.db.object("/users/" + uuid)
            .set(user)
            .catch(this.handlePromiseError);
    };
    UserfService.prototype.edit = function (user) {
        return this.currentUser
            .update(user)
            .catch(this.handlePromiseError);
    };
    UserfService.prototype.userExists = function (username) {
        return this.db.list("/users", function (ref) { return ref.orderByChild('name').equalTo(username); })
            .valueChanges()
            .map(function (users) {
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    UserfService.prototype.userExists1 = function (email) {
        return this.db.list("/users", function (ref) { return ref.orderByChild('email').equalTo(email); })
            .valueChanges()
            .map(function (users) {
            console.log(users);
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    UserfService.prototype.get = function (userId) {
        return this.db.object("/users/" + userId);
    };
    UserfService.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp
            .storage()
            .ref()
            .child("/users/" + userId)
            .put(file);
    };
    UserfService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserfService);
    return UserfService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));

//# sourceMappingURL=userf.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_waiting_list_event_waiting_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_details_event_details__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticket_registration_ticket_registration__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Response } from '@angular/http';









/**
* Generated class for the EventsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, alertCtrl, commonService, loadingCtrl, toastCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.search = {
            date: '',
            event_type: '',
            country: '',
            location: '',
            age_men: '',
            age_women: ''
        };
        this.isevents = false;
        this.user = {
            gender: '',
        };
        this.logged = localStorage.getItem('user') ? true : false;
        this.user1 = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user'))
            this.user = JSON.parse(localStorage.getItem('user'));
        // this.loggedData = JSON.parse(localStorage.getItem('userId'));
        // console.log(this.loggedData);
        var d = new Date(navParams.get('date'));
        var dt = ("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear();
        // console.log(navParams.get('date'));
        this.search = {
            date: typeof navParams.get('date') != 'undefined' && navParams.get('date') != 'NaN' && navParams.get('date') ? dt : '',
            event_type: typeof navParams.get('event_type') != 'undefined' ? navParams.get('event_type') : '',
            country: typeof navParams.get('country') != 'undefined' ? navParams.get('country') : '',
            location: typeof navParams.get('location') != 'undefined' ? navParams.get('location') : '',
            age_men: typeof navParams.get('age_men') != 'undefined' ? navParams.get('age_men') : '',
            age_women: typeof navParams.get('age_women') != 'undefined' ? navParams.get('age_women') : ''
        };
        this.showLoader();
        this.time = new Date().getTime();
        this.commonService.getEventsBySearch(this.search).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            //console.log(result);
            _this.loading.dismiss();
            if (result['Status']) {
                if (typeof result['Msg'] == 'object' && result['Msg'].length > 0) {
                    _this.events = result['Msg'];
                }
                else {
                    _this.presentToast('No Events Found.');
                    _this.isevents = true;
                }
            }
        });
        this.setTime();
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    EventsPage.prototype.setTime = function () {
        var _this = this;
        this.time = new Date().getTime();
        setTimeout(function () {
            _this.setTime();
        }, 1000);
    };
    EventsPage.prototype.eventTimer = function (date1, date2) {
        var date_future = date1 * 1000;
        var date_now = date2;
        var seconds = Math.floor((date_future - (date_now)) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
        return (this.commonService.str_pad(days, 2, '0', 'STR_PAD_LEFT') + " days " + this.commonService.str_pad(hours, 2, '0', 'STR_PAD_LEFT') + ":" + this.commonService.str_pad(minutes, 2, '0', 'STR_PAD_LEFT') + ":" + this.commonService.str_pad(seconds, 2, '0', 'STR_PAD_LEFT'));
    };
    EventsPage.prototype.eventDetail = function (event_id, eventDate) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__event_details_event_details__["a" /* EventDetailsPage */], { event_id: event_id, eventDate: eventDate });
    };
    EventsPage.prototype.bookNow = function (event_id) {
        if (this.logged == true) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */], { event_id: event_id });
        }
        else if (this.logged == false) {
            this.loginAlert();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */], { event_id: event_id });
        }
    };
    // bookNow1(event_id: number) {
    // this.loginAlert();
    // this.navCtrl.setRoot(LoginPage, { event_id: event_id });
    // }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    EventsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EventsPage.prototype.addToWaitingLists = function (event_id, gender, isloader) {
        var _this = this;
        if (this.user.gender == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'Please login to add yourself to guest list',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else if (!isloader)
            this.showLoader();
        //alert(this.user['userId']);
        // alert(gender)
        // console.log(id);
        this.commonService.addToWaitingLists(event_id, this.user['userId'], gender).subscribe(function (result1) {
            if (!isloader) {
                _this.loading.dismiss();
            }
            // console.log(result1['_body']);
            var result = JSON.parse(result1['_body']);
            //console.log(result['result']);
            if (result['Status']) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__event_waiting_list_event_waiting_list__["a" /* EventWaitingListPage */]);
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: result['result']['text'],
                    buttons: ['Dismiss']
                });
                alert_2.present();
            }
        });
    };
    EventsPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    EventsPage.prototype.loginAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Please login to book an event.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    EventsPage.prototype.eventStartDate = function (date) {
        //alert(date);
        var date2 = new Date(Number(this.time));
        ;
        var date1 = new Date(date * 1000);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
        // alert(dayDifference);
        return dayDifference;
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/events/events.html"*/'<!--\nGenerated template for the PastEventsPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <!-- <ion-grid style="align-items:normal;" >\n  <ion-row>\n  <ion-col col-3><button ion-button menuToggle>\n  <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n  </button>\n  </ion-col>\n  <ion-col col-6><div style="width: 100% !important;\n  margin-right: 15% !important;\n  margin-top: -5px;">\n  <img style=" width: 100%;" src="assets/imgs/logo.jpg">\n  </div>\n  </ion-col>\n  <ion-col col-3>\n  <div *ngIf="logged==true" >\n  <button ion-button (click)="opnchat()" style="background: transparent;\n  box-shadow: none;\n  margin-left: 20px;\n  margin-top: 0px;\n  color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n  </div> \n  </ion-col>\n  </ion-row>\n  </ion-grid> -->\n    <button ion-button menuToggle>\n      <ion-icon name="menu"> </ion-icon>\n    </button>\n    <div class="img1">\n      <img src="assets/imgs/logo.jpg">\n    </div>\n    <ion-buttons *ngIf="logged==true" end>\n      <button ion-button icon-only (click)="opnchat()">\n        <ion-icon name="chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let event of events; let i=index;">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5>\n          <img [src]="event.image" style="height: 148px;" />\n          <div style=" text-align: center; background-color:#efba00; padding-top: 5px;padding-bottom: 5px;">\n            <font style=" color: #000;font-size: 15px;">{{event.event_date}}</font>\n          </div>\n        </ion-col>\n        <ion-col col-7>\n          <ion-card-title>\n            <font color="#8b3532" (click)="eventDetail(event.id)">{{event.event_type}} </font>\n            <p style="border-bottom: 1px solid; font-weight: 500;">{{event.location}}\n              <br> {{event.place}} </p>\n          </ion-card-title>\n          <font color="#8b3532" style="font-weight: 500; padding-bottom: 2px;">Tickets Price: </font>\n          <font color="#8b3532" style=" font-size: 17px; font-weight: 500;">{{event.formated_price}}</font><br>\n          <p>\n            <ion-icon name="people" style="color:#8b3532;"></ion-icon>\n            <font color="black" style="font-weight: 500;"> Age: Men({{event.age_range_men}})</font>\n          </p>\n          <p>\n            <ion-icon name="people" style="color:#8b3532;"></ion-icon>\n            <font color="black" style="font-weight: 500;"> Age: Women({{event.age_range_women}})</font>\n          </p>\n          <!-- for Men Availability -->\n          <label color="#8b3532" style="font-weight: 500;">Men: </label>\n          <font [color]="event.availability_m[1]==\'yellow\'?\'#efba00\':event.availability_m[1]">\n            <label style="font-weight: 700;" *ngIf="event.availability_men != 0">{{event.availability_m[0]}} {{event.availability_m[1]== \'green\'? null : \'(\'+(event.availability_m[2])+\')\' }} </label>\n            <button *ngIf="event.availability_men <= 0" style="border-radius: 2px; overflow: hidden; height: 1.6rem; font-size: 1.2rem; font-weight: 300;margin-top: -2px;"\n              ion-button color="secondary" (click)="addToWaitingLists(event.id,\'M\')">join waiting List</button>\n          </font> <!-- for Men Availability in numbers= +\'( \'+event.availability_men+ \')\' -->\n          <!-- for Women Availability -->\n          <br> <label color="#8b3532" style="font-weight: 500;">Women: </label>\n          <font [color]="event.availability_f[1]==\'yellow\'?\'#efba00\':event.availability_f[1]">\n            <label style="font-weight: 700;" *ngIf="event.availability_women != 0">{{event.availability_f[0]}} {{event.availability_f[1]== \'green\'? null : \'(\'+(event.availability_f[2])+\')\' }} </label>\n            <button *ngIf="event.availability_women <= 0" style="border-radius: 2px; overflow: hidden; height: 1.6rem; font-size: 1.2rem; font-weight: 300;margin-top: -2px;"\n              ion-button color="secondary" (click)="addToWaitingLists(event.id,\'F\')">join waiting List</button>\n          </font> <!-- for Women Availability in numbers= +\'( \'+event.availability_women+ \')\' -->\n          <!-- <div ngIf=" user.gender == \'F\' " > ngIf="event.availability_women !=0 " -->\n          <ion-row>\n            <ion-col col-6>\n              <button ion-button color="danger" style="height: 2.6rem;font-size: 70%;margin: 7px 0px 2px -4px;" (click)="bookNow(event.id)"\n                full>BOOK NOW</button>\n            </ion-col>\n            <ion-col col-6>\n              <button ion-button color="danger" style="height: 2.6rem;font-size:70%;margin: 7px 0px 2px -3px;" (click)="eventDetail(event.id,event.event_date)"\n                full>MORE INFO</button>\n            </ion-col>\n          </ion-row>\n          <!-- </div> -->\n\n          <!-- <div *ngIf=" user.gender == \'M\' " >\n  <ion-row >\n  <ion-col col-6 *ngIf="event.availability_men !=0 ">\n  <button ion-button color="danger" style="height: 2.6rem;font-size: 70%;margin: 7px 0px 2px -4px;" (click)="bookNow(event.id)" full>Book Now</button>\n  </ion-col>\n  <ion-col col-6>\n  <button ion-button color="danger" style="height: 2.6rem;font-size:70%;margin: 7px 0px 2px -3px;" (click)="eventDetail(event.id)" full>More Info</button>\n  </ion-col>\n  </ion-row>\n  </div>\n  <div *ngIf=" user.gender == \'\' " >\n  <ion-row >\n  <ion-col col-6 >\n  <button ion-button color="danger" style="height: 2.6rem;font-size: 70%;margin: 7px 0px 2px -4px;" (click)="bookNow1(event.id)" full>Book Now</button>\n  </ion-col>\n  <ion-col col-6>\n  <button ion-button color="danger" style="height: 2.6rem;font-size:70%;margin: 7px 0px 2px -3px;" (click)="eventDetail(event.id)" full>More Info</button>\n  </ion-col>\n  </ion-row>\n  </div=> -->\n        </ion-col>\n      </ion-row>\n\n\n\n    </ion-grid>\n    <div *ngIf="eventStartDate(event.event_activation_time) <= 14">\n      <p *ngIf="event.eodiscount" style="text-align: center; background-color: #efba00; color:black;font-size: 1.5rem;font-weight: 700;">Early\n        Bird Discount : <span style="color: green; font-weight: 700;"> {{event.eodiscount}}% off if purchased\n          now </span></p>\n    </div>\n    <p style="text-align: center;padding: 10px 0;padding: 8px 0;color:black;margin: 0 10px 10px 10px;font-weight: 800;font-size: 1.7rem; ">Booking\n      Time Left: <span class="counter">{{eventTimer(event.date_time,time)}}</span></p>\n  </ion-card>\n  <ion-card class="card_io" *ngIf="isevents">\n    <h2 align="center" style="margin: 5px 0px 2px 0px; font-size: 20px; color: #efba00;">No Events Found.</h2>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventWaitingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EventWaitingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventWaitingListPage = /** @class */ (function () {
    function EventWaitingListPage(navCtrl, toastCtrl, commonService, loadingCtrl, platform, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.isevents = true;
        this.loggedData = JSON.parse(localStorage.getItem('user'));
        this.loggedId = this.loggedData['userId'];
        this.showLoader();
        this.commonService.getWaitingList(this.loggedData['userId']).subscribe(function (result1) {
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.requests = result['Msg']['event_list']['result'];
                _this.isevents = result['Msg']['event_list']['result'].length > 0 ? true : false;
                _this.loading.dismiss();
            }
        });
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            //backAction();
        }, 2);
    }
    EventWaitingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecivedRequestPage');
    };
    EventWaitingListPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    EventWaitingListPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    EventWaitingListPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EventWaitingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-waiting-list',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/event-waiting-list/event-waiting-list.html"*/'<!--\n  Generated template for the EventWaitingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <!-- <ion-grid style="align-items: normal;" >\n            <ion-row>\n              <ion-col col-3><button ion-button menuToggle>\n                  <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-6><div style="width: 100% !important;\n                margin-right: 15% !important;\n                margin-top: -5px;">\n                  <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n                </div>\n              </ion-col>\n              <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n                box-shadow: none;\n                margin-left: 20px;\n                margin-top: 0px;\n                color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n              </ion-col>\n            </ion-row>\n          </ion-grid> -->\n          <button ion-button menuToggle>\n              <ion-icon name="menu"> </ion-icon>\n            </button>\n            <div class="img1">\n              <img src="assets/imgs/logo.jpg">\n            </div>\n            <ion-buttons  end>\n                <button ion-button icon-only (click)="opnchat()">\n                  <ion-icon name="chatbubbles"></ion-icon>\n                </button>\n              </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <div style="text-align: center; color: #efba00; font-size: 20px; opacity: 0.8; filter: alpha(opacity=50); background-color: #800020; border-radius: 20px; margin: 5px 50px 0px 50px;">Event Waiting List </div>\n      <ion-list *ngFor="let request of requests; let i=index;">\n        <ion-card class="card_io">\n          <ion-card-header>\n          <div style="text-align:center;color:#ffffff;font-weight:bold;">{{request.event_type}}</div>  \n          </ion-card-header>\n          <table>\n              <tr>\n                <td><font style="color:#ffffff; font-weight:bold ">Theme Name</font></td>\n                <td>{{request.event_type}}</td>\n              </tr>\n              \n              <tr>\n                <td><font style="color:#ffffff; font-weight:bold ">Venue</font></td>\n                <td> {{request.location}}</td>\n              </tr>\n              \n              <tr>\n              <td><font style="color:#ffffff; font-weight:bold ">Location</font></td>\n              <td>{{request.place}}</td>\n              \n              </tr>\n          \n              <tr>\n                <td><font style="color:#ffffff; font-weight:bold ">Event Date</font></td>\n                <td>{{request.date}}</td>\n                \n                </tr>\n                \n                  <tr>\n                    <td><font style="color:#ffffff; font-weight:bold ">Joined List On</font></td>\n                    <td>{{request.waitinglist_join_time_short}}</td>\n                  </tr>\n                  \n                  </table>\n                </ion-card>\n                </ion-list>\n     \n                <ion-card class="card_io" *ngIf="!isevents"class="card_io" >\n                  <h2 align="center" style="margin: 5px 0px 2px 0px; font-size: 20px; color: #efba00;">All up to date.....</h2>\n                  <h3 style="margin: 2px 0px 7px 16px; font-size: 20px; color: #efba00;" >You are not currently on any event waiting list.</h3>\n              </ion-card>\n            \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/event-waiting-list/event-waiting-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], EventWaitingListPage);
    return EventWaitingListPage;
}());

//# sourceMappingURL=event-waiting-list.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ticket_registration_ticket_registration__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_waiting_list_event_waiting_list__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_events__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_friend_event_friend__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventDetailsPage = /** @class */ (function () {
    function EventDetailsPage(navCtrl, commonService, sanitizer, loadingCtrl, toastCtrl, platform, alertCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.commonService = commonService;
        this.sanitizer = sanitizer;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.user = {
            gender: '',
        };
        this.user = JSON.parse(localStorage.getItem('user'));
        this.logged = localStorage.getItem('user') ? true : false;
        this.mapurl = '';
        //alert(this.eventDate);
        if (navParams.get('event_id')) {
            this.showLoader();
            this.commonService.getEventDetail(navParams.get('event_id')).subscribe(function (result1) {
                var result = JSON.parse(result1['_body']);
                _this.eventDate1 = result['result']['date_time'];
                _this.eventDate2 = Number(_this
                    .eventDate1);
                //this.changeDate();
                console.log("event detail =>", result);
                _this.loading.dismiss();
                _this.datet();
                if (result['Status']) {
                    _this.data = 'Where';
                    _this.event = result['result'];
                    _this.review = result['result']['reviews'];
                    _this.location = result['result']['map'].replace('<iframe src="', '').replace('https://', 'https://').replace('" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>', '');
                    _this.mapurl = _this.location ? _this.sanitizer.bypassSecurityTrustResourceUrl(_this.location) : '';
                    //console.log(this.location);
                }
            });
        }
        platform.registerBackButtonAction(function () {
            //console.log("second");
            //alert('Back pressed');
            // this.navCtrl.pop();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__events_events__["a" /* EventsPage */], navParams.get('search'));
            //backAction();
        }, 2);
    }
    EventDetailsPage.prototype.addToWaitingLists = function (event_id, gender, isloader) {
        var _this = this;
        if (this.logged == false) {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'Please login to add yourself to guest list',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else if (!isloader)
            this.showLoader();
        //  if (!isloader)
        //   this.showLoader();
        // console.log(id);
        this.commonService.addToWaitingLists(event_id, this.user['userId'], gender).subscribe(function (result1) {
            if (!isloader) {
                _this.loading.dismiss();
            }
            var result = JSON.parse(result1['_body']);
            if (result['Status']) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__event_waiting_list_event_waiting_list__["a" /* EventWaitingListPage */]);
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: result['result']['text'],
                    buttons: ['Dismiss']
                });
                alert_2.present();
            }
        });
    };
    EventDetailsPage.prototype.bookNow = function (event_id) {
        if (this.logged == true) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__ticket_registration_ticket_registration__["a" /* TicketRegistrationPage */], { event_id: event_id });
        }
        else if (this.logged == false) {
            this.loginAlert();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */], { event_id: event_id });
        }
    };
    EventDetailsPage.prototype.loginAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Please login to book an event.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    // bookNow(event_id: number){
    //   if (this.user)
    //     this.navCtrl.setRoot(TicketRegistrationPage, { event_id: event_id });
    //   else
    //     this.navCtrl.setRoot(LoginPage, { event_id: event_id });
    // }
    EventDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventDetailsPage');
    };
    EventDetailsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please Wait...'
        });
        this.loading.present();
    };
    EventDetailsPage.prototype.datet = function () {
        var timestamp = this.eventDate2;
        // alert(this.eventDate2);
        var pubDate = new Date(timestamp * 1000);
        var weekday = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
        var monthname = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        this.eventDate = weekday[pubDate.getDay()] + ' ' + monthname[pubDate.getMonth()] + ' ' + pubDate.getDate() + ', ' + pubDate.getFullYear();
        //alert(this.eventDate);
    };
    EventDetailsPage.prototype.opnchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__event_friend_event_friend__["a" /* EventFriendPage */]);
    };
    EventDetailsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EventDetailsPage.prototype.eventStartDate = function (date) {
        //alert(date);
        var date2 = new Date();
        var date1 = new Date(date * 1000);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
        // alert(dayDifference);
        return dayDifference;
    };
    EventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-event-details',template:/*ion-inline-start:"/Users/parikshit/Desktop/MMG-ash/src/pages/event-details/event-details.html"*/'<!--\n  Generated template for the EventDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <!-- <ion-grid style="align-items: normal;" >\n          <ion-row>\n            <ion-col col-3><button ion-button menuToggle>\n                <ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="menu"> </ion-icon>\n              </button>\n            </ion-col>\n            <ion-col col-6><div style="width: 100% !important;\n              margin-right: 15% !important;\n              margin-top: -5px;">\n                <img style="    width: 100%;" src="assets/imgs/logo.jpg">\n              </div>\n            </ion-col>\n            <ion-col col-3><button  ion-button (click)="opnchat()" style="background: transparent;\n              box-shadow: none;\n              margin-left: 20px;\n              margin-top: 0px;\n              color: #000000" ><ion-icon style="font-size: 3.2rem;margin-top: 5px; " name="chatbubbles"></ion-icon></button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> -->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"> </ion-icon>\n          </button>\n          <div class="img1">\n            <img src="assets/imgs/logo.jpg">\n          </div>\n          <ion-buttons *ngIf="logged==true" end>\n              <button ion-button icon-only (click)="opnchat()">\n                <ion-icon name="chatbubbles"></ion-icon>\n              </button>\n            </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  >\n  <ion-card  *ngIf="event" >\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n    <img [src]="event.large_location_image"    style= "height: 195px;" />\n    <div style=" text-align: center; background-color:#efba00; padding-top: 5px;padding-bottom: 5px;"><font style=" color: #000;font-size: 15px;">{{eventDate}}</font></div>\n    </ion-col>\n    <ion-col col-6 style="margin-top: -1px;" >\n      <ion-card-title>\n          <font color="#8b3532">{{event.event_type}} </font>\n          \n        <p style="border-bottom: 1px solid; font-weight: bold;">{{event.location}}\n        <br> {{event.place}} </p>\n      </ion-card-title>\n      <p>\n      <font color="black" style="font-weight: 600; padding-bottom: 2px;" >Organized by: </font><font color="black" style="font-weight: 600; padding-bottom: 2px;" >{{event.event_org}}</font>\n      </p>\n      <p>\n        <ion-icon name="calendar" style="color:#8b3532;"></ion-icon><font color="black" style="font-weight: 600;"> {{eventDate}} </font>\n      </p>\n       <p>\n        <ion-icon name="people" style="color:#8b3532;"></ion-icon><font color="black" style="font-weight: 600;"> Age: M({{event.age_range_men}})</font>\n      </p>\n      <p>\n        <ion-icon name="people" style="color:#8b3532;"></ion-icon>\n        <font color="black" style="font-weight: 600;"> Age: W({{event.age_range_women}})</font>\n      </p>\n      <p>\n        <ion-icon name="cash" style="color:#8b3532;"></ion-icon><font color="black" style="font-weight: 600;"> {{event.formated_price}}</font>\n      </p>\n     \n      <!-- <ion-row style="padding-left: 33px;">\n         \n            <button ion-button color="danger" style="height: 2.6rem;font-size: 1.2rem;" (click)="addReviews()">Add Review</button>                   \n      </ion-row> -->\n   </ion-col>\n    </ion-row>\n    <div *ngIf="eventStartDate(event.event_activation_time) <= 14">\n  <!-- <p *ngIf="event.eodiscount" style="text-align: center; background-color: #efba00; color:black;font-size: 1.5rem;font-weight: 700;">Early Bird Discount : <span style="color: green; font-weight: 700;" > {{event.eodiscount}}% off if purchased now </span></p> --> \n  <p *ngIf="event.eodiscount" style="text-align: center; background-color: #efba00; color:black;font-size: 1.5rem;font-weight: 700;">Early\n    Bird Discount : <span style="color: green; font-weight: 700;"> {{event.eodiscount}}% off if purchased\n      now </span></p>   \n</div>\n    <ion-row>\n\n      <ion-col col-6>\n        <!-- <button ion-button block color="danger" style="height: 2.6rem;font-size: 1.2rem;" outline >Men: <font [color]="event.availability_m[1]">{{event.availability_m[0]+\'(\'+event.availability_men+ \')\'}}</font></button> -->\n        <label color="#8b3532" style="font-weight: 700;">Men: </label>\n\n             <font [color]= "event.availability_m[1]==\'yellow\'?\'#efba00\':event.availability_m[1]">\n               <label style="font-weight: 700;" *ngIf="event.availability_men != 0" >{{event.availability_m[0]}} {{event.availability_m[1]== \'green\'? null : \'(\'+(event.availability_m[2])+\')\' }} </label>\n             <button *ngIf="event.availability_men <= 0" style="border-radius: 2px; overflow: hidden; height: 1.6rem; font-size: 1.2rem; font-weight: 300;margin-top: -2px;" ion-button  color="secondary" (click)="addToWaitingLists(event.id,\'M\')">join waiting List</button>\n             </font>                                    <!-- +\'( \'+event.availability_men+ \')\' for show the availability in numbers -->\n    </ion-col>\n    <ion-col col-6>\n      <!-- <button ion-button block color="danger" style="height: 2.6rem;font-size: 1.2rem;" outline >Woman: <font [color]="event.availability_f[1]">{{event.availability_f[0]+\'(\'+event.availability_men+ \')\'}}</font></button> -->\n      <label color="#8b3532" style="font-weight: 700;">Women: </label>\n\n      <font [color]="event.availability_f[1]==\'yellow\'?\'#efba00\':event.availability_f[1]">\n          <label style="font-weight: 700;" *ngIf="event.availability_women != 0" >{{event.availability_f[0]}} {{event.availability_f[1]== \'green\'? null : \'(\'+(event.availability_f[2])+\')\' }}</label>\n        <button *ngIf="event.availability_women <= 0" style="border-radius: 2px; overflow: hidden; height: 1.6rem; font-size: 1.2rem; font-weight: 300;margin-top: -2px;" ion-button  color="secondary" (click)="addToWaitingLists(event.id,\'F\')">join waiting List</button>\n      </font>                                                      <!-- +\'( \'+event.availability_women+ \')\' for show the availability in numbers -->\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n   </ion-card>\n   <ion-card>\n    <div>\n      <ion-segment [(ngModel)]="data" color="danger">\n        <ion-segment-button value="Where" >\n          <font color="#8b3532" style="font-weight: 1000;" > WHERE</font>\n\n\n        </ion-segment-button>\n        <ion-segment-button value="Details">\n          <font color="#8b3532" style="font-weight: 1000;"> DETAILS</font>\n        </ion-segment-button>\n        <ion-segment-button value="Organizers">\n          <font color="#8b3532" style="font-weight: 1000;"> ORGANISER</font>\n        </ion-segment-button>\n        <ion-segment-button value="Reviews">\n          <font color="#8b3532" style="font-weight: 1000;"> REVIEW</font>\n        </ion-segment-button>\n        <ion-segment-button value="Map">\n            <font color="#8b3532" style="font-weight: 1000;"> MAP </font>\n          </ion-segment-button>\n      </ion-segment>\n    </div>\n    \n    <div [ngSwitch]="data">\n      <ion-list *ngSwitchCase="\'Details\'">\n        <ion-card>\n\n          <ion-card-header>\n            <ion-slides autoplay="600" loop="true" speed="3000" style="height: 213px;">\n              <ion-slide >\n                <img [src]="event.large_location_image">\n              </ion-slide>\n              <ion-slide > \n                <img src="assets/imgs/past_event2.jpg">\n\n               <!-- <img [src]="event.large_location_image"> -->\n\n\n              </ion-slide>\n              <!-- <ion-slide >\n                <img [src]="event.large_location_image">\n              </ion-slide> -->\n            </ion-slides>\n          </ion-card-header>\n        \n          <ion-card-content>\n              <table>\n                  <tr>\n                    <td><font style="color:#8b3532; font-weight:bold ">Theme Name</font></td>\n                    <td>{{event.event_type}}</td>\n                  </tr>\n                  \n                  <tr>\n                    <td><font style="color:#8b3532; font-weight:bold ">Theme Description</font></td>\n                    <td> {{event.theme_description}} </td>\n                  </tr>\n                  \n                  <tr>\n                  <td><font style="color:#8b3532; font-weight:bold ">Price</font></td>\n                  <td>£{{event.price}}</td>\n                  \n                  </tr>\n              \n                  <tr>\n                    <td><font style="color:#8b3532; font-weight:bold ">Age Guide</font></td>\n                    <td>Men ({{event.age_range_men}}) , Women ({{event.age_range_women}})</td>\n                       \n                    </tr>\n                    <tr>\n                      <td><font style="color:#8b3532; font-weight:bold ">Event Description</font></td>\n                      <td>{{event.description}}</td>\n                  \n                      </tr>\n                      <tr>\n                        <td><font style="color:#8b3532; font-weight:bold ">Doors Open</font></td>\n                        <td>{{event.dooropen_time}}</td>\n                      </tr>\n                      <tr>\n                        <td><font style="color:#8b3532; font-weight:bold ">Event Start</font></td>\n                        <td>{{event.start_time}}</td>\n                      </tr>\n                      <tr>\n                        <td><font style="color:#8b3532; font-weight:bold ">Events Ends</font></td>\n                        <td>{{event.eventend_time}}</td>\n                      </tr>\n                      </table>\n          </ion-card-content>\n          <button ion-button round full style="margin: 3% 0 0 0;" (click)="bookNow(event.id)">BOOK NOW</button>\n        </ion-card>\n      </ion-list>\n      \n\n        <ion-list *ngSwitchCase="\'Where\'">\n            <ion-card>\n                <img [src]="event.large_location_image" style="height: 145px; text-align: left;\n                padding: 0px 10px;" /><br>\n                <p style="text-align: justify; padding: 13px; padding-top: 1px;"> {{event.location}} in {{event.place}} is a great place for meeting new people and having a socially relaxing and entertaining time. You will not be let down by our popular {{event.event_type}} events, hosted by our excellent speed dating hosts. If you have not already booked, book now and be ready to meet someone new.  \n                  </p>\n\n                  <table>\n                      <tr>\n                        <td><font style="color:#8b3532; font-weight:bold ">Venue</font></td>\n                        <td>{{event.location}}</td>\n                      </tr>\n                      \n                      <tr>\n                        <td><font style="color:#8b3532; font-weight:bold ">Venue Address</font></td>\n                        <td>{{event.venue_address}}</td>\n                      </tr>\n                      <tr>\n                        <td>\n                            <font style="color:#8b3532; font-weight:bold ">Postcode</font>\n                        </td>\n                        <td>{{event.venue_postcode}}</td>\n                      </tr>\n                      <tr>\n                      <td><font style="color:#8b3532; font-weight:bold ">Tel</font></td>\n                      <td>{{event.venue_phone_no}} – Please note this is not a booking line</td>\n                      \n                      </tr>\n                  \n                     \n                      </table>\n                      <button ion-button round full style="margin: 3% 0 0 0;" (click)="bookNow(event.id)">BOOK NOW</button>\n            </ion-card>\n          </ion-list>\n      <ion-list *ngSwitchCase="\'Organizers\'">\n              <ion-card>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-6>\n                        <img [src]="event.organiser_detail.imageUrl" style="height: 80%" />\n           \n                  </ion-col>\n                  <ion-col col-6>\n                    <ion-card-title>\n                        <h1 style="color:#8b3532; border-bottom: 1px solid; font-weight:bold">{{event.organiser_detail.first_name}}</h1>\n                      <h2 style="font-weight: 600; color:#8b3532"> About Organiser </h2>\n                    </ion-card-title>\n                    <br>\n                  <p>{{event.organiser_detail.about_us}}</p>\n                    <br>\n                   </ion-col>\n                  </ion-row>\n                  </ion-grid>\n                  <button ion-button round full style="margin: 3% 0 0 0;" (click)="bookNow(event.id)">BOOK NOW</button>\n                 </ion-card>\n          \n        </ion-list>\n        <ion-list *ngSwitchCase="\'Map\'">\n            <ion-card *ngIf="mapurl" >\n                <ion-card-content id="map-html">\n                  <iframe [src]=\'mapurl\' width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>\n                </ion-card-content>\n                <button ion-button round full style="margin: 3% 0 0 0;" (click)="bookNow(event.id)">BOOK NOW</button>\n               </ion-card>\n               <ion-card *ngIf="!mapurl">\n                 <div style="font-size: 20px; font-weight: 700; color: #e13838; text-align: center;" >  Location not available</div>\n              </ion-card>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'Reviews\'">\n              <ion-card *ngFor="let review of review; let i=index;" >\n                  <ion-card-header style="color: #efba00;font-size: 2.2em;">\n                      <div *ngIf="review.rating == 5.0">\n                          <ion-icon name="star"></ion-icon>\n                          <ion-icon  name="star"></ion-icon>\n                          <ion-icon name="star"></ion-icon>\n                          <ion-icon name="star"></ion-icon>\n                          <ion-icon name="star"></ion-icon>\n                        </div>\n                        <div *ngIf="review.rating == 4.5">\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon  name="star"></ion-icon>\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star-half"></ion-icon>\n                          </div>\n                        <div *ngIf="review.rating == 4.0">\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star"></ion-icon>\n                            <ion-icon name="star-outline"></ion-icon>\n                          </div>\n                          <div *ngIf="review.rating == 3.5">\n                              <ion-icon  name="star"></ion-icon>\n                              <ion-icon name="star"></ion-icon>\n                              <ion-icon name="star"></ion-icon>\n                              <ion-icon name="star-half"></ion-icon>\n                              <ion-icon name="star-outline"></ion-icon>\n                            </div>\n                          <div *ngIf="review.rating == 3.0">\n                              <ion-icon name="star"></ion-icon>\n                              <ion-icon name="star"></ion-icon>\n                              <ion-icon name="star"></ion-icon>\n                              <ion-icon name="star-outline"></ion-icon>\n                              <ion-icon name="star-outline"></ion-icon>\n                            </div>\n                            <div *ngIf="review.rating == 2.5">\n                                <ion-icon  name="star"></ion-icon>\n                                <ion-icon name="star"></ion-icon>\n                                <ion-icon name="star-half"></ion-icon>\n                                <ion-icon name="star-outline"></ion-icon>\n                                <ion-icon name="star-outline"></ion-icon>\n                              </div>\n                            <div *ngIf="review.rating == 2.0">\n                                <ion-icon name="star"></ion-icon>\n                                <ion-icon name="star"></ion-icon>\n                                <ion-icon name="star-outline"></ion-icon>\n                                <ion-icon name="star-outline"></ion-icon>\n                                <ion-icon name="star-outline"></ion-icon>\n                              </div>\n                              <div *ngIf="review.rating == 1.5">\n                                  <ion-icon  name="star"></ion-icon>\n                                  <ion-icon name="star-half"></ion-icon>\n                                  <ion-icon name="star-outline"></ion-icon>\n                                  <ion-icon name="star-outline"></ion-icon>\n                                  <ion-icon name="star-outline"></ion-icon>\n                                </div>\n                              <div *ngIf="review.rating == 1.0">\n                                  <ion-icon name="star"></ion-icon>\n                                  <ion-icon name="star-outline"></ion-icon>\n                                  <ion-icon name="star-outline"></ion-icon>\n                                  <ion-icon name="star-outline"></ion-icon>\n                                  <ion-icon name="star-outline"></ion-icon>\n                                </div>\n                  </ion-card-header>\n                  <ion-card-content>\n                    \n                    <label *ngIf="review.rating == 5.0" style="padding: 2px 8px 2px 8px; background-color: #5cb85c;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                    <label *ngIf="review.rating == 4.5" style="padding: 2px 8px 2px 8px; background-color: #5cb85c;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                    <label *ngIf="review.rating == 4.0" style="padding: 2px 8px 2px 8px; background-color: #428bca;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                    <label *ngIf="review.rating == 3.5" style="padding: 2px 8px 2px 8px; background-color: #428bca;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                    <label *ngIf="review.rating == 3.0" style="padding: 2px 8px 2px 8px; background-color: #428bca;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                    <label *ngIf="review.rating == 2.5" style="padding: 2px 8px 2px 8px; background-color: #428bca;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                    <label *ngIf="review.rating == 2.0" style="padding: 2px 8px 2px 8px; background-color: #efba00;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                    <label *ngIf="review.rating == 1.5" style="padding: 2px 8px 2px 8px; background-color: #efba00;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                    <label *ngIf="review.rating == 1.0" style="padding: 2px 8px 2px 8px; background-color: #dc1717;font-size: 18px; border-radius: 4px; color: white;" >Rated {{review.rating}} out of 5.0</label>\n                   <br> <p style="font-weight:bold">By:{{review.user}} on  <span>{{review.created_on | date:\'dd/MM/y\' }}</span></p>\n                    <h2 style="font-weight:bold;">Review</h2>\n                    <p>{{review.description}}</p>\n              \n                    <!-- <div class="rating">\n                      <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>\n                      </div> -->\n                      <!-- <button ion-button color="default">Rated 4.0 out of 5</button><br>\n                      <p style="font-weight:bold">By:Tom Tester on 14/09/2015</p>\n                      <p>Review</p> \n                      <p  style="border-bottom: 2px solid #f1f1f1">Hosts were grate and had an enjoyable time</p> -->\n                  </ion-card-content> \n                 \n                </ion-card>\n                <button ion-button round full style="margin: 3% 0 0 0;" (click)="bookNow(event.id)">BOOK NOW</button>\n        \n          \n        </ion-list>\n      </div> \n   </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/parikshit/Desktop/MMG-ash/src/pages/event-details/event-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* NavParams */]])
    ], EventDetailsPage);
    return EventDetailsPage;
}());

//# sourceMappingURL=event-details.js.map

/***/ })

},[491]);
//# sourceMappingURL=main.js.map