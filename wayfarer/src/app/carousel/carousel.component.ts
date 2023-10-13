import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wf-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  images: string[] = [
    '../../assets/img1.jpg',
    '../../assets/img2.jpg',
    '../../assets/img3.jpg',
  ];
  imgIndex: number = 0;
  url: string = '';
  carouselDot = 'rounded-full bg-gray-300 h-4 w-4';

  ngOnInit(): void {
    this.url = this.images[this.imgIndex];
  }

  scrollLeft(): void {
    if (this.imgIndex === 0) {
      this.imgIndex = this.images.length - 1;
      this.url = this.images[this.imgIndex];
    } else {
      this.imgIndex -= 1;
      this.url = this.images[this.imgIndex];
    }
  }

  scrollRight(): void {
    if (this.imgIndex === this.images.length - 1) {
      this.imgIndex = 0;
      this.url = this.images[this.imgIndex];
    } else {
      this.imgIndex += 1;
      this.url = this.images[this.imgIndex];
    }
  }
}
