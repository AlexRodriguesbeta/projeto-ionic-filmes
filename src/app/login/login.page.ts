import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user ={
    name: '',
    email: '',
    password: ''
  }

  constructor(private alertCtrl : AlertController) { 
  }

  ngOnInit() {
  }

  register(){
    //alert('Usuário cadastrado com sucesso!'); 
    localStorage.setItem('userDb', JSON.stringify(this.user)); 
    this.exibeAlert(); 
  }

  async exibeAlert(){
    let alert = await this.alertCtrl.create({
      header: "Usuário cadastrado com sucesso!",
      buttons : [{
        text: "Voltar",
        cssClass: "secundary",
        handler: () => {this.load()}
      }]
    });
    await alert.present(); 
  }

  load() {
    location.reload()
  }

}
