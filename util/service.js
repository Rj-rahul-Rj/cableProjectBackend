const mysql = require('mysql');
exports.conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'cable',
    path: '/'
});

exports.conn.connect((err)=>{
    if(err){
        console.log('Error in Connection!');
    }else{
        console.log('Connection created!');
    }
})