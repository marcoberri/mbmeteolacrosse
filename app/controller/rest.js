var mongo = require('../data/mongodb.js');

exports.addData = function(req, res) {

        console.log("method" + req.method);

	var d = req.body.data;
	console.log("data:" + d);
	
	var splitted = d.split(":");

	var tmpTs = 1000 * parseFloat(splitted[0]);	
	if(tmpTs <= 1431216000){
		var result = {"ts" : tmpTs };
		return sendJsonResponse(req,res,result);
	}else{
		var result = {
			  'ts': new Date(tmpTs),
			  'T0': parseFloat(splitted[1]),
			  'H0': parseFloat(splitted[2]),
			  'T1': parseFloat(splitted[3]),
			  'H1': parseFloat(splitted[4]),
			  'PRESS': parseFloat(splitted[13]),
			  'FC':parseFloat(splitted[15]),
			  'STORM': parseFloat(splitted[16]),
			  'WD': parseFloat(splitted[17]),
			  'WS': parseFloat(splitted[18]),	
			  'WG': parseFloat(splitted[19]),
			  'WC': parseFloat(splitted[20]),	          	                    
			  'RC': parseFloat(splitted[21])	          
		};
	
		mongo.addImport({'ts':result.ts},result,function(err){
			return sendJsonResponse(req,res,result);
		});
	}
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
