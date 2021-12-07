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
    "assets/images/carousel1.jpg",
    "assets/exam-sched.jpeg",
    "assets/sched.png",
  ];

  constructor(config: NgbCarouselConfig) {
    // 
    config.interval = 4000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.wrap = true;
  }

  ngOnInit(): void {
  }

}


