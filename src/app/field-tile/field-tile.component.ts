import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-tile',
  templateUrl: './field-tile.component.html',
  styleUrls: ['./field-tile.component.css']
})
export class FieldTileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  type: string;

}
