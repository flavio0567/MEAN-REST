import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  Restaurant =  {
    name: '',
    cuisine:  '',
    reviews: [{
            customer: '',
            stars:  '',
            description:  ''
    }]
}

  constructor() { }

  ngOnInit() {
  }

}
