var express = require('express') 
var http = require('http') 
var path = require('path')
var exec = require('child_process').exec;

//load express
var app = express();

// all environments
app.set('port', 80);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'static')));

app.get('/print/:name/:products', function(req, res){
	exec('openscad -i output.scad -o output.stl', function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
	
	//console.log(req.param("name"));
	//console.log(req.param("products"));
	res.writeHead(200, "OK", {'Content-Type': 'text/json'});
    res.end("hello");
});

//setup the server
http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
});