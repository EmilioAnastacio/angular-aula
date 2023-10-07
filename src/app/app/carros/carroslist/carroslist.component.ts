import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BdCarrosService } from '../bd-carros.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  modalService = inject(NgbModal);
  lista: Carro[] = [];
  indiceSelect!: number;
  carroSelecionada!: Carro;

  listaService = inject(BdCarrosService);
  constructor(){
    this.lista = this.listaService.lista;
  }

 abrirModal(modal: any){
    this.carroSelecionada = new Carro(0,"",0);
    this.modalService.open(modal, {size: 'lg'});
 }

 abrirModalEditar(editar: any, carro:any, indice: number){
  this.indiceSelect = indice;
  this.carroSelecionada = carro;
  this.modalService.open(editar, {size: 'lg'});
}

addLista(carro : Carro){
  if(carro.id > 0){
    this.lista[this.indiceSelect] =carro;
  }else{
    this.adicionarCarro(carro.nome, carro.ano);
    //this.lista.push(pessoa);
  }

  this.modalService.dismissAll();
}

adicionarCarro(nome:string, idade:number){
  this.listaService.adicionarCarro(nome,idade);
}

  

}
