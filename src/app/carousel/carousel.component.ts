import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';

import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{

  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit(): void {  
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 8,
      mousewheel: true,
      loop: true,
      autoplay: {
        delay: 2000
      },
      direction: 'vertical',
      grabCursor: true,
    //   effect: 'coverflow',
    //   centeredSlides: true,
    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 260,
    //     depth: 200,
    //     modifier: 1,
    //     slideShadows: false,
    // },

    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }

  


}
