export class Livros{
    id!: number;
    titulo!: string;
    autor!: string;

    constructor(id: number, titulo: string, autor: string){
        this.id = id;
        this.autor = autor;
        this.titulo = titulo;
    }
}