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
    pessoa1.nome = 'Emilio Anastácio';
    pessoa1.idade = 19;

    let pessoa2: Pessoa = new Pessoa();
    pessoa2.nome = 'Emilio Anastácio';
    pessoa2.idade = 20;

    let pessoa3: Pessoa = new Pessoa();
    pessoa3.nome = 'Emilio Anastácio';
    pessoa3.idade = 21;

    let pessoa4: Pessoa = new Pessoa();
    pessoa4.nome = 'Emilio Anastácio';
    pessoa4.idade = 22;

    let pessoa5: Pessoa = new Pessoa();
    pessoa5.nome = 'Emilio Anastácio';
    pessoa5.idade = 23;

    let pessoa6: Pessoa = new Pessoa();
    pessoa6.nome = 'Emilio Anastácio';
    pessoa6.idade = 24;

    let pessoa7: Pessoa = new Pessoa();
    pessoa7.nome = 'Emilio Anastácio';
    pessoa7.idade = 25;

    let pessoa8: Pessoa = new Pessoa();
    pessoa8.nome = 'Emilio Anastácio';
    pessoa8.idade = 26;

    let pessoa9: Pessoa = new Pessoa();
    pessoa9.nome = 'Emilio Anastácio';
    pessoa9.idade = 27;

    let pessoa10: Pessoa = new Pessoa();
    pessoa10.nome = 'Emilio Anastácio';
    pessoa10.idade = 28;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);

  }
}
