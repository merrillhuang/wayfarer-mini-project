import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapChevronCompactLeft as cLeft,
  bootstrapChevronCompactRight as cRight,
  bootstrapSearch as search,
} from '@ng-icons/bootstrap-icons';

import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardTopicsComponent } from './card-topics/card-topics.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CityPageComponent } from './city-page/city-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    HomepageComponent,
    SidebarComponent,
    CardTopicsComponent,
    AppWrapperComponent,
    LandingPageComponent,
    CityPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ cLeft, cRight, search }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
