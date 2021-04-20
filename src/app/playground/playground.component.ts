import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chooseType(tile: Tile): void {
    console.log(tile.type)
    this.tileEditing = tile;
  }

  tiles: Tile[][] = [
    [
    {type: "Kartoffeln"},
    {type: "Zwiebeln"},
    {type: "Weg"}
    ],
    [
      {type: "Erde"},
      {type: "Tomaten"},
      {type: "Weg"}
    ],
    [
      {type: "Erbsen"},
      {type: "Karotten"},
      {type: "Weg"}
    ]
  ];

  tileEditing: Tile;
  

}
