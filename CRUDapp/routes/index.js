var express = require('express');
var router = express.Router();
var connection = require('../config/connection');

/* GET home page. */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM users', function (err, rows) {
        if (err) throw err;

        res.render('index', {Users: rows});
    })

});

router.post('/addUser', function (req, res) {
    const userData = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        profession: req.body.profession
    };
    connection.query('INSERT INTO users SET ?', userData, function (err, result) {

        if (err) throw err;
        res.redirect('/');

    });

});

router.get('/deleteUser/:id',function (req,res) {
    var userId=req.params.id;
    connection.query('DELETE FROM users WHERE id=?',[userId],function (err,result) {
        if (err) throw err;
        res.redirect('/');

    })

});

router.get('/edit/:id',function (req,res) {
    var userId=req.params.id;
    connection.query('SELECT * FROM users WHERE id=?',[userId],function (err,rows) {
        if (err) throw err;
        res.render('edit',{DeleteUser:rows});
    })


});

router.post('/updateUser/:id',function (req,res) {
    var userId=req.params.id;
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    var profession=req.body.profession;
    connection.query('UPDATE users SET fname =?, lname=?,email=?,profession=? WHERE id=?',[fname,lname,email,profession,userId],function (err,rows) {
        if (err) throw err;
        res.redirect('../../');
    })


})

module.exports = router;
