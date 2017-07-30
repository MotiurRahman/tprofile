var express = require('express');
var router = express.Router();

var persionalinfo = require('../../libs/persionalInfo');
var academic = require('../../libs/academic');
var training = require('../../libs/trainingExperience');
var registration = require('../../libs/registration');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('adminView/signup/register');
});


router.post('/', function(req, res, next) {


    //////////////

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;


    console.log("name:" + name);
    console.log("email:" + email);
    console.log("password:" + password);




    var registrationInfo = {
        name: name,
        email: email,
        password: password



    };

    function insertRegistrationInfoData() {
        new_registration.save(function(err) {

            if (err) {
                res.json(err)
                // mongoose.connection.close();
            } else {
                res.json("Registration has been inserted successfully")

                //res.redirect("/admin/login");

            }


        });
    }

    var new_registration = new registration(registrationInfo);

    registration.find({ email: email }).exec(function(err, docs) {

        if (err) {
            res.json(err)
        } else {

            if (docs.length > 0) {
                
                res.json("Email already Exit")
            } else {
                insertRegistrationInfoData();
            }



        }

    });





    //////////////


});



module.exports = router;