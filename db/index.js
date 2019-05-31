const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '',
  database: 'reviews',
});

connection.connect();

module.exports = connection;
