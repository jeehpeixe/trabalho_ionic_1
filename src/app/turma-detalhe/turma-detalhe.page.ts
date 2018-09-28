import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../service/turma.service';

@Component({
  selector: 'app-turma-detalhe',
  templateUrl: './turma-detalhe.page.html',
  styleUrls: ['./turma-detalhe.page.scss'],
})
export class TurmaDetalhePage implements OnInit {

  nome: any;
  curriculo: any;
  urlImagem: any;

  constructor(private turmaService : TurmaService) {}

  ngOnInit() {    
      this.turmaService.getListaTurmas('top-headlines?sources=national-geographic').subscribe(data => {
        data['articles'].forEach(element => {
          if (element['publishedAt'] == this.turmaService.id) {
            this.nome      = element['author'];
            this.curriculo = element['description'];
            this.urlImagem = element['urlToImage'];
          }
        });
      });
  }
}
