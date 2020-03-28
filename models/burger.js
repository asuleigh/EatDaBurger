  
// Import ORM 
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
  // Select all from table
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // Insert to arrays id and values
  insertOne: function(id, values, cb) {
    orm.insertOne('burgers', id, values, function(res) {
      cb(res);
    });
  },

  // Update to new object
  updateOne: function(keyId, condition, cb) {
    orm.updateOne('burgers', keyId, condition, function(res) {
      cb(res);
    });
  }
};

// Export db functions
module.exports = burger;