var conf = require('./conf.js');
var express = require('express');
var compression = require('compression');
var session = require('express-session');
var morgan = require('morgan');
var fs = require('fs');
var responseTime = require('response-time');
var bodyParser = require('body-parser')

var app = express();

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
app.use(express.static('public'));

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





app.get('/', function (req, res) {
	
   /* var n = req.session.views || 0;
    req.session.views = ++n;
    var text = "Start page";
    text +="\n tot view:" + n;
    res.send(text);*/
  
 });

// Handle Error
app.use(function(req, res) {
     res.status(404).send('404: Page not Found');
});

var server = app.listen(conf.APP_PORT, function () {
  
  var host = server.address().address;
  var port = server.address().port;
      
 console.log('listen at http://%s:%s', host, port);
     
});