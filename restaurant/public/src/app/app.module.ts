import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantNewComponent } from './restaurants/restaurant-new/restaurant-new.component';
import { RestaurantEditComponent } from './restaurants/restaurant-edit/restaurant-edit.component';
import { PageNotFoundComponent } from './restaurants/page-not-found/page-not-found.component';
import { RestaurantDashboardComponent } from './restaurants/restaurant-dashboard/restaurant-dashboard.component';
import { ReviewsComponent } from './restaurants/reviews/reviews.component';
import { WriteComponent } from './restaurants/write/write.component';
import { RestaurantService } from './restaurants/restaurant.service';
import { OrderByPipe } from './restaurants/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantNewComponent,
    RestaurantEditComponent,
    PageNotFoundComponent,
    RestaurantDashboardComponent,
    ReviewsComponent,
    WriteComponent,
    OrderByPipe
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
