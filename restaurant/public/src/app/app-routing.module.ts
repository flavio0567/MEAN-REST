import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDashboardComponent } from './restaurants/restaurant-dashboard/restaurant-dashboard.component';
import { RestaurantNewComponent } from './restaurants/restaurant-new/restaurant-new.component';
import { RestaurantEditComponent } from './restaurants/restaurant-edit/restaurant-edit.component';
import { RestaurantDeleteComponent } from './restaurants/restaurant-delete/restaurant-delete.component';
import { PageNotFoundComponent } from './restaurants/page-not-found/page-not-found.component';
import { WriteComponent } from './restaurants/write/write.component';
import { ReviewsComponent } from './restaurants/reviews/reviews.component';

const routes: Routes = [
  { 
    path: '',
    component: RestaurantDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: RestaurantNewComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: RestaurantEditComponent,
    pathMatch: 'full'
  },
  {
    path: 'delete/:id',
    component: RestaurantDeleteComponent,
    pathMatch: 'full'
  },
  {
    path: 'write/:id',
    component: WriteComponent,
    pathMatch: 'full'
  },
  {
    path: 'reviews/:id',
    component: ReviewsComponent,
    pathMatch: 'full'
  },
  { 
    path: 'reset',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
