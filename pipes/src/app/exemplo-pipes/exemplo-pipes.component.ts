import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: 'A sutil arte de ligar o foda-se',
    numeroPaginas: 244,
    rating: 4.54321,
    preco: 17.90,
    dataLancamento: new Date(2017, 11, 10),
    url: 'https://www.amazon.com.br/Sutil-Arte-Ligar-Se/dp/855100249X/ref=zg_bs_books_1?_encoding=UTF8&psc=1&refRID=3QKBVZQ4RSEMP9GXPHSW'
  };

  livros: string[] = ['React', 'Angular'];

  filtro: string;

  addCurso(valor) {
    this.livros.push(valor);
  }

  obterCurso() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
