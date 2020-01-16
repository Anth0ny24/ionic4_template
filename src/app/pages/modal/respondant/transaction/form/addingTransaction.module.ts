import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddingTransactionPage } from './addingTransaction.page';


const routes: Routes = [
  {
    path: '',
    component: AddingTransactionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddingTransactionPage],
  entryComponents: [AddingTransactionPage]
})
export class AddingTransactionPageModule {}
