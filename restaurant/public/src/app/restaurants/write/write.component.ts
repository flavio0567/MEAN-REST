import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  restaurant = {
    name: '',
    cuisine: '',
    id: '',
    reviews: {
      customer: '',
      stars: '',
      description: ''
    }
  }

  newReview = {
    customer: '',
    stars: '',
    description: ''
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
        console.log('res in write:', res);
        this.restaurant = res;
      });
    });
  }

  addReview(restaurant) {
    this.restaurant.reviews = this.newReview;
    this._restaurantService.writeReview(this.restaurant, (res) => { 
      if(res.errors) {
        console.log('Something went wrong when saving review');
        this.errors = res.errors;
        this._router.navigate(['/write/' + this.restaurant['_id']]);
      } else {
        console.log('successfully saving restaurant');
        this.errors.success = 'Successfully saving review';
        this._router.navigate(['/write/' + this.restaurant['_id']]);
      }
      })
    }

  logout(user, callback) {
    console.log('LOGOUT success: Bye');
    this._router.navigate(['/']);
  }
}
