import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocaisPage } from '../locais/locais';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-ecopoint',
  templateUrl: 'ecopoint.html',
})
export class EcopointPage {

  locais = [];

  constructor(public navCtrl: NavController, private http : Http) {

  }

  ionViewWillEnter(){
    this.obterLocaisAPI();
  }

  selecionaLocal(x) {
    console.log(x.nome);
    this.navCtrl.push(LocaisPage, { localSelecionado : x } );
  }

  obterLocaisAPI() {
    this.http.get('http://localhost:3000/locais')
        .map(response => response.json())
        .toPromise()
        .then(response => this.locais = response);
  }

}
