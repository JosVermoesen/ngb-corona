import { Component } from '@angular/core';

import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 2000, noPause: true, showIndicators: true },
    },
  ],
})
export class HomeComponent { }
