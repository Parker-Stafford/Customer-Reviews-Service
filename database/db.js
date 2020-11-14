const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'beartnt_reviews'
});

con.connect(err => {
  err ? console.error(err) : console.log('Connected to the database!!');
});

const getAllDataFromTable = (table, callback) => {
  var query = 'SELECT * FROM ?';
  con.query(query, [table], (err, res) => {
    err ? callback(err) : callback(null, res);
  });
};

module.exports = {
  getAllDataFromTable,
  con
};