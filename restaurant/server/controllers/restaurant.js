// ===== restaurants.JS ======
// ===== date:  20180323     ======
//
const mongoose  = require('mongoose');
const Restaurant   = mongoose.model('Restaurant');

module.exports = { 

    // index: (req, res) => {
    //     return res.redirect('/');
    // },
    dashboard: (req, res) => {
        Restaurant.find({}).sort({ 'name': 1 })
            .then(restaurant => res.json(restaurant))
            .catch(error => console.log(error));
    },
    new: (req, res) => {
        console.log('rest:', req.body.restaurant);
        let restaurant = new Restaurant(req.body.restaurant);
        restaurant.save(function(err, result){
            if(err) {
                console.log('Something went wrong when saving');
                res.json(err);
            } else { 
                console.log('successfully saving');
                res.json(result);
            }
        })
    },
    getReviews: (req, res) => {
        Restaurant.findOne({_id: req.params.id})
        .populate('reviews')
            .then(restaurant => res.json(restaurant))
            .catch(error => console.log(error));
    },
    getRestaurantById: function(req, res) {
        console.log('getRecipieById: ', req.params.id);
        Restaurant.findOne({_id: req.params.id})
        .populate('reviews')
        .then(restaurant => res.json(restaurant))
        .catch(error => console.log(error));
    },
    write: (req, res) => {
        console.log('write review : ', req.params.id);
        Restaurant.findOne({_id: req.body.id }, function(err, restaurant){
            var review = new Review( { customer: req.body.reviews.customer, star: req.body.reviews.star, decription: req.body.reviews.description } );
            reviewt._restaurant = req.body.id;
            restaurant.reviews = restaurant.revies.concat(review);
            review.save(function(err){
                if(err) { 
                    console.log('Error', err) 
                }else{      
                    restaurant.save(function(err){
                        if(err) { 
                            console.log('Error', err) 
                        }else{
                            console.log('Review inserted!');
                            return res.json(restaurant);
                        }; 
                    });
                }
            });
        });
    },
    update: (req, res) => {
        Restaurant.update( { _id: req.params.id }, { options: req.body.restaurant })
            .then(restaurant => res.json(restaurant))
            .catch(error => console.log(error));
    },
    destroy: (req, res) => {
        Restaurant.findByIdAndRemove({_id: req.params.id})
            .then(restaurant => res.json(restaurant))
            .catch(error => console.log(error));
    },
    write: (req, res) => {
        Restaurant.update( { _id: req.params.id }, { reviews: req.body.restaurantl.reviews })
            .then(restaurant => res.json(restaurant))
            .catch(error => console.log(error));
    }

}