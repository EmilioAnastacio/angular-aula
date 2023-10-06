import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BdPessoasService } from '../bd-pessoas.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent implements OnInit{

//implements OnInit

  route = inject(ActivatedRoute);
  modalService = inject(NgbModal);
  lista: Pessoa[] = [];
  banco = Inject(BdPessoasService);
  @Input() pessoa: Pessoa = new Pessoa(0,"",0);  

  @Output() retorno = new EventEmitter<Pessoa>();

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      this.pessoa = this.banco.BdPessoasService.findId(+id);
    }
  }

  ngOnInit() :void{
    this.pessoa = Object.assign({}, this.pessoa)
  }

  salvar(){
    this.retorno.emit(this.pessoa);
  }

}
