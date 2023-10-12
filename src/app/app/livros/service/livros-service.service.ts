import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Livros } from '../livros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosServiceService {

  API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Livros[]> {
    return this.http.get<Livros[]>('http://localhost:8080/api/livro/listar');
  }

  save(salvar: Partial<Livros>){
    if(salvar.id){
      console.log('update');     
      return this.update(salvar);
    }
    console.log('salvar');   
    return this.create(salvar);
  }

  exemploErro(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.API + '/erro');
  }

  findById(id: string){
    return this.http.get<Livros>(`api/livro/buscar/${id}`);
  } 

  private create(salvar: Partial<Livros>){
    return this.http.post<Livros>(`http://localhost:8080/api/livro/cadastrar`, salvar);
  }

  private update(salvar: Partial<Livros>){
    return this.http.put<Livros>(`http://localhost:8080/api/livro/editar/${salvar.id}`, salvar);
  }

  deletar(id: number){
    return this.http.delete<Livros>(`http://localhost:8080/api/livro/deletar/${id}`);
 
  }

}
