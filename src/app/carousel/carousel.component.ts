import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imagesLinks: string[] = [
    'https://france3-regions.francetvinfo.fr/image/dFgtamKBM2Kuci9yK80P2VlDcBc/1200x900/regions/2020/06/09/5edf9ea708eb3_loup_10-4621851.jpg',
    'https://www.sciencesetavenir.fr/assets/img/2020/10/30/cover-r4x3w1000-5f9b1e93155d7-wolf-1992716-1920.jpg',
    'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/a80b245d-0a52-4d14-83d4-3f7e1343a792/1200x680_loup_boris_roessler_picture_alliance_getty.jpg',
    'https://www.vie-publique.fr/sites/default/files/en_bref/image_principale/loup.jpg'
  ];
  srcCarousel: string = this.imagesLinks[0];
  indexImage: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.changeMainImage();
  }

  changeMainImage() {
    setInterval(
      () => {
        this.indexImage++;
        if(this.indexImage === this.imagesLinks.length) {
          this.indexImage = 0;
        }
        this.srcCarousel = this.imagesLinks[this.indexImage];
      }, 3000
    );
  }

}
