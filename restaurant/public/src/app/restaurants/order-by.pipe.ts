import { Pipe, PipeTransform } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { Review } from './review';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  constructor(private _restaurantService: RestaurantService) { }

  transform(reviews:  Review[]): Review[] {
    this._restaurantService.sort();
    return this._restaurantService.reviews;
  }

}
