// ===== ROUTES.JS ===========//
// ======date: 03-05-2018 ====//
// 
const path = require('path');
const restaurant = require('../controllers/restaurant.js');

module.exports = function(app){
    app
    .get('/list', (req, res) => {
        restaurant.dashboard(req, res)})
    .get('/reviews/:id', (req, res) => {
        restaurant.getReviews(req, res)})
    .get('/rest/:id', (req, res) => {
        restaurant.getRestaurantById(req, res)})
    .post('/new', (req, res) => {
        restaurant.new(req, res)})
    .post('/write/:id', (req, res) => {
        restaurant.write(req, res)})
    .put('/edit/:id', (req, res) => {
        restaurant.edit(req, res)})
    .delete('/delete/:id', (req, res) => {
        restaurant.destroy(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../restaurant/public/dist/index.html'))})
}