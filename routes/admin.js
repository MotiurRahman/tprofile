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

/* GET home page. */



router.get('/insert', autho, function(req, res, next) {

    if (req.session.login) {
        res.render('adminView/insert/insert', {name: req.session.name, layout: "ad_layout" });
    } else {
        res.render('adminView/signup/login');
    }

});


router.post('/academicInsert', function(req, res, next) {


    //////////////

    var degree = req.body.degree;
    var institute = req.body.institute;
    var passYear = req.body.passYear;

    console.log("degree:" + degree);
    console.log("institute:" + institute);
    console.log("passYear:" + passYear);
    console.log("ID:" + req.session.id);

    var academicData = {
        degree: degree,
        institute: institute,
        passYear: passYear,
        register_id: req.session.id

    };

    var new_academicData = new academic(academicData);
    InsertAcademicData();

    function InsertAcademicData() {
        new_academicData.save(function(err) {

            if (err) {
                res.json(err)
                // mongoose.connection.close();
            } else {
                res.json("Academic Info has been inserted successfully");

            }


        });
    }

    //////////////


});

router.post('/persionalDataInsert', function(req, res, next) {


    //////////////

    var name = req.body.name;
    var aboutMe = req.body.aboutMe;
    var employee_id = req.body.employee_id;
    var designation = req.body.designation;
    var department = req.body.department;
    var email = req.body.email;
    var phone = req.body.phone;
    var faculty = req.body.faculty;
    var teachingArea = req.body.teachingArea;
    var membership = req.body.membership;
    var image = req.body.image;


    console.log("name:" + name);
    console.log("aboutMe:" + aboutMe);
    console.log("employee_id:" + employee_id);
    console.log("designation:" + designation);
    console.log("department:" + department);
    console.log("email:" + email);
    console.log("phone:" + phone);
    console.log("teachingArea:" + teachingArea);
    console.log("membership:" + membership);
    console.log("image:" + image);
    console.log("ID:" + req.session.id);



    var pertionalInfo = {
        name: name,
        aboutMe: aboutMe,
        designation: designation,
        employee_id: employee_id,
        department: department,
        email: email,
        phone: phone,
        faculty: faculty,
        teachingArea: teachingArea,
        membership: membership,
        image: image,
        register_id: req.session.id


    };

    var new_pertionalInfo = new persionalinfo(pertionalInfo);
    insertPertionalData();

    function insertPertionalData() {
        new_pertionalInfo.save(function(err) {

            if (err) {
                res.json(err)
                // mongoose.connection.close();
            } else {
                res.json("Persional Info has been inserted successfully")

            }


        });
    }

    //////////////


});


router.post('/trainingExperience', function(req, res, next) {


    //////////////

    var title = req.body.title;
    var topics = req.body.topics;
    var tYear = req.body.tYear;
    var country = req.body.country;
    var t_institute = req.body.t_institute;
    var t_duration = req.body.t_duration;

    console.log("title:" + title);
    console.log("topics:" + topics);
    console.log("tYear:" + tYear);
    console.log("country:" + country);
    console.log("t_institute:" + t_institute);
    console.log("t_duration:" + t_duration);
    console.log("ID:" + req.session.id);

    var trainingInfo = {
        title: title,
        topics: topics,
        tYear: tYear,
        country: country,
        t_institute: t_institute,
        t_duration: t_duration,
        register_id: req.session.id

    };

    var new_training = new training(trainingInfo);
    insertTrainingInfoData();

    function insertTrainingInfoData() {
        new_training.save(function(err) {

            if (err) {
                res.json(err)
                // mongoose.connection.close();
            } else {
                res.json("Training Info has been inserted successfully")

            }


        });
    }

    //////////////


});

router.post('/researchDataInsert', function(req, res, next) {


    //////////////

    var re_title = req.body.re_title;
    var re_description = req.body.re_description;

    console.log("re_title:" + re_title);
    console.log("re_description:" + re_description);
    console.log("ID:" + req.session.id);


    var researchData = {
        re_title: re_title,
        re_description: re_description,
        register_id: req.session.id


    };

    var new_researchData = new research(researchData);
    InsertResearchData();

    function InsertResearchData() {
        new_researchData.save(function(err) {

            if (err) {
                res.json(err)
                // mongoose.connection.close();
            } else {
                res.json("Reserch Info has been inserted successfully");

            }


        });
    }

    //////////////


});


router.post('/publicationDataInsert', function(req, res, next) {


    //////////////

    var au_name = req.body.au_name;
    var pu_title = req.body.pu_title;
    var jo_name = req.body.jo_name;
    var pu_date = req.body.pu_date;
    var volume = req.body.volume;
    var issue = req.body.issue;
    var pages = req.body.pages;


    console.log("au_name:" + au_name);
    console.log("pu_title:" + pu_title);
    console.log("jo_name:" + jo_name);
    console.log("pu_date:" + pu_date);
    console.log("volume:" + volume);
    console.log("issue:" + issue);
    console.log("pages:" + pages);
    console.log("ID:" + req.session.id);

    var publicationInfo = {
        au_name: au_name,
        pu_title: pu_title,
        jo_name: jo_name,
        pu_date: pu_date,
        volume: volume,
        issue: issue,
        pages: pages,
        register_id: req.session.id

    };

    var new_publication = new publication(publicationInfo);
    insertPublicationInfoData();

    function insertPublicationInfoData() {
        new_publication.save(function(err) {

            if (err) {
                res.json(err)
                // mongoose.connection.close();
            } else {
                res.json("Publication Info has been inserted successfully")

            }


        });
    }

    //////////////


});


router.post('/awardDataInsert', function(req, res, next) {


    //////////////

    var aw_title = req.body.aw_title;
    var aw_institute = req.body.aw_institute;
    var aw_country = req.body.aw_country;
    var aw_date = req.body.aw_date;


    console.log("aw_title:" + aw_title);
    console.log("aw_institute:" + aw_institute);
    console.log("aw_country:" + aw_country);
    console.log("aw_date:" + aw_date);
    console.log("ID:" + req.session.id);


    var awardInfo = {
        aw_title: aw_title,
        aw_institute: aw_institute,
        aw_country: aw_country,
        aw_date: aw_date,
        register_id: req.session.id


    };

    var new_award = new award(awardInfo);
    insertAwardInfoData();

    function insertAwardInfoData() {
        new_award.save(function(err) {

            if (err) {
                res.json(err)
                // mongoose.connection.close();
            } else {
                res.json("Award Info has been inserted successfully")

            }


        });
    }

    //////////////


});


router.post('/employmentDataInsert', function(req, res, next) {


    //////////////

    var empTitle = req.body.empTitle;
    var empDesignation = req.body.empDesignation;
    var empInstitute = req.body.empInstitute;
    var empStartDate = req.body.empStartDate;
    var empEndDate = req.body.empEndDate;


    console.log("empTitle:" + empTitle);
    console.log("empDesignation:" + empDesignation);
    console.log("empInstitute:" + empInstitute);
    console.log("empStartDate:" + empStartDate);
    console.log("empEndDate:" + empEndDate);
    console.log("ID:" + req.session.id);


    var employmentInfo = {
        empTitle: empTitle,
        empDesignation: empDesignation,
        empInstitute: empInstitute,
        empStartDate: empStartDate,
        empEndDate:empEndDate,
        register_id: req.session.id


    };

    var new_employment = new employment(employmentInfo);
    insertemploymentInfoInfoData();

    function insertemploymentInfoInfoData() {
        new_employment.save(function(err) {

            if (err) {
                res.json(err)
                // mongoose.connection.close();
            } else {
                res.json("Employment Info has been inserted successfully")

            }


        });
    }

    //////////////


});



router.get('/update', function(req, res, next) {
    res.render('adminView/update');
});

router.get('/delete', function(req, res, next) {
    res.render('adminView/delete');
});



module.exports = router;