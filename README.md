# NodeJs-CRUDapp
NodeJs-CRUDapp 
----------------install NODEJS & Create App--------------------
npm install express-generator -g
express Appname
cd Appname
npm install

------------install handlebars-------------
npm uninstall jade --save
npm install express-handlebars --save


---------------view engine setup---------------
//app.js

var hbs=require('express-handlebars');

app.engine('hbs', hbs({extname:'hbs',defaultLayout: 'layout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

-----------------connect to mysqlDB-----------------
https://expressjs.com/en/guide/database-integration.html#mysql

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

module.exports = router;
---------------------------------get Data from DB--------------------------------
connection.query('SELECT * FROM users', function (err, rows) {
        if (err) throw err;

        res.render('index', {Users: rows});
    })
