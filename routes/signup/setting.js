var express = require('express');
var router = express.Router();
var registration = require('../../libs/registration');
var autho = require('../../libs/autho');

router.get('/', autho, function(req, res, next) {
    console.log("setting");
    res.render('adminView/signup/setting', {data: req.session.name, name: req.session.name, layout:"ad_layout"});
    
});


router.post('/', function(req, res, next) {


    //////////////

    var cur_password = req.body.cur_password;
    var new_password = req.body.new_password;
    var r_new_password = req.body.r_new_password;


    console.log("cur_password:" + cur_password);
    console.log("new_password:" + new_password);
    console.log("r_new_password:" + r_new_password);

    console.log("id:" + req.session.id);




    var registrationInfo = {
        cur_password: cur_password,
        new_password: new_password,
        r_new_password: r_new_password



    };


    registration.find({ $and: [{ _id: req.session.id }, { password: cur_password }] }).exec(function(err, docs) {

        if (err) {
            req.json(err)
        } else {
            if (docs.length > 0) {

                if (new_password == r_new_password) {

                    var newPass = {

                        password: new_password,

                    }

                    var conditions = { "_id": req.session.id },
                        update = { $set: newPass };



                    registration.update(conditions, update, callback);

                    function callback(err, updatdata) {
                        if (err) {
                            next("Data is not valid");
                            // mongoose.connection.close();
                        } else {

                            res.json("Password has been chnaged");
                        }
                    };

                } else {
                    next("Password did not match");
                }



            } else {

                next("Did not find Current Password");

            }


        }

    });





    //////////////


});



module.exports = router;