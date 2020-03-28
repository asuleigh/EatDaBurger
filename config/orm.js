// Import MySQL connection.
var connection = require("./connection.js");

// Helper function for MySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// Helper function for generating My SQL syntax by converting ob/key value pairs
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

// Create the object for performing SQL functions
var orm = {
	// Selects tables
	selectAll: function(tableInput, cb) {
		// Returns all rows
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// Insert function for adding single burger/set up query
	insertOne: function(table, id, values, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += id.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(values.length);
		queryString += ") ";

        // Perform query
		connection.query(queryString, values, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

	// Updates table
	updateOne: function(table, keyID, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(keyID);
		queryString += " WHERE ";
		queryString += condition;

		// Perform query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// Export the orm object for use in other modules
module.exports = orm;