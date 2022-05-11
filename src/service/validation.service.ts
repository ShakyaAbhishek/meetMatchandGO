import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidationService {

    constructor() {
        console.log('Hello ServicesProvider Provider');
    }

    // user and admin login
    login(login: any) {
        let error = { email: '', password:''};
        let err = false;
        if(!login.email){
            error.email = 'Email Address is required.';
            err = true;
        }
        else
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(login.email)) {
                error.email = 'Invalid email Address.';
                err = true;
            }
        if (!login.password) {
            error.password = 'Password is required.';
            err = true;
        }
        else
            if (login.password.length < 8) {
                error.password = 'Your password must contain 8 or more characters.';
                err = true;
            }
        return {err:err,errors:error};
    }
    forgot(forgot: any) {
        let error = { email: '' };
        let err = false;
        if (!forgot.email) {
            error.email = 'Email Address is required.';
            err = true;
        }
        else
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(forgot.email)) {
                error.email = 'Invalid email Address.';
                err = true;
            }
        return { err: err, errors: error };
    }

    
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

   
    
    update(user: any) {
        let error = { about_us: "", phone_reg: "", otp_code: "", account_number: "", address: "", city: "", company_address: "", company_name: "", country: "", dob: "", email: "", encription: "", facebookId: "", find_us: "", first_name: "", forgot: "", gender: "", googlePlusId: "", hear_aboutus: "", image: "", imageUrl: "", imageUrlThumb: "assets/imgs/guest.png", interest1: "", interest2: "", is_newsletter: "", last_login_date: "", last_name: "", latitude: "", loginType: "", longitude: "", marrital_status: "",  postcode: "", question_answer: "", sort_code: "", state: "", status: "", timestamp: "", title: "", type: "C", updated: "", website: ""};
        let err = false;
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
        else if(user.first_name.length > 30){
            error.first_name =' First Name Should Be Minimum 30 Character.';
            err = true;
        }
        if (!user.last_name) {
            error.last_name = 'Last Name is required.';
            err = true;
        }
        else if(user.last_name.length > 30){
            error.last_name =' Last Name Should Be Minimum 30 Character.';
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
        else if (user.about_us.length < 150){
            error.about_us = 'About me charactor must be greater than 150.';
            err = true;
        }
        if (user.phone_reg) {
            if (user.phone_reg.length < 9) {
                error.phone_reg = 'New Mobile No. is invalid.';
                err = true;
            }
            else if(user.phone_reg.length > 12){
                error.phone_reg = 'New Mobile No. is Invalid.'
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
        else
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
                error.email = 'Invalid email Address.';
                err = true;
            }
        return { err: err, errors: error };
    }
    signup(user: any) {
        let error = { about_us: "",terms_confirmed: "",// phone_reg: "", //otp_code: "",
         postcode: "", address: "", city: "", country: "", dob: "", email: "", first_name: "", last_name: "", gender: "", hear_aboutus: "", marrital_status: "", phone: "", title: "", password: "", conf_password: "", };
        let err = false;
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
        else if(user.first_name.length > 30){
            error.first_name =' First Name Should Be Minimum 30 Character.';
            err = true;
        }
        if (!user.last_name) {
            error.last_name = 'Last Name is required.';
            err = true;
        }
        else if(user.last_name.length > 30){
            error.last_name =' Last Name Should Be Minimum 30 Character.';
            err = true;
        }
        if (!user.dob) {
            error.dob = 'Date of Birth is required.';
            err = true;
        }
        else if(this.get_age(new Date(user.dob),new Date())<18){
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
        else if (!/^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/.test(user.postcode)){
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
        else
            if (user.password.length < 8) {
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
        else
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
                error.email = 'Invalid email Address.';
                err = true;
            }
        return { err: err, errors: error };
    }
    get_age(born, now) {
        var birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
        if (now >= birthday) 
            return now.getFullYear() - born.getFullYear();
        else
            return now.getFullYear() - born.getFullYear() - 1;
        }
    addReview(review: any){
        let error = {
            location_id: '',
            user_id: '',
            description: '',
            rating: ''
        };
        let err = false;
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
    }
    ticketRegistration(user: any) {
        let error = {
            title: '',
            first_name: '',
            last_name: '',
            code:'',
           // dob: '',
            gender: '',
            email: '',
            phone: '',
            qty: '',
            agree: ''
        };
        let err = false;
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
        else
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
                error.email = 'Invalid email Address.';
                err = true;
            }
        return { err: err, errors: error };
    }
    ticketHolders(tickes:any){
        let errors = [];
        
        let err = false;
        if (tickes)
            for (var i = 0; i < tickes.length;i++){
                let error = {
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
                else
                    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(tickes[i].email)) {
                        error.email = 'Invalid email Address.';
                        
                        err = true;
                    }
                errors.push(error);
            }
        return { err: err, errors: errors };
    }
    sendEnquiry(user: any) {
        let error = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };
        let err = false;
        if (!user.name) {
            error.name = 'Name is required.';
            err = true;
        }
        if (!user.email) {
            error.email = 'Email Address is required.';
            err = true;
        }
        else
            if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)) {
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
    }
    changePassword(user: any) {
        let error = { old_password: "", password: "", repassword: "" };
        let err = false;
        if (!user.old_password) {
            error.old_password = 'Old Password is Required.';
            err = true;
        }
        if (!user.password) {
            error.password = 'Password is required.';
            err = true;
        }
        else
            if (user.password.length < 6) {
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
    }
    acceptRequest(requests: any) {
        let error = {
            user_id: '',
            request_id: ''
        };
        let err = false;
        if (!requests.user_id) {
            error.user_id = 'User ID is required.';
            err = true;
        }
        if (!requests.request_id) {
            error.user_id = 'Request ID is required.';
            err = true;
        }
        return { err: err, errors: error };

    }
}


