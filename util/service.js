const mysql = require('mysql');
exports.conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cable'
});

exports.conn.connect((err)=>{
    if(err){
        console.log('Error in Connection!');
    }else{
        console.log('Connection created!');
    }
})