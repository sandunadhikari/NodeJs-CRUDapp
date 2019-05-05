var mysql = require('mysql');
var db;
var setting={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CRUDapp'
}
function mysqlConnection() {
    if(!db){
        db=mysql.createConnection(setting);
        db.connect(function (err) {
            if(!err){
                console.log("Connected DB");
            }else {
                console.log("Not Connected");
            }

        });

    }
    return db;


}
module.exports=mysqlConnection();