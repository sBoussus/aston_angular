import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-kb',
  templateUrl: './virtual-kb.component.html',
  styleUrls: ['./virtual-kb.component.css']
})
export class VirtualKbComponent implements OnInit {

  inputCells: string[] = ['_', '_', '_', '_', '_', '_'];
  keys: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', ' ', ' ', ' ', ' ', ' '];

  constructor() { }

  ngOnInit(): void {
  }

}
