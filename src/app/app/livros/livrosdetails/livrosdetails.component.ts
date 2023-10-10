
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livros } from '../livros';
import { LivrosServiceService } from '../service/livros-service.service';


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

  
  @Input() livro: Livros = new Livros();  
  @Output() retorno = new EventEmitter<Livros>();

  livroService = inject(LivrosServiceService)

  constructor(){}

  ngOnInit() :void{
    
  }

  salvar(){
    this.livroService.save(this.livro).subscribe({
      next: livro => { // QUANDO DÁ CERTO
        this.retorno.emit(livro);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

}
