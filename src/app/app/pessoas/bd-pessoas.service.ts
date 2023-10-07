import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class BdPessoasService {

  lista: Pessoa[] = []
  proximoId: number =4;

  constructor() {

    this.lista.push(new Pessoa(1,'nome1',19));
    this.lista.push(new Pessoa(2, 'nome2', 20));
    this.lista.push(new Pessoa(3, 'nome3', 21));

   }

   adicionarPessoa(nome: string, idade: number): void{
    const novaPessoa = new Pessoa(this.proximoId, nome, idade);
    this.lista.push(novaPessoa);
    this.proximoId++; 
   }

   findId(id:number) :Pessoa{
    for(let i=0;i<this.lista.length;i++){
      if(this.lista[i].id == id){
        return this.lista[i];
      }
    }
    this.proximoId++;
    return new Pessoa(0, "", 0);
   }
}
