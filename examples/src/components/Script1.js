var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'me',
	password : 'secret',
	database : 'my_db'
});

connection.connect();

// eslint-disable-next-line no-unused-vars
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	if (err) throw err;

	// eslint-disable-next-line no-console
	console.log('The solution is: ', rows[0].solution);
});

connection.end();