import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class CarouselComponent implements OnInit {

  images = [
    //"assets/images/1.jpg",
    "assets/carousel-images/carousel1.jpg",
    "assets/carousel-images/carousel2.jpg",
    "assets/carousel-images/carousel3.jpg",
  ];

  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 5500;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.wrap = true;
  }

  ngOnInit(): void {
  }

}


