import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage implements OnInit {
item: string
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  ngOnInit() {
    this.item = this.navParams.get('itemName');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  onClickToPurchase() {
    // this.navCtrl.pop();
    this.navCtrl.popToRoot();
    
  }

}
