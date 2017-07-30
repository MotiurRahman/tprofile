
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var academic = new db.Schema({
    degree: String,
    institute: String,  
    passYear: String,
    register_id: String,
   
});

academic.plugin(mongoosePaginate);


module.exports = db.model('academic', academic);
