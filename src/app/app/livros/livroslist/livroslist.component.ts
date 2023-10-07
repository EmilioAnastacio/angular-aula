import { Component, inject } from '@angular/core';
import { Livros } from '../livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BdLivroService } from '../bd-livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  modalService = inject(NgbModal);
  lista: Livros[] = [];
  indiceSelect!: number;
  livroSelecionada!: Livros;

  listaService = inject(BdLivroService);
  constructor(){
    this.lista = this.listaService.lista;
  }

 abrirModal(modal: any){
    this.livroSelecionada = new Livros(0,"","");
    this.modalService.open(modal, {size: 'lg'});
 }

 abrirModalEditar(editar: any, livros:any, indice: number){
  this.indiceSelect = indice;
  this.livroSelecionada = livros;
  this.modalService.open(editar, {size: 'lg'});
}

addLista(livros : Livros){
  if(livros.id > 0){
    this.lista[this.indiceSelect] = livros;
  }else{
    this.adicionarLivro(livros.titulo, livros.autor);
    //this.lista.push(pessoa);
  }

  this.modalService.dismissAll();
}

adicionarLivro(titulo:string, autor:string){
  this.listaService.adicionarLivro(titulo,autor);
}

}
