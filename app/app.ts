import 'meteor-client-side';
import 'accounts-base-client-side';
import 'accounts-phone';
import 'api/methods';

import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {METEOR_PROVIDERS} from 'angular2-meteor';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import * as Check from 'meteor/check';
import * as EJSON from 'meteor/ejson';
import {LoginPage} from './pages/login/login';
import {TabsPage} from './pages/tabs/tabs';

Object.assign(window,
  Check,
  EJSON
);


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {
    this.rootPage = Meteor.user() ? TabsPage : LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

Tracker.autorun((computation) => {
  if (Meteor.loggingIn()) return;
  computation.stop();

  ionicBootstrap(MyApp, [METEOR_PROVIDERS]);
});
