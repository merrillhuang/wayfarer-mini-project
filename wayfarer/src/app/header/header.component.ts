import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'wf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  search: string = '';
  constructor(private router: Router, private searchService: SearchService) {}

  isCitesPage(): boolean {
    return this.router.url.startsWith('/cities');
  }

  handleInput() {
    this.searchService.searchCities(this.search);
  }
}
