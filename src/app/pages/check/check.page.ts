import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'Jon Snow',
      color: 'primary',
      selected: true
    },
    {
      name: 'Daenerys Targaryen',
      color: 'dark',
      selected: true
    },
    {
      name: 'Tyrion Lannister',
      color: 'secondary',
      selected: false
    },
    {
      name: 'Sansa Stark',
      color: 'danger',
      selected: true
    },
    {
      name: 'Khal Drogo',
      color: 'primary',
      selected: false
    },
    {
      name: 'Cersei Lannister',
      color: 'tertiary',
      selected: true
    },
    {
      name: 'Stannis Baratheon',
      color: 'medium',
      selected: true
    },
    {
      name: 'Hodor',
      color: 'dark',
      selected: true
    },
    {
      name: 'Catelyn Stark',
      color: 'secondary',
      selected: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick( check ) {
    console.log(check);
  }

}
