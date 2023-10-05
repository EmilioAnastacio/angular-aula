import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor(){
    let carro1: Carro = new Carro();
    carro1.nome = 'Palio';
    carro1.ano = 2010;
    
    let carro2: Carro = new Carro();
    carro2.nome = 'Lancer';
    carro2.ano = 2015;

    let carro3: Carro = new Carro();
    carro3.nome = 'Tracker';
    carro3.ano = 2022;

    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);

  }

  

}
