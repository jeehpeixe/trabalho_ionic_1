import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../service/turma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit {

  data: any;
  constructor(private turmaService : TurmaService, private router : Router) { }

  ngOnInit() {
    this.getListaTurmas().subscribe(data => {
      this.data = data["articles"];
    });
  }

  getListaTurmas(){
    return this.turmaService.getListaTurmas('top-headlines?sources=national-geographic');
  }

  onClickPessoa(id){
    this.turmaService.id = id;
    this.router.navigateByUrl('turma-detalhe');
  }

  sair() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('home');
}

}
