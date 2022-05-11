import { OnInit } from "@angular/core";

import { App, AlertController, MenuController, NavController, Events } from 'ionic-angular';

import { AuthService } from '../service/chat/auth.service';
import { HomePage } from "../pages/home/home";

export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;
    public events: Events;

    constructor(
        public alertCtrl: AlertController,
        public authService: AuthService,
        public app: App,
        public menuCtrl: MenuController 
    ) {}

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNavs()[0];
    }

    onLogout(): void {
        this.alertCtrl.create({
            message: 'Do you want to quit?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.authService.logout()
                            .then(() => {
                                localStorage.removeItem('user');
                                this.events.publish("user:logout",JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {
                                    imageUrlThumb: 'assets/imgs/guest.png',
                                    first_name: 'Guest',
                                    last_name: ''
                                  }, Date.now());
                                this.navCtrl.setRoot(HomePage, {} , { animate: true, direction: 'forward' });
                            });
                    }
                },
                {
                    text: 'No'
                }
            ]
        }).present();
    }

}