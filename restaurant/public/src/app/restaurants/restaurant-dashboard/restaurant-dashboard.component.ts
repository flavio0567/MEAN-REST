import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {
  restaurants =  [{
    name: '',
    cuisine:  ''
  }]
  buttonDisabled: boolean = true;
  buttonEnabled: boolean = false;
  now: Date = new Date();

  constructor(private _restaurantService: RestaurantService, private _router: Router) { }

  ngOnInit() {
    this.getListOfRestaurants();
  }

  getListOfRestaurants(){
    this._restaurantService.getRestaurantsList((res) => {
      this.restaurants = res;
    });
  }

  deleteRest(id) {
    this._restaurantService.deleteRestaurant((id), (res) => {
      console.log('This called delete restaurant!');
      this.getListOfRestaurants();
    });
  }

  
}
