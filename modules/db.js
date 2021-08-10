const mysql = require('mysql2');

module.exports = function () {
	try {
		return mysql.createConnection({
			host: 'db',
			user: 'elias',
			password: 'secret',
			database: 'test_db',
		});
	} catch (e) {
		console.error(e);
		return null;
	}
};
