var conf = require('../conf.js');
var mongoskin = require('mongoskin');


var mongodb = mongoskin.db('mongodb://' + conf.MONGO_URL, {safe:true});

exports.addImport = function(key,obj,callback){
  var collection = mongodb.collection('rawdata');
  collection.update(key,  obj, {upsert:true}, function(err, result) {
      if (err) throw err;
          if (result) console.log('Added!');
          callback();
      });
};

