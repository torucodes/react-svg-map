// export { nameArray };

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* var Connection = require('tedious').Connection;  
var config = {  
	server: 'localhost',  //update me
	
	authentication: {
		type: 'default',
		options: {
			userName: 'admin1', //update me
			password: 'pass1'  //update me
			
		}
	},
	options: {
		// If you are on Microsoft Azure, you need encryption:
		encrypt: false,
		database: 'test1',
		port: 1433  //update me
	}
}; 
var connection = new Connection(config);  
connection.on('connect', function(err) {  
	// If no error, then good to proceed.
	if(err) {
		console.log('Error: ', err);}
	else{
		console.log('Connected');  
		executeStatement(); } 
});  

connection.connect();

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;
var nameArray = new Array();

function executeStatement() {  
	var request = new Request('SELECT * from USERS;', function(err) {  
		if (err) {
			console.log(err);}  
	});  
	var result = '';  
	request.on('row', function(columns) {  
		columns.forEach(function(column) {  
			if (column.value === null) {  
				console.log('NULL');  
			} else {  
				result+= column.value + ' ';
				console.log('YEY');
				nameArray.push(column.value);
			}  
		});  
		console.log(result);  
		result ='';

		for (i in nameArray){
			console.log(nameArray[i]);
		}

		

	});  

	request.on('done', function(rowCount, more) {  
		console.log(rowCount + ' rows returned');  
	});  
	
	// Close the connection after the final event emitted by the request, after the callback passes
	request.on('requestCompleted', function (rowCount, more) {
		connection.close();
	});
	connection.execSql(request);

	
}