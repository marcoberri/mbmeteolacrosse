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


exports.findLastT7 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 7);


		mongo.findTLastFrom(startFrom,function(err,result){
			return	sendJsonResponse(req,res,result); 
		});
	});
	
}; 



exports.findLastT30 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30);


		mongo.findTLastFrom(startFrom,function(err,result){
			return	sendJsonResponse(req,res,result); 
		});
	});
	
}; 


exports.findLastT365 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


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


exports.findLastH7 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 7);


	mongo.findHLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastH30 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30);


	mongo.findHLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastH365 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


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


exports.findLastPRESS7 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 7);


	mongo.findPRESSLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastPRESS30 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30);


	mongo.findPRESSLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastPRESS365 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


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


exports.findLastWC7 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 7);


	mongo.findWCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastWC30 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30);


	mongo.findWCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastWC365 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


	mongo.findWCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastRC24 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - 86400000;


	mongo.findRCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 



exports.findLastRC7 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 7);


	mongo.findRCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastRC30 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30);


	mongo.findRCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastRC365 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){
		console.log(result.ts.getTime());

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


	mongo.findRCLastFrom(startFrom,function(err,result){
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

