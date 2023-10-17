import { Component, OnInit } from '@angular/core';
import { Cities } from '../homepage/homepage.component';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../city-service.service';

@Component({
  selector: 'city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css'],
})
export class CityPageComponent implements OnInit {
  city!: Cities;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const cityName = params.get('name');
      // Find the city data based on the cityName parameter
      this.city = this.cityService.cities.find((c) => c.name === cityName)!;
    });
  }
}
