import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-juve-jersey-vignettes',
  templateUrl: './juve-jersey-vignettes.component.html',
  styleUrls: ['./juve-jersey-vignettes.component.css']
})
export class JuveJerseyVignettesComponent implements OnInit {

  imagesLinks: string[] = [
    '../../assets/images/juve/1.jpg',
    '../../assets/images/juve/2.jpg',
    '../../assets/images/juve/3.jpg',
    '../../assets/images/juve/4.jpg',
  ];
  mainImage: string;

  @Output() changeMainImageIndex: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.mainImage = this.imagesLinks[0];
  }

  ngOnInit(): void {
  }

  changeMainImage(index: any) {
    this.mainImage = this.imagesLinks[index];
    this.changeMainImageIndex.emit(index);
  }

}
