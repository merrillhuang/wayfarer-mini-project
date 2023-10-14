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
} from '@ng-icons/bootstrap-icons';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    AppWrapperComponent,
    HomepageComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ cLeft, cRight }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
