import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  restaurant = {
    name: '',
    cuisine: ''
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
      });
    });
  }

  editRest(restaurant) {
    this._restaurantService.editRestaurant(this.restaurant, (res) => { 
      if(res.errors) {
        console.log('Something went wrong when saving restaurant');
        this.errors = res.errors;
        this._router.navigate(['/edit/'] + restaurant['_id']);
      } else {
        console.log('successfully saving restaurant');
        this.errors.success = 'Successfully saving restaurant';
        this._router.navigate(['/edit/'] + restaurant['_id']);
      }
    })
  }

  logout(user, callback) {
    console.log('LOGOUT success: Bye');
    this._router.navigate(['/']);
  }


}
