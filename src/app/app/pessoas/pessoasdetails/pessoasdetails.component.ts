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
  lista: Pessoa[] = [];
  pessoa!: Pessoa;
  meuValorNome: string = '';
  meuValorIdade: number = 0;

  constructor(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if(id){
      //metodo para editar
      
    }else{
      //metodo para cadastrar
      //   let newPessoa: Pessoa = new Pessoa();
      //   newPessoa.nome = this.meuValorNome;
      //   newPessoa.idade = this.meuValorIdade;
      // this.lista.push(newPessoa);
          
    }
  }

  enviaValor(): void{
    console.log('Valor do input:', this.meuValorNome);
    console.log('Valor do input:', this.meuValorIdade);

    let newPessoa: Pessoa = new Pessoa();
        newPessoa.nome = this.meuValorNome;
        newPessoa.idade = this.meuValorIdade;
      newPessoa.lista.push(newPessoa);
  }

}
