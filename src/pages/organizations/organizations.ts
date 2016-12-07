import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-organizations',
  templateUrl: 'organizations.html'
})
export class OrganizationsPage {
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Organizations Page');
  }
}
