import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-addingTransaction',
  templateUrl: './addingTransaction.page.html',
  styleUrls: ['./addingTransaction.page.scss'],
})
export class AddingTransactionPage implements OnInit {

  category:string="adding";

  constructor(
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() { }

  closeModal() {
    this.modalCtrl.dismiss();
  }


}
