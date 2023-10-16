import { Injectable } from '@angular/core';
import { Cities } from './homepage/homepage.component';
import { cities } from 'src/data/cities';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  getCities(): Cities[] {
    return cities;
  }
}
