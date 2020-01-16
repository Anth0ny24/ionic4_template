import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReportPage } from './report/report.page';
import { BarcodePage } from './barcode/barcode.page';
import { TransactionPage } from './transaction/transaction.page';
import { HelpPage } from './help/help.page';

@Component({
  selector: 'app-respondant',
  templateUrl: './respondant.page.html',
  styleUrls: ['./respondant.page.scss'],
})
export class RespondantPage implements OnInit {
  @Input() value: any;

  constructor(
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() { }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async report() {
    const modal = await this.modalCtrl.create({
      component: ReportPage,
    });
    return await modal.present();
  }

  async barcode() {
    const modal = await this.modalCtrl.create({
      component: BarcodePage,
    });
    return await modal.present();
  }

  async transaction() {
    const modal = await this.modalCtrl.create({
      component: TransactionPage,
    });
    return await modal.present();
  }

  async help() {
    const modal = await this.modalCtrl.create({
      component: HelpPage,
    });
    return await modal.present();
  }

}
