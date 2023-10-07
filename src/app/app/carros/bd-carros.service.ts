import { Injectable } from '@angular/core';
import { Carro } from './carro';

@Injectable({
  providedIn: 'root'
})
export class BdCarrosService {

  lista: Carro[] = []
  proximoId: number =4;

  constructor() {

    this.lista.push(new Carro(1,'nome1',19));
    this.lista.push(new Carro(2, 'nome2', 20));
    this.lista.push(new Carro(3, 'nome3', 21));

   }

   adicionarCarro(nome: string, ano: number): void{
    const novaCarro = new Carro(this.proximoId, nome, ano);
    this.lista.push(novaCarro);
    this.proximoId++; 
   }

   findId(id:number) :Carro{
    for(let i=0;i<this.lista.length;i++){
      if(this.lista[i].id == id){
        return this.lista[i];
      }
    }
    this.proximoId++;
    return new Carro(0, "", 0);
   }
}
