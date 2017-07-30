var express = require('express');
var router = express.Router();

var persionalinfo = require('./../libs/persionalInfo');
var academic = require('./../libs/academic');
var training = require('./../libs/trainingExperience');
var research = require('./../libs/research');
var registration = require('./../libs/registration');
/* GET home page. */
router.get('/', function(req, res, next) {
    

    registration.find({}).exec(function(err, docs) {

        if (err) {
            res.json(err)
        } else {

        	if(req.session.login)
        	{
        		res.render('index', { data: docs, name: req.session.name, layout: "ad_layout"});
        	}else{
        		res.render('index', { data: docs});
        	}

            

        }

    });

});

router.get('/:teachers', function(req, res, next) {
    res.render('teachersProfile');
});

module.exports = router;
