
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var registration = new db.Schema({
    name: String,
    email: String,
    password: String,       
});

registration.plugin(mongoosePaginate);


module.exports = db.model('registration', registration);
