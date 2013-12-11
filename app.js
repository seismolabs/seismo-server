var seismo = require('seismo');
var config = require('./config');
var logger = require('./source/utils/logger');

seismo.start(config, function (err, app) {
	var env = process.env.NODE_ENV || 'development';
	logger.info('seismo-server listening on port ' + app.get('port') + ' ' + env + ' mongo: ' + config.connection);
});