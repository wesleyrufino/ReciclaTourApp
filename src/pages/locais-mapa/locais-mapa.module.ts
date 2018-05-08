import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocaisMapaPage } from './locais-mapa';

@NgModule({
  declarations: [
    LocaisMapaPage,
  ],
  imports: [
    IonicPageModule.forChild(LocaisMapaPage),
  ],
})
export class LocaisMapaPageModule {}
