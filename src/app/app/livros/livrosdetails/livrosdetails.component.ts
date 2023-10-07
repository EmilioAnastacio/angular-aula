import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livros } from '../livros';
import { BdLivroService } from '../bd-livro.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent implements OnInit{

//implements OnInit

route = inject(ActivatedRoute);
modalService = inject(NgbModal);
lista: Livros[] = [];
banco = Inject(BdLivroService);
@Input() livro: Livros = new Livros(0,"","");  

@Output() retorno = new EventEmitter<Livros>();

constructor(){
  let id = this.route.snapshot.paramMap.get('id');
  console.log(id);
  if(id){
    this.livro = this.banco.BdLivroService.findId(+id);
  }
}

ngOnInit() :void{
  this.livro = Object.assign({}, this.livro)
}

salvar(){
  this.retorno.emit(this.livro);
}

}
