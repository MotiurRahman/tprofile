var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    req.session = null;
    res.redirect('admin/login');
    console.log("logout");
});


module.exports = router;