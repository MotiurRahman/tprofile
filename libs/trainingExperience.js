
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var trainingExperience = new db.Schema({
    title: String,
    topics: String,
    tYear: String,
    country: String, 
    t_institute:String,
    t_duration:String,
    register_id: String,
    
   
});

trainingExperience.plugin(mongoosePaginate);


module.exports = db.model('trainingExperience', trainingExperience);
