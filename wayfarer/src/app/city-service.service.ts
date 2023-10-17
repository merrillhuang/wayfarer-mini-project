import { Injectable } from '@angular/core';
import { Cities } from './homepage/homepage.component';
import { cities as data } from 'src/data/cities';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  cities: Cities[] = data;
  citiesSubject: BehaviorSubject<Cities[]> = new BehaviorSubject(this.cities);

  getCities$() {
    return this.citiesSubject.asObservable();
  }

  findCity(query: string) {
    // Filter the cities array and update it
    const filteredCities = this.cities.filter((city) =>
      city.name.startsWith(query)
    );

    // Update the value of the BehaviorSubject
    this.citiesSubject.next(filteredCities);
  }
}
