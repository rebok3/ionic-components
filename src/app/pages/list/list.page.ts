import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('list', {static: false}) list: IonList;

  users: Observable<any>;

  constructor( private dataService: DataService,
               private toastCtrl: ToastController ) { }

  ngOnInit() {

    this.users = this.dataService.getUsers();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite( user ) {
    // console.log('favorite', user );
    this.presentToast('Saved in Favorites');
    this.list.closeSlidingItems();
  }

  share( user ) {
    // console.log('share', user );
    this.presentToast('Shared!');
    this.list.closeSlidingItems();
  }

  delete( user ) {
    // console.log('delete', user );
    this.presentToast('User Deleted');
    this.list.closeSlidingItems();
  }

}
