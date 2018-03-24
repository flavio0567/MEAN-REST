import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RestaurantService {
  restaurants;

  constructor(private _http: Http) { }

  getRestaurantsList(restaurants) {
    this._http.get('/list').subscribe(
      (res) => {
        console.log('SUCCESS in getting restaurants: ', res.json());
        restaurants(res.json());
      },
      (err) => {
        console.log('ERROR in getting restaurants: ', err);
      }
    );
  }

  newRestaurant(restaurant, callback) {
    this._http.post('/new', {restaurant: restaurant} ).subscribe(
      (res) => {
        console.log('SUCCESS new restaurant: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR new restaurant: ', err);
      }
    );
  }

  deleteRestaurant(id, callback) {
    this._http.delete('/delete/' + id).subscribe(
      (res) => {
        console.log('SUCCESS in deleting: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR in deleting: ', err);
      }
    );
  }

  getReviewsList(reviews) {
    this._http.get('/reviews').subscribe(
      (res) => {
        console.log('SUCCESS in getting reviews: ', res.json());
        reviews(res.json());
      },
      (err) => {
        console.log('ERROR in getting reviews: ', err);
      }
    );
  }

  getRestaurantById(id, callback) {
    console.log('passei aqui service');
    this._http.get('/restaurant/' + id ).subscribe(
      (res) => {
        console.log('SUCCESS getting RestauranByID: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR getting RestaurantByID: ', err);
      }
    );
  }

  editRestaurant(restaurant, callback) {
    this._http.put('/edit/' + restaurant['_id'], {restaurant: restaurant} ).subscribe(
      (res) => {
        console.log('SUCCESS new restaurant: ', res.json());
        callback(res.json());
      },
      (err) => {
        console.log('ERROR new restaurant: ', err);
      }
    );
  }

}