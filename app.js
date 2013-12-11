var seismo = require('seismo');
var config = require('./config');
var spawn = require('child_process').spawn;

function startServer() {
	seismo.start(config, function (err, app) {
		var env = process.env.NODE_ENV || 'development';
		console.log('seismo-server listening on port ' + app.get('port') + ' ' + env + ' mongo: ' + config.connection);
	});
}

spawn('/usr/bin/mongod');
setTimeout(1000, startServer);