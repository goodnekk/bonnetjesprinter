var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
});

requirejs(['express', 'http', 'path'], function (express, http, path) {
	
	//load express
	var app = express();

	// all environments
	app.set('port', 80);
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');
	app.use(express.static(path.join(__dirname, 'static')));

	//setup the server
	http.createServer(app).listen(app.get('port'), function(){
  		console.log('Express server listening on port ' + app.get('port'));
	});

});