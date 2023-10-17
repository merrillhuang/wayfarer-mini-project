import { Injectable } from '@angular/core';
import { CityService } from './city-service.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  search: string = '';
  constructor(private cityService: CityService) {}

  searchCities(query: string) {
    this.cityService.findCity(query);
  }
}
