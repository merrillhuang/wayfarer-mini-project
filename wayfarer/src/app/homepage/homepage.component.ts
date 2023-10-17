import { Component, OnInit } from '@angular/core';
import { cities } from 'src/data/cities';
import { CityService } from '../city-service.service';

export type Cities = {
  name: string;
  country: string;
  image: string;
  posts: { title: string; body: string; image: string }[];
};

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  cities: Cities[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }
}
