import { Component } from '@angular/core';

import { IonPullUpFooterState } from 'ionic-pullup';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  footerState: IonPullUpFooterState;

  constructor(public navCtrl: NavController) {
    this.footerState = IonPullUpFooterState.Collapsed;
  }

  footerExpanded() {
    console.log('Footer expanded!');
  }

  footerCollapsed() {
    console.log('Footer collapsed!');
  }

  toggleFooter() {
    this.footerState = this.footerState = this.footerState == IonPullUpFooterState.Collapsed ? IonPullUpFooterState.Expanded : IonPullUpFooterState.Collapsed;
  }

}
