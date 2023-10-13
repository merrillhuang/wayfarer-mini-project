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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    AppWrapperComponent,
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
