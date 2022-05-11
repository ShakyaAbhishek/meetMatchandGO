

import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { CommonService } from "./common.service";


/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {
  public logged: any;
    constructor(public http: Http, private commonService: CommonService) {

   

   this.http = http;    
    console.log('User ServicesProvider Provider');
      if (localStorage.getItem('user'))
      {
          this.logged = true;
      }
  }
    endpoint_url: string = 'https://www.meetmatchandgo.com/api/';


    // user and admin login
    login(login : any){
        //console.log(this.commonService.build_query(login,0,''));
        return this.http.get(
            this.endpoint_url + 'login?'+this.commonService.build_query(login, 0, '')).pipe(
            map(res => res)
            );
    }
    forgot(forgot: any) {
        return this.http.get(
            this.endpoint_url + 'forgotPassword?' + this.commonService.build_query(forgot, 0, '')).pipe(
                map(res => res)
            );
    }
    setFirebaseUuid(user:any){
        return this.http.get(
            this.endpoint_url + 'updateFirebaseId?' + this.commonService.build_query(user, 0, '')).pipe(
                map(res => res)
            );
    }
    getLoggedUserData(id) {
        return this.http.get(
            this.endpoint_url + 'loggedUserData?id='+id).pipe(
                map(res => res)
            );
    }
    update(user: any) {
        console.log(this.commonService.build_query(user, 0, ''));
        return this.http.get(
            this.endpoint_url + 'profileUpdate?' + this.commonService.build_query(user, 0, '')).pipe(
                map(res => res)
            );
    }
    signup(user: any) {
        return this.http.get(
            this.endpoint_url + 'signup?' + this.commonService.build_query(user, 0, '')).pipe(
                map(res => res)
            );
    }
    checkUserEmails(email:string){
        return this.http.get(
            this.endpoint_url + 'checkUserEmail?' + email).pipe(
                map(res => res)
            );
    }
    sendOTP(user: any) {
        return this.http.get(
            this.endpoint_url + 'validateMobileCode?' + this.commonService.build_query(user, 0, '')).pipe(
                map(res => res)
            );
    }
    changePassword(user: any) {
        console.log(this.commonService.build_query(user, 0, ''));
        return this.http.get(
            this.endpoint_url + 'changePassword?' + this.commonService.build_query(user, 0, '')).pipe(
                map(res => res)
            );
    }

}


