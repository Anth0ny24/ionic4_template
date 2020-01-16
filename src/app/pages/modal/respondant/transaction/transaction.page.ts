import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AddingTransactionPage } from "./form/addingTransaction.page";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})

export class TransactionPage implements OnInit {
  
  
  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {}

  
  async Addtransaction() {
    const modal = await this.modalCtrl.create({
      component: AddingTransactionPage,
    });
    return await modal.present();
  }

}
