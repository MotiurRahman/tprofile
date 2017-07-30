var checkAuthentication = function(req, res, next) {

    if (req.session.login)
        return next();
    else
        res.redirect('/admin/login')
}

module.exports = checkAuthentication;