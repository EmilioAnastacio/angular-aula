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
    carro1.nome = 'Lancer';
    carro1.ano = 2015;

    let carro3: Carro = new Carro();
    carro1.nome = 'Tracker';
    carro1.ano = 2022;
  }

}
