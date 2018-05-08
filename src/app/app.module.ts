import { EcopointPage } from './../pages/ecopoint/ecopoint';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocaisPage }  from '../pages/locais/locais'
import { LocaisMapaPage} from '../pages/locais-mapa/locais-mapa'
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { LocaisProvider } from '../providers/locais/locais';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocaisPage,
    LocaisMapaPage,
    EcopointPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocaisPage,
    LocaisMapaPage,
    EcopointPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    LocaisProvider
  ]
})
export class AppModule {}
