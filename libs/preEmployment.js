
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var preEmployment = new db.Schema({
    empTitle: String,
    empDesignation: String,
    empInstitute: String,
    empStartDate: String,
    empEndDate: String,
    register_id: String,    
});

preEmployment.plugin(mongoosePaginate);


module.exports = db.model('preEmployment', preEmployment);
