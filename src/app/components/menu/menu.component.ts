import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonicComponent } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  components: Observable<IonicComponent[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

}
