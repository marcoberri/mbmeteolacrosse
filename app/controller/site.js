var mongo = require('../data/mongodb.js');
var async = require('async');

exports.findLastLog = function(callback) {
	mongo.findLastLog({'ts': -1},function(err,first){
		mongo.findPrevLog(function(err,prev){
			console.log(prev.ts + " - " + first.ts);
			first.RC = first.RC - prev.RC;
			callback(err,first);
		});		

	});
};

exports.findPrevLog = function(callback) {
	mongo.findPrevLog(function(err,result){
		callback(err,result);
	});
};


exports.findLast = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

			return	sendJsonResponse(req,res,result); 
	});
	
}; 



exports.findLastWDWS24 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - 86400000;


		mongo.findWDWSLastFrom(startFrom,function(err,result){
		
		        
		
			return	sendJsonResponse(req,res,result); 
			
			
		});
	});
	
}; 



exports.findLastWDWS7 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 7);


		mongo.findWDWSLastFrom(startFrom,function(err,result){
		
		        
		
			return	sendJsonResponse(req,res,result); 
			
			
		});
	});
	
}; 






exports.findLastWDWS30 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30);


		mongo.findWDWSLastFrom(startFrom,function(err,result){
			return	sendJsonResponse(req,res,result); 
		});
	});
	
}; 


exports.findLastWDWS365 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 365);


		mongo.findWDWSLastFrom(startFrom,function(err,result){
			return	sendJsonResponse(req,res,result); 
		});
	});
	
}; 


exports.findLastT24 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - 86400000;


		mongo.findTLastFrom(startFrom,function(err,result){
		
		        
		
			return	sendJsonResponse(req,res,result); 
			
			
		});
	});
	
}; 




exports.findLastT7 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 7);


		mongo.findTLastFrom(startFrom,function(err,result){
			return	sendJsonResponse(req,res,result); 
		});
	});
	
}; 



exports.findLastT30 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30);


		mongo.findTLastFrom(startFrom,function(err,result){
			return	sendJsonResponse(req,res,result); 
		});
	});
	
}; 





exports.findLastT365 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


		mongo.findTLastFrom(startFrom,function(err,result){
			return	sendJsonResponse(req,res,result); 
		});
	});
	
}; 



exports.findLastH24 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - 86400000;


	mongo.findHLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastH7 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 7);


	mongo.findHLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastH30 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30);


	mongo.findHLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastH365 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


	mongo.findHLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastPRESS24 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - 86400000;


	mongo.findPRESSLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastPRESS7 = function(req, res) {
	//retrive last log date
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 7);


	mongo.findPRESSLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastPRESS30 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30);


	mongo.findPRESSLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastPRESS365 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


	mongo.findPRESSLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastWC24 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - 86400000;


	mongo.findWCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastWC7 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 7);


	mongo.findWCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 


exports.findLastWC30 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30);


	mongo.findWCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastWC365 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


	mongo.findWCLastFrom(startFrom,function(err,result){
		return	sendJsonResponse(req,res,result); 
		});

	});
	
}; 

exports.findLastRC24 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - 86400000;


	mongo.findRCLastFrom(startFrom,function(err,result){
	
		recalcRain(result,function(err,data){ 
		        return	sendJsonResponse(req,res,data);
		        }); 
		});

	});
	
}; 



exports.findLastRC7 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 7);


	mongo.findRCLastFrom(startFrom,function(err,result){
	
		recalcRain(result,function(err,data){ 
		        return	sendJsonResponse(req,res,data);
		        }); 
		});

	});
	
}; 


exports.findLastRC30 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30);


	mongo.findRCLastFrom(startFrom,function(err,result){
	
		recalcRain(result,function(err,data){ 
		        return	sendJsonResponse(req,res,data);
		        }); 
		});

	});
	
}; 

exports.findLastRC365 = function(req, res) {
	mongo.findLastLog({'ts': -1},function(err,result){

		var startFrom = result.ts.getTime() - (86400000 * 30 * 12);


	mongo.findRCLastFrom(startFrom,function(err,result){
	
		recalcRain(result,function(err,data){ 
		        return	sendJsonResponse(req,res,data);
		        }); 
		});

	});
	
}; 


recalcRain = function(data,callback){

    var returnData = [];


    async.each(data,function(item,callback){
    

        if(!item.RC || parseInt(item.RC) == 0){        
            callback();
        }else{    
            delete item.min;
            delete item.max;
            returnData.push(item);
            callback();
        }
    },
    function(err){
    
         callback(null,returnData);
    
    });
    
    
//callback(null,data);
/*    var act = 0;
    var first = true;
    var prev = 0;
    var returnData = [];
    
    var _min = 0;
    var _max = 0;
    
    async.each(data,function(item,callback){
    
        if(first == true){
            console.log("first");
            prev = item.RC;
            item.RC = 0;
            first = false;
            callback();
            return;            
        }else{
            var tmp = item.RC;
            //console.log("prev" + prev);
            //console.log("item" + item.RC);
            console.log(parseFloat(item.RC) - parseFloat(prev));
            
            var t = parseFloat(item.RC) - parseFloat(prev);
            prev = item.RC;
            item.RC = t;
            if(t > _max)
                _max = t;
                
            if(t <= 0){
            callback();
            return;
            }
            
            
            prev = tmp;
        }
        
        delete item.min;
        delete item.max;
        
        
        returnData.push(item);
        
        callback();
    },
    function(err){
    
        var resultData = [];    
            async.each(returnData,function(item,callback){
            item.max = _max;
            item.min = _min;
            resultData.push(item);
            callback();
            
            }, function(err){
                 callback(null,resultData);
            }
            
            
            );
        
    
    });*/
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

