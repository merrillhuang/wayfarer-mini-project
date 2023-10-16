import { Component, Input, OnInit } from '@angular/core';
import { Cities } from '../homepage/homepage.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() cities: Cities[] = [];

  constructor() {}

  ngOnInit(): void {}
}
