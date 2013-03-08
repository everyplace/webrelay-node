var express = require('express')
  , http = require('http')
  , path = require('path')
  , request = require('request')
  , door = require('./middleware/door')
  , view = require('./routes/view');

var app = module.exports = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
  
app.get('/', door.knock, view.door);
app.post('/open', door.open);

if(process.env.DEBUG == 'true') {
  console.log("DEBUG ENABLED");
  
  var debug = require('./middleware/debug');
  app.post('/trigger', debug.output);
};

http.createServer(app).listen(app.get('port'), function(){
  console.log("WebRelay-Door listening on port " + app.get('port'));
});
