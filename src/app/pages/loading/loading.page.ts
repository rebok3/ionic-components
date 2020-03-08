import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor( private loadingCtrl: LoadingController ) { }

  async presentLoading( message: string) {
    this.loading = await this.loadingCtrl.create({
      message
      // message: 'Please wait...',
      // duration: 2000
    });
    return this.loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  ngOnInit() {

    this.presentLoading( 'Please wait' ).then(() => {
      setTimeout(() => {
        this.loading.dismiss();
        console.log('Loading dismissed!');
      }, 1500 );
    });

  }

}
