const dotenv = require('dotenv').config();
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DATABASE_PASSWORD,
  database: 'cms'
});

con.connect((err) => {
  if( err ) throw err;
});

module.exports = con;
