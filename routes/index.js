var express = require('express');
var router = express.Router();

var persionalinfo = require('./../libs/persionalInfo');
var academic = require('./../libs/academic');
var training = require('./../libs/trainingExperience');
var research = require('./../libs/research');
var publication = require('./../libs/publication');
var award = require('./../libs/award');
var employment = require('./../libs/preEmployment');
var registration = require('./../libs/registration');
var autho = require('./../libs/autho');
var registration = require('./../libs/registration');
/* GET home page. */


router.get('/', function(req, res, next) {


    registration.find({}).exec(function(err, docs) {

        if (err) {
            res.json(err)
        } else {

            if (req.session.login) {

                res.render('index', { data: docs, name: req.session.name, layout: "ad_layout" });
            } else {
                res.render('index', { data: docs });
            }



        }

    });

});

router.get('/profile/:id/:name', function(req, res, next) {
    console.log("Name:" + req.params.name);
    console.log("id:" + req.params.id);
    //res.render('teachersProfile');

    var pertionalInfo = null;
    var academicInfo = null;
    var trainingInfo = null;
    var researchInfo = null;
    var publicationInfo = null;
    var awardInfo = null;
    var employmentInfo = null;



    persionalinfo.find({ register_id: req.params.id }).exec(function(err, docs) {

        if (err) {
            res.json(err)
        } else {

            pertionalInfo = docs;

            academic.find({ register_id: req.params.id }).exec(function(err, docs) {

                if (err) {
                    res.json(err)
                } else {

                    academicInfo = docs;

                    training.find({ register_id: req.params.id }).exec(function(err, docs) {

                        if (err) {
                            res.json(err)
                        } else {

                            trainingInfo = docs;

                            research.find({ register_id: req.params.id }).exec(function(err, docs) {

                                if (err) {
                                    res.json(err)
                                } else {

                                    researchInfo = docs;
                                    award.find({ register_id: req.params.id }).exec(function(err, docs) {

                                        if (err) {
                                            res.json(err)
                                        } else {

                                            awardInfo = docs;

                                            publication.find({ register_id: req.params.id }).exec(function(err, docs) {

                                                if (err) {
                                                    res.json(err)
                                                } else {

                                                    publicationInfo = docs;

                                                    employment.find({ register_id: req.params.id }).exec(function(err, docs) {

                                                        if (err) {
                                                            res.json(err)
                                                        } else {

                                                            employmentInfo = docs;

                                                            if (req.session.login) {


                                                               res.render('teachersProfile', { pertional: pertionalInfo, academic: academicInfo, training:trainingInfo,researchData: researchInfo, publication:publicationInfo, award: awardInfo, employment:employmentInfo, name: req.session.name, login: req.session.login, layout: "ad_layout" });
                                                            //res.json(pertionalInfo);
                                                            } else {
                                                                res.render('teachersProfile', { pertional: pertionalInfo, academic: academicInfo, training:trainingInfo,researchData: researchInfo, publication:publicationInfo, award: awardInfo, employment:employmentInfo ,name: req.session.name, login: req.session.login});
                                                            //res.json(pertionalInfo);
                                                            }


                                                        }

                                                    });


                                                }

                                            });



                                        }

                                    });


                                }

                            });


                        }

                    });


                }

            });



        }

    });






});




router.get('/login', function(req, res, next) {
    res.render('adminView/signup/login');
});


router.post('/login', function(req, res, next) {
    // res.render('admin/login');

    //////////////

    var email = req.body.email;
    var password = req.body.password;


    console.log("email:" + email);
    console.log("password:" + password);


    registration.find({ email: email, password: password }).exec(function(err, docs) {

        if (err) {
            res.json(err)
        } else {

            if (docs.length > 0) {
                req.session.login = true;

                var Name = docs[0].name;
                var id = docs[0]._id;
                req.session.id = id;
                req.session.name = Name;
                console.log("Name:" + Name);
                console.log("LoginID:" + id);
                res.redirect("/");

            } else {

                next("Please try again");

            }




        }

    });


    //////////////
});


module.exports = router;