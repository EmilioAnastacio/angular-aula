import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  route = inject(ActivatedRoute);
  pessoa!: Pessoa;

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');

    if(id){
      //modo de edição do detalhe
      //requisitar o objeto do back
      //this.pessoa = new Pessoa("Emilio", 45);
    }else{
      //modo nodo do detalhe
      //this.pessoa = new Pessoa("", 0);
    }
  }

}
