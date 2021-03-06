import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Speaker} from "../../entities/speaker.entity";

@Component({
  template: `    
    <ion-header>
      <ion-navbar>
        <ion-title>{{speaker.firstName}} {{speaker.lastName}}</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding class="speaker-detail">
      <div text-center>
        <img [src]="speaker.img" [alt]="speaker.firstName + ' ' + speaker.lastName"><br>
        <button clear small twitter>
          <ion-icon name="logo-twitter"></ion-icon>
        </button>
        <button clear small github>
          <ion-icon name="logo-github"></ion-icon>
        </button>
        <button clear small instagram>
          <ion-icon name="logo-instagram"></ion-icon>
        </button>
      </div>
      <h2>{{speaker.role}}</h2>
      <p>{{speaker.description}}</p>
    </ion-content>
`
})
export class SpeakerDetailPage {
  speaker: Speaker;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speaker = this.navParams.data;
  }
}
