var seismo = require('seismo');
var config = require('./config');

seismo.start(config, function (err, app) {
	var env = process.env.NODE_ENV || 'development';
	console.log('seismo-server listening on port ' + app.get('port') + ' ' + env + ' mongo: ' + config.connection);
});