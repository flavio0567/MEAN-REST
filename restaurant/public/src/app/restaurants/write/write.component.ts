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
    reviews: {
      customer: '',
      stars: '',
      description: ''
    }
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
    console.log('passei aqui write');
    this._route.paramMap.subscribe(params => {
      this._restaurantService.getRestaurantById(params.get('id'), (res) => {
        this.restaurant = res;
      });
    });
  }

  addReview() {
    this._restaurantService.newRestaurant(this.restaurant, (res) => { 
      if(res.errors) {
        console.log('Something went wrong when saving restaurant');
        this.errors = res.errors;
        this._router.navigate(['/reviews/:id']);
      } else {
        // this.restaurant = {
        //   name: '',
        //   cuisine: ''
        // }
        console.log('successfully saving restaurant');
        this.errors.success = 'Successfully saving restaurant';
        this._router.navigate(['/reviews/:id']);
      }
      })
    }

  logout(user, callback) {
    console.log('LOGOUT success: Bye');
    this._router.navigate(['/']);
  }
}
