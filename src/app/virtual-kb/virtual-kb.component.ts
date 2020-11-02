import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-kb',
  templateUrl: './virtual-kb.component.html',
  styleUrls: ['./virtual-kb.component.css']
})
export class VirtualKbComponent implements OnInit {

  inputCells: string[] = ['_', '_', '_', '_', '_', '_'];
  keyNumbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', ' ', ' ', ' ', ' ', ' '];
  currentInputCell: number = 0;
  keysDisabledStatus: boolean = false;
  submitDisabledStatus: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.keyNumbers = this.shuffle(this.keyNumbers);
  }

  // Mélange les valeurs d'un tableau
  shuffle(tab: any) {
    let currentIndex: number = tab.length;
    let randomIndex: number;
    let newTab: string[] = [];
    while(currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      newTab.push(tab[randomIndex]);
      tab.splice(tab.indexOf(tab[randomIndex]), 1);
    }
    return newTab;
  }

  // Réaction au clic d'une touche du clavier virtuel
  keyClick(event: any) {
    let keyValue: string = event.target.outerText;
    // Si la touche n'est pas "vide"
    if(keyValue !== '') {
      let indexInputCell: number = this.currentInputCell;
      this.inputCells[indexInputCell] = keyValue;
      this.currentInputCell++;
      // Si le champ de saisie est rempli on désactive le clic des touches et on active le bouton valider
      if(this.currentInputCell >= 6) {
        this.keysDisabledStatus = true;
        this.submitDisabledStatus = false;
      }
    }
  }

  // Réaction au clic du bouton "validation"
  submitClick() {
    let inputCells = this.inputCells;
    // Transformation du tableau en une chîne de caractère pour l'affichage
    let strInputCells: string = '';
    for(let cell of inputCells) {
      strInputCells += cell;
    }
    console.log('Voici le code saisi : ' + strInputCells);
  }

}
