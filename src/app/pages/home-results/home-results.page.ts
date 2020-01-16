import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

// Modals
// import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { RespondantPage } from '../modal/respondant/respondant.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  searchKey = '';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }


  async respondant() {
    const modal = await this.modalCtrl.create({
      component: RespondantPage,
      // componentProps: { value: image }
    });
    return await modal.present();
  }

  // async interviewer(image: any) {
  //   const modal = await this.modalCtrl.create({
  //     component: RespondantPage,
  //     componentProps: { value: image }
  //   });
  //   return await modal.present();
  // }


  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
