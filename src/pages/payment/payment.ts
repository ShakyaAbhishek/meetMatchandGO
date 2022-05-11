import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Platform } from 'ionic-angular';
import { CommonService } from '../../service/common.service';
import { MyTicketsPage } from "../my-tickets/my-tickets";
import { TicketHolderDetailsPage } from '../ticket-holder-details/ticket-holder-details';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { EventFriendPage } from '../event-friend/event-friend';
declare var paypal: any;
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage implements AfterViewInit {
  loading: any;
  userdetail: any;
  tickets: any;
  eventDetail: any;
  men =[];
  menTotal: number;
  women =[];
  womenTotal: number;
  paypalResponse: any;
  price: any;
  tmpOrderId: number;
  constructor(public navCtrl: NavController,
    public commonService: CommonService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public platform: Platform,
    private payPal: PayPal,
    public navParams: NavParams) {
      //console.log(this.navParams.get('userdetail'), this.navParams.get('tickets'), this.navParams.get('eventDetail'));
      this.userdetail = JSON.parse(this.navParams.get('userdetail'));
      //console.log(this.userdetail);
      this.tickets = JSON.parse(this.navParams.get('tickets'));
      //console.log("Tickets =>",this.tickets)
      if (this.tickets){
        for (var i = 0; i < this.tickets.length; i++){
          if (this.tickets[i].gender=='M')
          {
            this.men.push(this.tickets[i]);
          }
          else{
            this.women.push(this.tickets[i]);
          }
          this.menTotal = this.men.length;
          this.womenTotal = this.women.length;
        }
      }
      this.eventDetail = JSON.parse(this.navParams.get('eventDetail'));
      this.price = JSON.parse(this.navParams.get('price'));
      if (this.userdetail && this.tickets && this.eventDetail){
          this.showLoader();
          this.commonService.storeTmpOrder({
            user_id: this.userdetail['id'],
            discount_code: this.userdetail['code']?this.userdetail['code']:'',
            discount: this.price['discount']?this.price['discount']:0,
            group_id: this.price['groupDiscount']?this.price['groupDiscount']['id']:0,
            event_id: this.eventDetail['id'],
            price: this.price['total'],
            users: this.tickets

          }).subscribe((result1) => {
            let result = JSON.parse(result1['_body']);
            this.loading.dismiss();
            if (result['Status'] == true) {
              this.tmpOrderId = result['order_id'];
            }
          });
      }
      platform.registerBackButtonAction(() => {
        //console.log("second");
        //alert('Back pressed');
        // this.navCtrl.pop();
        this.navCtrl.setRoot(TicketHolderDetailsPage,{ userDetail: JSON.stringify(this.userdetail) });
        //backAction();
      },2);
  }
  opnchat(){
    this.navCtrl.setRoot(EventFriendPage);
  }
  ngAfterViewInit() {
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
  }
  payment(){
    var total = this.price['total'].toString();
    var $this = this;
    this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'ATMDuuNhE157HEqvAg4-1XYDVldy5Opzwcc0lfoR5vQwj9zgLoTvgJ-NmJtd8pK5JJk3PG1DnGmV9yFx'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(total, $this.eventDetail['currency_code'], 'MEETMATCHANDGO Event at ' + $this.eventDetail['location'] + ' - ' + $this.eventDetail['place'] + ' on ' + $this.eventDetail['event_date'] + ' at ' + $this.eventDetail['start_time'], 'MEETMATCHANDGO Event at ' + $this.eventDetail['location'] + ' - ' + $this.eventDetail['place'] + ' on ' + $this.eventDetail['event_date'] + ' at ' + $this.eventDetail['start_time']);
        this.payPal.renderSinglePaymentUI(payment).then((response) => {
          // Successfully paid
          //alert(JSON.stringify(response));
          var payment = response.response;
          console.log(payment);
          if (payment.state.toUpperCase() == 'APPROVED' || payment.state.toUpperCase() == 'COMPLETED' || payment.state.toUpperCase() == 'PENDING'){
            $this.showLoader();
            $this.commonService.notifyPayment({
              order_id: $this.tmpOrderId,
              payment_status: payment.state.toUpperCase(),
              txn_id: payment.id,
              mc_currency: $this.eventDetail['currency_code'],
              response: payment
            }).subscribe((result1) => {
              let result = JSON.parse(result1['_body']);
              $this.loading.dismiss();
              if (result['Status'] == true) {
                $this.presentToast(result['Msg'].toString());
                $this.navCtrl.setRoot(MyTicketsPage);
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
        }, (error) => {
          alert(JSON.stringify(error));
          // Error or render dialog closed without being successful
        });
      }, (error) => {
        alert(JSON.stringify(error));
        // Error in configuration
      });
    }, (error) => {
      alert(JSON.stringify(error));
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
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
}
