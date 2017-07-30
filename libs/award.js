
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var award = new db.Schema({
    aw_title: String,
    aw_institute: String,
    aw_country: String,
    aw_date: Date,
    register_id: String,   
});

award.plugin(mongoosePaginate);


module.exports = db.model('award', award);
