const mysql = require('mysql');
exports.conn = mysql.createConnection({
    host:'https://mycablenetworksite.com/',
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