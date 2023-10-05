import { Component } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})

export class PessoaslistComponent {

  lista: Pessoa[] = [];

  constructor(){
    let pessoa1: Pessoa = new Pessoa();
    pessoa1.id = 1;
    pessoa1.nome = 'Emilio Anastácio';
    pessoa1.idade = 19;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.id = 2;
    pessoa2.nome = 'Emilio Anastácio';
    pessoa2.idade = 20;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.id = 3;
    pessoa3.nome = 'Emilio Anastácio';
    pessoa3.idade = 21;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
  }
}
