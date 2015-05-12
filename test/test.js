var conf = require('../app/conf.js');
var assert = require('assert');
var request = require('request');

describe('Routing ', function() {

    describe('Data ', function() {

	it("POST - /data/addData", function(done) {

	console.log(conf);
	    var param = "data=1431288721:22.30:51:22.90:42:i:i:i:i:i:i:i:i:1016.1:i:5:0:4:0.0:0.0:21.5:6";
//    var param="data=pippo";
	    
	    request.post({
		headers : {
		    'content-type' : 'application/x-www-form-urlencoded'
		},
		url : conf.APP_URLPROXY + "/data/addData",
		body : param
	    }, function(error, resp, body) {
		var obj = JSON.parse(resp.body);
		console.log(resp.body);
		var result = obj;
		//assert.equal((obj.success == true && obj.data[0].id_utente == emailtestperson && obj.data[0].cod_edizione == testEdizione), true);
		
		
		done();
	    });
	});

	});

    });
