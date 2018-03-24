// ===== mongoose.JS      ======
// ===== date:            ======
//
// mongoose
const mongoose = require('mongoose');

// univalidator
uniqueValidator = require('mongoose-unique-validator');

// fs module for loading model åfiles
const fs = require('fs');

// Path
const path = require('path');

// connect to mongoose
mongoose.connect('mongodb://localhost/restaurant', {
    useMongoClient: true, 
    autoIndex: false
  });

mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;

// create a variable that points to the path where all of the models live
// const models_path = path.join(__dirname + '/models');
const models_path = path.join(__dirname, './../models');
// console.log('__dirname', path.join(__dirname + '/models'));
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    };
});