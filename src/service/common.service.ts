import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonService {
    constructor(public http: Http ) {


        this.http = http;
        console.log('Common ServicesProvider Provider');
    }
    endpoint_url: string = 'https://www.meetmatchandgo.com/api/';


    // user and admin login
    getEventTypes() {
        return this.http.get(
            this.endpoint_url + 'evenTypes').pipe(
                map(res => res)
            );
    }
    getFaqs() {
        return this.http.get(
            this.endpoint_url + 'faqList').pipe(
                map(res => res)
            );
    }
    getInterests() {
        return this.http.get(
            this.endpoint_url + 'getInterest').pipe(
                map(res => res)
            );
    }
    getContactDetail() {
        return this.http.get(
            this.endpoint_url + 'contactDetails').pipe(
                map(res => res)
            );
    }
    getTermCondition() {
        return this.http.get(
            this.endpoint_url + 'cmsPageDetail?page_id=2').pipe(
                map(res => res)
            );
    }
    getCountries() {
        return this.http.get(
            this.endpoint_url + 'countryList').pipe(
                map(res => res)
            );
    }
    getCities(country_id:number) {
        return this.http.get(
            this.endpoint_url + 'cities?country_id=' + country_id).pipe(
                map(res => res)
            );
    }
    getAgeLimits() {
        return this.http.get(
            this.endpoint_url + 'ageLimits').pipe(
                map(res => res)
            );
    }
    getPastEvents(user_id:number) {
        return this.http.get(
            this.endpoint_url + 'pastEvents?user_id='+user_id).pipe(
                map(res => res)
            );
    }
    getliveEvents(user_id: number){
        return this.http.get(
            this.endpoint_url + 'liveEvents?user_id=' + user_id).pipe(
                map(res => res)
            );
    }
    getFriendRequest(user_id: number) {
        return this.http.get(
            this.endpoint_url + 'getReceivedRequestByUser?user_id=' + user_id).pipe(
                map(res => res)
            );
    }
    addReview(review: any) {
        return this.http.get(
            this.endpoint_url + 'addReview?' + this.build_query(review, 0, '')).pipe(
                map(res => res)
            );
    }
    getEventsBySearch(search) {
        return this.http.get(
            this.endpoint_url + 'eventSearch?' + this.build_query(search, 0, '')).pipe(
                map(res => res)
            );
    }
    getGroupDiscount(group: number){
        return this.http.get(
            this.endpoint_url + 'getGroupDiscount?person=' + group).pipe(
                map(res => res)
            );
    }
    storeTmpOrder(order: any){
        return this.http.get(
            this.endpoint_url + 'addOrder?order=' + JSON.stringify(order)).pipe(
                map(res => res)
            );
    }
    notifyPayment(payment:any) {
        return this.http.get(
            this.endpoint_url + 'paymentnotify?payment=' + JSON.stringify(payment)).pipe(
                map(res => res)
            );
    }
    getEventDetail(event_id: number){
        return this.http.get(
            this.endpoint_url + 'eventDetail?event_id=' + event_id).pipe(
                map(res => res)
            );
    }
    validateCode(user:any){
        return this.http.get(
            this.endpoint_url + 'validateCoupon?' + this.build_query({user_id: user.id, code: user.code}, 0, '')).pipe(
                map(res => res)
            );
    }
    sendEnquiry(user: any) {
        return this.http.get(
            this.endpoint_url + 'contactForm?' + this.build_query(user, 0, '')).pipe(
                map(res => res)
            );
    }
    getAllFriendByUser(user: any) {
        return this.http.get(
            this.endpoint_url + 'getAllFriendByUser?user_id=' + user).pipe(
                map(res => res)
            );
    }
    blockUser(block_user_id:number ,user_id:number,action){
        var actionFunction= 'blockUser';
        if(action==0)
            actionFunction= 'unblockUser';
        return this.http.get(
            this.endpoint_url + actionFunction + '?block_user_id='+block_user_id+'&user_id='+user_id ).pipe(
                map(res => res)
            
        );
    }
    // getPendingSentRequestByUser(user: any) {
    //     return this.http.get(
    //         this.endpoint_url + 'getPendingSentRequestByUser?user_id=' + this.build_query(user, 0, '')).pipe(
    //             map(res => res)
    //         );
    // }
    getPendingSentRequestByUser(user_id: number) {
        return this.http.get(
            this.endpoint_url + 'getPendingSentRequestByUser?user_id=' + user_id).pipe(
                map(res => res)
            );
    }
    getCompleteEvent(user_id:number){
        return this.http.get(
            this.endpoint_url + 'getEventByMember?user_id=' +user_id).pipe(
                map(res => res)
            
        );
    }
    getUserMemberByEvents(event_id:number ,user_id:number){
        return this.http.get(
            this.endpoint_url + 'getUserMemberByEvent?event_id='+event_id+'&user_id='+user_id ).pipe(
                map(res => res)
            
        );
    }
    getWaitingList(user_id:number){
        return this.http.get(
            this.endpoint_url + 'waitingList?user_id=' +user_id).pipe(
                map(res => res)
            
        ); 
    }
    addToWaitingLists(event_id:number ,user_id:number,gender:string){
        return this.http.get(
            this.endpoint_url + 'addToWaitingList?event_id='+event_id+'&user_id='+user_id+'&gender='+gender ).pipe(
                map(res => res)
            
        );
    }

    acceptRequests(request_id: any,user_id:number,status) {
        var api = '';
        if(status==1)
            api = 'acceptFriendRequest';
        else
            api = 'declineFriendRequest';
        return this.http.get(
            this.endpoint_url + api+'?request_id='+request_id+'&user_id='+user_id ).pipe(
                map(res => res)
            
        );
    }
    sendfriendRequests(sender_id: any,receiver_id:number,event_id:number) {
        return this.http.get(
            this.endpoint_url + 'sendfriendRequest?sender_id='+sender_id+'&receiver_id='+receiver_id+'&event_id='+event_id ).pipe(
                map(res => res)
            
        );
    }
    updateFCMTokenByUser(token:any,user){
        return this.http.get(
            this.endpoint_url + 'updateDeviceToken?' + this.build_query({id:user,fcm_token:token}, 0, '')).pipe(
                map(res => res)
            );
    }
    chatEnable(data){
        return this.http.get(
            this.endpoint_url + 'chatEnable?' + this.build_query(data, 0, '')).pipe(
                map(res => res)
            );
    }
    getChatStatus(sender,receiver){
        return this.http.get(
            this.endpoint_url + 'getChatStatus?sender=' +sender+'&receiver='+receiver).pipe(
                map(res => res)
            )
    }
    sendGCMNotification(id:any,message:any){
        return this.http.get(
            this.endpoint_url + 'sendGCMNotification?id='+id+'&message='+message).pipe(
                map(res => res)
            )
    }  
    build_query (obj:any, num_prefix:number, temp_key:any) {

        var output_string = []
        let key;
        
        Object.keys(obj).forEach(function (val, k) {

            key = val;

            num_prefix && !isNaN(key) ? key = num_prefix + key : ''

             key = (key.replace(/[!'()*]/g, ''));
            temp_key ? key = temp_key + '[' + key + ']' : ''

            if (typeof obj[val] === 'object') {
                var query = this.build_query(obj[val], null, key)
                output_string.push(query)
            }

            else {
                var value = (typeof obj[val] == 'string') ? obj[val].replace(/[!'()*]/g, '') : obj[val];
                output_string.push(key + '=' + value)
            }

        })

        return output_string.join('&')

    }
    str_pad (input, padLength, padString, padType) { // eslint-disable-line camelcase
        //  discuss at: http://locutus.io/php/str_pad/
        // original by: Kevin van Zonneveld (http://kvz.io)
        // improved by: Michael White (http://getsprink.com)
        //    input by: Marco van Oort
        // bugfixed by: Brett Zamir (http://brett-zamir.me)
        //   example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT')
        //   returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
        //   example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH')
        //   returns 2: '------Kevin van Zonneveld-----'
      
        var half = ''
        var padToGo
      
        var _strPadRepeater = function (s, len) {
          var collect = ''
      
          while (collect.length < len) {
            collect += s
          }
          collect = collect.substr(0, len)
      
          return collect
        }
      
        input += ''
        padString = padString !== undefined ? padString : ' '
      
        if (padType !== 'STR_PAD_LEFT' && padType !== 'STR_PAD_RIGHT' && padType !== 'STR_PAD_BOTH') {
          padType = 'STR_PAD_RIGHT'
        }
        if ((padToGo = padLength - input.length) > 0) {
          if (padType === 'STR_PAD_LEFT') {
            input = _strPadRepeater(padString, padToGo) + input
          } else if (padType === 'STR_PAD_RIGHT') {
            input = input + _strPadRepeater(padString, padToGo)
          } else if (padType === 'STR_PAD_BOTH') {
            half = _strPadRepeater(padString, Math.ceil(padToGo / 2))
            input = half + input + half
            input = input.substr(0, padLength)
          }
        }
      
        return input
      }
}


