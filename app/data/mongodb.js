var conf = require('../conf.js');
var mongoskin = require('mongoskin');

var mongodb = mongoskin.db('mongodb://' + conf.MONGO_URL, {
	safe : true
});

exports.addImport = function(key, obj, callback) {
	var collection = mongodb.collection('rawdata');
	collection.update(key, obj, {
		upsert : true
	}, function(err, result) {
		if (err)
			throw err;
		if (result)
			console.log('Added!');
		callback();
	});
};

exports.addSystem = function(obj, callback) {
	var collection = mongodb.collection('sysdata');
	collection.insert(obj, function(err, result) {
		if (err)
			throw err;
		if (result)
			console.log('System Added!');
		callback();
	});
};


exports.findPrevLog = function(callback) {
	var collection = mongodb.collection('rawdata');
	collection.find({}, {
		"sort" : {
			"ts" : -1
		},
		"limit" : 2
	}).toArray(function(err, doc) {
		return callback(err, doc[1]);
	});
};

exports.findLastSystem = function(callback) {
	var collection = mongodb.collection('sysdata');
	
	collection.find({}, {
		"sort" : {
			"ts" : -1
		},
		"limit" : 1
	}).toArray(function(err, doc) {
		return callback(err, doc[0]);
	});
};

exports.findLastLog = function(sorting, callback) {

	var collection = mongodb.collection('rawdata');
	collection
			.find(
					{},
					{
						"sort" : {
							"ts" : -1
						},
						"limit" : 1
					},
					function(err, cursor) {

						if (err)
							throw err;

						cursor
								.nextObject(function(err, doc) {

									findMinLastFrom(
											doc.ts.getTime() - 86400000,
											"T1",
											function(err, mint1) {
												doc.T1MIN = mint1;
												findMaxLastFrom(
														doc.ts.getTime() - 86400000,
														"T1",
														function(err, maxt1) {
															doc.T1MAX = maxt1;

															findMinLastFrom(
																	doc.ts
																			.getTime() - 86400000,
																	"H1",
																	function(
																			err,
																			minh1) {
																		doc.H1MIN = minh1;

																		findMaxLastFrom(
																				doc.ts
																						.getTime() - 86400000,
																				"H1",
																				function(
																						err,
																						maxh1) {
																					doc.H1MAX = maxh1;

																					findMinLastFrom(
																							doc.ts
																									.getTime() - 86400000,
																							"PRESS",
																							function(
																									err,
																									minpress) {
																								doc.PRESSMIN = minpress;

																								findMaxLastFrom(
																										doc.ts
																												.getTime() - 86400000,
																										"PRESS",
																										function(
																												err,
																												maxpress) {
																											doc.PRESSMAX = maxpress;

																											findMinLastFrom(
																													doc.ts
																															.getTime() - 86400000,
																													"WC",
																													function(
																															err,
																															minwc) {
																														doc.WCMIN = minwc;

																														findMaxLastFrom(
																																doc.ts
																																		.getTime() - 86400000,
																																"WC",
																																function(
																																		err,
																																		maxwc) {
																																	doc.WCMAX = maxwc;

																																	findMinLastFrom(
																																			doc.ts
																																					.getTime() - 86400000,
																																			"RC",
																																			function(
																																					err,
																																					minrc) {
																																				doc.RCMIN = minrc;

																																				findMaxLastFrom(
																																						doc.ts
																																								.getTime() - 86400000,
																																						"RC",
																																						function(
																																								err,
																																								maxrc) {
																																							doc.RCMAX = maxrc;
																																							callback(
																																									err,
																																									doc)
																																						});
																																			});

																																});
																													});
																										});
																							});
																				});
																	});
														});
											});
								});
					});
};

exports.findTLastFrom = function(startFrom, callback) {
	return findLastFrom(startFrom, "T1", callback);
};

exports.findHLastFrom = function(startFrom, callback) {
	return findLastFrom(startFrom, "H1", callback);
};

exports.findPRESSLastFrom = function(startFrom, callback) {
	return findLastFrom(startFrom, "PRESS", callback);
};

exports.findWCLastFrom = function(startFrom, callback) {
	return findLastFrom(startFrom, "WC", callback);
};

exports.findRCLastFrom = function(startFrom, callback) {
//	return findLastFrom(startFrom, "RC", callback);
	return findLastFromRC(startFrom, "RC", callback);
};

exports.findWDWSLastFrom = function(startFrom, callback) {
	return findLastFromWDWS(startFrom, callback);
};

exports.findMaxMinT1Hour= function(date, callback) {
	return findMaxMinFrom("T1","Hour", date, callback);
};

exports.findMaxMinT1Day= function(date, callback) {                                                  
        return findMaxMinFrom("T1","Day", date, callback);                                           
};
exports.findMaxMinH1Hour= function(date, callback) {                                                                                                               
        return findMaxMinFrom("H1","Hour", date, callback);                                                                                                        
};

/** ** Private * */


findMaxMinFrom = function(field, period, date, callback) {

	var collection = mongodb.collection('maxmindata');

	var p1 = field + "Min" + period;	
	var p2 = field+"Max"+period;

	date =  date;
	var q = {
		"ts" : {"$regex" : date }
		};
	q[p1] = {"$exists":true};
	q[p2] = {"$exists":true};
		
	var f={};	
	f[p1]=1;
	f[p2]=1;
	f["ts"]=1;

	console.log(f);		
	collection.find(q,f).toArray(function(err,doc){callback(err, doc);});

};

findLastFromWDWS = function(startFrom, callback) {

	var collection = mongodb.collection('rawdata');

	var q = {
		"ts" : {
			"$gte" : new Date(startFrom)
		}
	};

	var f = {
		"ts" : 1,
		"_id" : 0
	};
	f["WD"] = 1;
	f["WS"] = 1;

	var s = {
		"sort" : {
			"ts" : 1
		}
	};

	collection.find(q, f, s, function(err, cursor) {
		var r = [];
		cursor.each(function(err, item) {
			if (item === null) {
				callback(err, r);
				return;
			}
			item.ts = item.ts.getTime();
			r.push(item);
		});
	});
};

findLastFrom = function(startFrom, fieldName, callback) {

	var collection = mongodb.collection('rawdata');

	var q = {
		"ts" : {
			"$gte" : new Date(startFrom)
		}
	};

	var f = {
		"ts" : 1,
		"_id" : 0
	};
	f[fieldName] = 1;

	var s = {
		"sort" : {
			"ts" : 1
		}
	};

	var sMax = {
		"sort" : {}
	};
	sMax["sort"][fieldName] = -1;

//	findMaxLastFrom(startFrom, fieldName, function(err, max) {

//		findMinLastFrom(startFrom, fieldName, function(err, min) {

			collection.find(q, f, s, function(err, cursor) {
				var r = [];
				cursor.each(function(err, item) {
					if (item === null) {
						callback(err, r);
						return;
					}
					item.ts = item.ts.getTime();
					//item.max = max;
					//item.min = min;
					r.push(item);
				});
			});
//		});
//	});
};


findLastFromRC = function(startFrom, fieldName, callback) {

	var collection = mongodb.collection('rain');

	var q = {
		"ts" : {
			"$gte" : new Date(startFrom)
		}
	};

	var f = {
		"ts" : 1,
		"_id" : 0
	};
	f[fieldName] = 1;

	var s = {
		"sort" : {
			"ts" : 1
		}
	};

	var sMax = {
		"sort" : {}
	};
	sMax["sort"][fieldName] = -1;

//	findMaxLastFromRC(startFrom, fieldName, function(err, max) {

	//	findMinLastFromRC(startFrom, fieldName, function(err, min) {

			collection.find(q, f, s, function(err, cursor) {
				var r = [];
				cursor.each(function(err, item) {
					if (item === null) {
						callback(err, r);
						return;
					}
					item.ts = item.ts.getTime();
					//item.max = max;
					//item.min = min;
					r.push(item);
				});
//			});
//		});
	});
};

findMinLastFrom = function(startFrom, fieldName, callback) {
	var collection = mongodb.collection('rawdata');

	var q = {
		"ts" : {
			"$gte" : new Date(startFrom)
		}
	};
	var f = {
		"ts" : 1,
		"_id" : 0
	};
	f[fieldName] = 1;

	var sMin = {
		"sort" : {}
	};
	sMin["sort"][fieldName] = 1;

	collection.findOne(q, f, sMin, function(err, max) {
		callback(err, max[fieldName]);
	});

};

findMaxLastFrom = function(startFrom, fieldName, callback) {
	var collection = mongodb.collection('rawdata');

	var q = {
		"ts" : {
			"$gte" : new Date(startFrom)
		}
	};
	var f = {
		"ts" : 1,
		"_id" : 0
	};
	f[fieldName] = 1;

	var sMax = {
		"sort" : {}
	};
	sMax["sort"][fieldName] = -1;

	collection.findOne(q, f, sMax, function(err, max) {
		callback(err, max[fieldName]);
	});

};


findMinLastFromRC = function(startFrom, fieldName, callback) {
	var collection = mongodb.collection('rain');

	var q = {
		"ts" : {
			"$gte" : new Date(startFrom)
		}
	};
	var f = {
		"ts" : 1,
		"_id" : 0
	};
	f[fieldName] = 1;

	var sMin = {
		"sort" : {}
	};
	sMin["sort"][fieldName] = 1;

	collection.findOne(q, f, sMin, function(err, max) {
		callback(err, max[fieldName]);
	});

};

findMaxLastFromRC = function(startFrom, fieldName, callback) {
	var collection = mongodb.collection('rain');

	var q = {
		"ts" : {
			"$gte" : new Date(startFrom)
		}
	};
	var f = {
		"ts" : 1,
		"_id" : 0
	};
	f[fieldName] = 1;

	var sMax = {
		"sort" : {}
	};
	sMax["sort"][fieldName] = -1;

	collection.findOne(q, f, sMax, function(err, max) {
		callback(err, max[fieldName]);
	});

};
