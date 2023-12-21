import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController
  ) { }


  async displayAlert(title: string, message: string){
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: [{
        text: 'ok',
        role: 'cancel'
    }]
  })
      
      await alert.present();
}
}
