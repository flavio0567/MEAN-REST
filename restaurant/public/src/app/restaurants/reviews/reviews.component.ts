import { Component, OnInit, Input  } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  restaurant = {
    name: '',
    cuisine: '',
    reviews:  []
  }
  errors: any = {};


  constructor(
    private _restaurantService: RestaurantService,
     private _router: Router,
     private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant(){
    this._route.paramMap.subscribe(params => {
      this._restaurantService.getRestaurantById(params.get('id'), (res) => {
        this.restaurant = res;
        this._restaurantService.sort(this.restaurant.reviews);
      });
    });
  }

  cancel() {
    this._router.navigate(['']);
  }

}
