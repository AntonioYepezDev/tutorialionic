import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelar');
        }
        },
        {
          text: 'OK',
          handler: (blah) => {
            console.log('Botón OK');
          }
        }
      ]
    });
    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Ingrese Nombre',
      inputs: [
        {
          name: 'textNombre',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.titulo = data.textNombre;
          }
        }
      ]
    });

    await alert.present();
  }


}


