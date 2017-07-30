
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var publication = new db.Schema({
    au_name: String,
    pu_title: String,
    jo_name: String,
    pu_date: Date, 
    volume:Number,
    issue:Number,
    pages:Number,
    register_id: String,
       
});

publication.plugin(mongoosePaginate);


module.exports = db.model('publication', publication);
