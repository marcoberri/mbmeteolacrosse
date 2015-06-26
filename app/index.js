var conf = require('./conf.js');
var express = require('express');
var compression = require('compression');
var session = require('express-session');
var morgan = require('morgan');
var fs = require('fs');
var responseTime = require('response-time');
var bodyParser = require('body-parser')

var app = express();

//set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//express response time
app.use(responseTime())

// express body.parser
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
  
// express compress all requests
app.use(compression());

//express static folder
app.use(express.static(__dirname + '/public'));

//express session
app.use(session({
  secret: '29457934759248934dfbkjn89154789rgoòires8',
    resave: false,
      saveUninitialized: true
}));


//logger
var accessLogStream = fs.createWriteStream(conf.ACCESS_LOG, {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));

//all request logging
app.all('/*', function (req, res, next) {
    console.log('Accessing path: ' + req.path);
    console.log('Cluster:' + process.pid);
    next(); 
});



//servlet di caricamento dati
var routesRest = require('./controller/rest');
app.post('/data/addData', routesRest.addData);




//template di index
var site = require('./controller/site.js');

app.get('/', function (req, res) {
	site.findLastLog(function(err,act){ 
		res.render('index', {
	                       actual: act
	             });
	    });
 });


app.get('/7day', function (req, res) {
	site.findLastLog(function(err,act){ 
		res.render('7day', {
	                       actual: act
	             });
	    });

 });

app.get('/last',site.findLast);

app.get('/30day', function (req, res) {
	site.findLastLog(function(err,act){ 
		res.render('30day', {
	                       actual: act
	             });
	    });

 });

app.get('/365day', function (req, res) {
	site.findLastLog(function(err,act){ 
		res.render('365day', {
	                       actual: act
	             });
	    });

 });

//dati dei grafici 24 ore
app.get('/T/24', site.findLastT24);
app.get('/H/24', site.findLastH24);
app.get('/PRESS/24', site.findLastPRESS24);
app.get('/WC/24', site.findLastWC24);
app.get('/WDWS/24', site.findLastWDWS24);
app.get('/RC/24', site.findLastRC24);

app.get('/T/7', site.findLastT7);
app.get('/H/7', site.findLastH7);
app.get('/PRESS/7', site.findLastPRESS7);
app.get('/WC/7', site.findLastWC7);
app.get('/WDWS/7', site.findLastWDWS7);
app.get('/RC/7', site.findLastRC7);

app.get('/T/30', site.findLastT30);
app.get('/H/30', site.findLastH30);
app.get('/PRESS/30', site.findLastPRESS30);
app.get('/WC/30', site.findLastWC30);
app.get('/WDWS/30', site.findLastWDWS30);
app.get('/RC/30', site.findLastRC30);


app.get('/T/365', site.findLastT365);
app.get('/H/365', site.findLastH365);
app.get('/PRESS/365', site.findLastPRESS365);
app.get('/WC/365', site.findLastWC365);
app.get('/WDWS/365', site.findLastWDWS365);
app.get('/RC/365', site.findLastRC365);


// Handle Error
app.use(function(req, res) {
     res.status(404).send('404: Page not Found');
});

var server = app.listen(conf.APP_PORT, function () {
  
  var host = server.address().address;
  var port = server.address().port;
      
 console.log('listen at http://%s:%s', host, port);
     
});
