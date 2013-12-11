var config = {
	connection: 'mongodb://localhost:27017/analyticsdb',
	authKey: 'ffbac26ce2b99cfc3c60a7eb911a108d4823ba1a',
	tokenTtl: 60,

	users: {
		'seismo': '$2a$12$.Xp6U9nnZKVq78peM.M8ye1o2wd4H6YE40N/JMWEd7mqXidNGbEg2'
	}
};

module.exports = config;