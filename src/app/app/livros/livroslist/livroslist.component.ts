import { Component } from '@angular/core';
import { Livros } from '../livros';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livros[] = [];

  constructor(){
    let livro1: Livros = new Livros;
    livro1.autor ='Emilio';
    livro1.titulo ='milho';

    let livro2: Livros = new Livros;
    livro2.autor ='Luiz';
    livro2.titulo ='cafe';

    let livro3: Livros = new Livros;
    livro3.autor ='Neymar';
    livro3.titulo ='traição';

    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
  }

}
