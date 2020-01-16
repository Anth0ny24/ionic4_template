import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from "chart.js";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['barcode.page.scss'],
})

export class BarcodePage implements OnInit {
  
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  
  closeModal() {
    this.modalCtrl.dismiss();
  }
  
}
