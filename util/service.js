const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cable'
});

conn.connect((err)=>{
    if(err){
        console.log('Error in Connection!');
    }else{
        console.log('Connection created!');
    }
})