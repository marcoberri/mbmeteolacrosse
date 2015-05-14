var conf = require('../app/conf.js');
var assert = require('assert');
var request = require('request');

describe('Routing ', function() {

    describe('Data ', function() {

	it("POST - /data/addData", function(done) {

	console.log(conf);
	    var param = "data=1431546545:22.75:60:22.80:54:i:i:i:i:i:i:i:i:1008.1:i:3:0:14:0.1:0.4:21.2:6";
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

	    });
	});

	});

    });
