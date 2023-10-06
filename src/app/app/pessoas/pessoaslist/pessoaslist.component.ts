import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BdPessoasService } from '../bd-pessoas.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})

export class PessoaslistComponent {

  modalService = inject(NgbModal);
  lista: Pessoa[] = [];
  indiceSelect!: number;
  pessoaSelecionada!: Pessoa;

  listaService = inject(BdPessoasService);
  constructor(){
    this.lista = this.listaService.lista;
  }

 abrirModal(modal: any){
    this.pessoaSelecionada = new Pessoa(0,"",0);
    this.modalService.open(modal, {size: 'lg'});
 }

 abrirModalEditar(editar: any, pessoa:any, indice: number){
  this.indiceSelect = indice;
  this.pessoaSelecionada = pessoa;
  this.modalService.open(editar, {size: 'lg'});
}

addLista(pessoa : Pessoa){
  if(pessoa.id > 0){
    this.lista[this.indiceSelect] =pessoa;
  }else{
    this.lista.push(pessoa);
  }

  this.modalService.dismissAll();
}
}
