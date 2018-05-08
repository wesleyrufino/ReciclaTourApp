import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EcopointPage } from '../ecopoint/ecopoint';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  PushPage(){
    this.navCtrl.push(EcopointPage)
    };
}
