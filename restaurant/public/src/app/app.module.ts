import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantNewComponent } from './restaurants/restaurant-new/restaurant-new.component';
import { RestaurantEditComponent } from './restaurants/restaurant-edit/restaurant-edit.component';
import { RestaurantDeleteComponent } from './restaurants/restaurant-delete/restaurant-delete.component';
import { PageNotFoundComponent } from './restaurants/page-not-found/page-not-found.component';
import { RestaurantDashboardComponent } from './restaurants/restaurant-dashboard/restaurant-dashboard.component';
import { ReviewsComponent } from './restaurants/reviews/reviews.component';
import { WriteComponent } from './restaurants/write/write.component';
import { RestaurantService } from './restaurants/restaurant.service';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantNewComponent,
    RestaurantEditComponent,
    RestaurantDeleteComponent,
    PageNotFoundComponent,
    RestaurantDashboardComponent,
    ReviewsComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
