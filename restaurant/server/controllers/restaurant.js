// ===== restaurants.JS ======
// ===== date:  20180323     ======
//
const mongoose   = require('mongoose');
const Restaurant = mongoose.model('Restaurant');
const Review     = mongoose.model('Review');

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
    write: (req, res) => {
        Restaurant.findOne({_id: req.params.id }, function(err, restaurant){
            let review = new Review(req.body.reviews);   
            review._restaurant = req.params.id;
            restaurant.reviews = restaurant.reviews.concat(review); 
            review.save(function(err, review){
                if(err) { 
                    console.log('Error saving review ');
                    return res.json(err);
                }else{   
                    restaurant.save(function(err, restaurant){
                        if(err) { 
                            console.log('Error saving restaurant');
                            return res.json(err);
                        }else{
                            console.log('Review inserted!');
                            return res.json(restaurant);
                        }; 
                    });
                }
            });   
        });
    },
    getReviews: (req, res) => {
        Restaurant.findOne({_id: req.params.id})
        .populate('reviews')
            .then(restaurant => res.json(restaurant))
            .catch(error => console.log(error));
    },
    getRestaurantById: function(req, res) {
        Restaurant.findById({_id: req.params.id})
        .populate('reviews')
        .then(restaurant => res.json(restaurant))
        .catch(error => console.log(error));
    },
    edit: (req, res) => {
        Restaurant.update( { _id: req.params.id }, { name: req.body.restaurant.name,  cuisine: req.body.restaurant.cuisine })
            .then(restaurant => res.json(restaurant))
            .catch(error => console.log(error));
    },
    destroy: (req, res) => {
        Restaurant.findByIdAndRemove({_id: req.params.id})
            .then(restaurant => res.json(restaurant))
            .catch(error => console.log(error));
    }

}