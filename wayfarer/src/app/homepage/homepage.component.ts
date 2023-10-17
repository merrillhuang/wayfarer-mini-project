import { Component, OnDestroy, OnInit } from '@angular/core';
import { cities } from 'src/data/cities';
import { CityService } from '../city-service.service';
import { Subscription } from 'rxjs';

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
export class HomepageComponent implements OnInit, OnDestroy {
  cities: Cities[] = [];
  private citiesSubscription!: Subscription;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.citiesSubscription = this.cityService
      .getCities$()
      .subscribe((cities) => {
        this.cities = cities;
      });
  }
  ngOnDestroy(): void {
    // Unsubscribe from the observable to avoid memory leaks
    this.citiesSubscription.unsubscribe();
  }
}
