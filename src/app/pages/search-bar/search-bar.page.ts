import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albums: any[] = [];
  textSearch = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbums()
        .subscribe( albums => {
          console.log(albums);
          this.albums = albums;
        });
  }

  onSearchChange( event ) {
    console.log( event );
    this.textSearch = event.detail.value;
  }

}
