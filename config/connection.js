const mysql = require('mysql');
const util = require('util');
if (process.env.JAWSDB_URL) {
  connection= mysql.createConnection(process.env.JAWSDB_URL);
} else {
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Khanshome1!',
    database: 'library_db'
  });
};

connection.connect(function(err) {
  if (err) {
    console.log("error in connection" + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});


// we give connection.query access to promises
// i.e. .then() and .catch()
connection.query = util.promisify(connection.query);

module.exports = connection;

// WITHOUT PROMISIFY
// connection.query('SELECT * FROM books', function(err, results){
//   if(err) throw error
//   console.log(results)
// })

// WITH PROMISIFY - provides access to promises and gives us more control
// connection.query('SELECT * FROM books')
//   .then(results => {
//     console.log(results)
//   })
//   .catch(err => console.log(err))