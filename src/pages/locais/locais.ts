import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-locais',
  templateUrl: 'locais.html'
})

export class LocaisPage {
  public Locais;

  constructor(public navParams: NavParams) {

    this.Locais = navParams.get('localSelecionado');
    
  }
}
