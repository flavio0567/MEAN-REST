import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-new',
  templateUrl: './restaurant-new.component.html',
  styleUrls: ['./restaurant-new.component.css']
})
export class RestaurantNewComponent implements OnInit {
  restaurant = {
    name: '',
    cuisine: '',
    reviews: []
  }

  errors: any = {};

  constructor(
    private _restaurantService: RestaurantService, 
    private _router: Router, 
    private _route: ActivatedRoute
) { }

  ngOnInit() {
    this.restaurant = { name: "", cuisine: "", reviews: [] };
  }

  addRest() {
    this._restaurantService.newRestaurant(this.restaurant, (res) => { 
      if(res.errors) {
        console.log('Something went wrong when saving restaurant');
        this.errors = res.errors;
        this._router.navigate(['/new']);
      } else {
        // this.restaurant = {
        //   name: '',
        //   cuisine: ''
        // }
        console.log('successfully saving restaurant');
        this.errors.success = 'Successfully saving restaurant';
        this._router.navigate(['/new']);
      }
    })
  }

  logout(user, callback) {
    console.log('LOGOUT success: Bye');
    this._router.navigate(['/']);
  }
}
