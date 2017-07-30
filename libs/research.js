
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var researchInfo = new db.Schema({
    title: String,
    description: String,
    register_id: String,
   
   
   
});

researchInfo.plugin(mongoosePaginate);


module.exports = db.model('researchInfo', researchInfo);
