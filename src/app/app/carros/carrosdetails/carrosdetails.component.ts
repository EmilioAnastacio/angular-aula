import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from '../carro';
import { BdCarrosService } from '../bd-carros.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent implements OnInit{
  
//implements OnInit

  route = inject(ActivatedRoute);
  modalService = inject(NgbModal);
  lista: Carro[] = [];
  banco = Inject(BdCarrosService);
  @Input() carro: Carro = new Carro(0,"",0);  

  @Output() retorno = new EventEmitter<Carro>();

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      this.carro = this.banco.BdCarrosService.findId(+id);
    }
  }

  ngOnInit() :void{
    this.carro = Object.assign({}, this.carro)
  }

  salvar(){
    this.retorno.emit(this.carro);
  }
    

}
