
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var researchInfo = new db.Schema({
    re_title: String,
    re_description: String,
    register_id: String,
   
   
   
});

researchInfo.plugin(mongoosePaginate);


module.exports = db.model('researchInfo', researchInfo);
