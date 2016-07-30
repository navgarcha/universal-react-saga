module.exports = {
	connections: [{
		host: 'localhost',
		port: 8000
	}],
	registrations: [{
		plugin: 'inert'
	}, {
		plugin: 'vision'
	}, {
		plugin: {
			register: 'visionary',
			options: {
				engines: {
					ejs: 'ejs'
				},
				relativeTo: __dirname,
				path: 'views'
			}
		}
	}]
};
