var mongo = require('../data/mongodb.js');

exports.findLastLog = function(callback) {
	mongo.findLastLog({'ts': -1},callback);
	
};

