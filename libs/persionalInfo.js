
var db = require('./../libs/db.js');

var mongoosePaginate = require('mongoose-paginate');

var persionalInfo = new db.Schema({
    name: String,
    aboutMe: String,
    employee_id: String,
    designation: String, 
    department:String,
    email:String,
    phone:String,
    faculty:String,
    teachingArea:String,
    membership:String,
    image: String,
    register_id: String, 
   
   
});

persionalInfo.plugin(mongoosePaginate);


module.exports = db.model('persionalInfo', persionalInfo);
