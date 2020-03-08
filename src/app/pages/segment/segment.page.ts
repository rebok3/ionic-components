import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, { static: false }) segment: IonSegment;

  superHeroes: Observable<any>;
  publisher = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
  }

  segmentChanged(event) {

    const valueSegment = event.detail.value;

    if (valueSegment === 'all') {
      this.publisher = '';
      return;
    }

    this.publisher = valueSegment;

    console.log(valueSegment);
  }

  ionViewDidEnter() {
    this.segment.value = 'all';
    this.superHeroes = this.dataService.getHeroes();
  }

}
