import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal Pages
import { RespondantPagePageModule } from './pages/modal/respondant/respondant.module';
import { SearchFilterPageModule } from './pages/modal/search-filter/search-filter.module';
import { ReportPageModule } from './pages/modal/respondant/report/report.module';
import { BarcodePageModule } from "./pages/modal/respondant/barcode/barcode.module";
import { TransactionPageModule } from "./pages/modal/respondant/transaction/transaction.module";
import { AddingTransactionPageModule } from "./pages/modal/respondant/transaction/form/addingTransaction.module";
import { HelpPageModule } from "./pages/modal/respondant/help/help.module";


import { SandboxPageModule } from "./pages/sandbox/sandbox.module";
// Components
import { NotificationsComponent } from './components/notifications/notifications.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, NotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RespondantPagePageModule,
    SearchFilterPageModule,
    ReportPageModule,
    BarcodePageModule,
    TransactionPageModule,
    AddingTransactionPageModule,
    HelpPageModule,
    SandboxPageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [NotificationsComponent],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
