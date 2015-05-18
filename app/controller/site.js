var mongo = require('../data/mongodb.js');

exports.findLastLog = function(callback) {
	mongo.findLastLog({'ts': -1},callback);
};



exports.findLastT24 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - 86400000;


		mongo.findTLastFrom(startFrom,function(err,result){
			return	sendJsonResponse(req,res,result); 
		});
	});
	
}; 



exports.findLastH24 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - 86400000;


	mongo.findHLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastPRESS24 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - 86400000;


	mongo.findPRESSLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastWC24 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - 86400000;


	mongo.findWCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 



sendJsonResponse = function(req, res, data) {
    res.charset = 'UTF-8';
    //todo
    data.api_version = 0;
    var os = require("os");
    data.host = os.hostname();
                
     if (req.query.callback) {
     	res.type("application/json;charset=utf-8");
	res.send(req.query.callback + "(" + JSON.stringify(data) + ")");
     } else {
      	res.json(data);
    }
    return;
};

