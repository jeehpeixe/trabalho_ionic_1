import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario = null;
  senha = null;

  constructor(private route : Router, private homeService : HomeService, private alertController : AlertController){}

  ngOnInit() {}

  async presentAlert(message: string, messageButton = 'OK') {
    const alert = await this.alertController.create({
        header: 'Alert',
        message: message,
        buttons: [messageButton]
    });

    await alert.present();
}

  login(){

    if (this.homeService.login(this.usuario,this.senha)['data']['token']) {
      localStorage.setItem('token', this.homeService.login(this.usuario,this.senha)['token']);
      this.route.navigate(["turma"]);
    }
    else {
      localStorage.removeItem('token');
      this.presentAlert('Usuário ou Senha Inválidos!');
    }
  }
}
