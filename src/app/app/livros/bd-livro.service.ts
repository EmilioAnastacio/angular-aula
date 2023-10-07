import { Injectable } from '@angular/core';
import { Livros } from './livros';

@Injectable({
  providedIn: 'root'
})
export class BdLivroService {


  lista: Livros[] = []
  proximoId: number =4;

  constructor() {

    this.lista.push(new Livros(1,'autor','titulo'));
    this.lista.push(new Livros(2,'autor2','titulo2'));
    this.lista.push(new Livros(3,'autor3','titulo3'));

   }

   adicionarLivro(autor: string, titulo: string): void{
    const novaLivro = new Livros(this.proximoId, autor, titulo);
    this.lista.push(novaLivro);
    this.proximoId++; 
   }

   findId(id:number) :Livros{
    for(let i=0;i<this.lista.length;i++){
      if(this.lista[i].id == id){
        return this.lista[i];
      }
    }
    this.proximoId++;
    return new Livros(0, "", "");
   }
}
