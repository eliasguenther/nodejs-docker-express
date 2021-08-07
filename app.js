const express = require('express');
const mysql = require('mysql2');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World! <a href="/connect">Connect</a>');
});

const db = mysql.createConnection({
	host: 'db',
	user: 'elias',
	password: 'secret',
	database: 'test_db',
});
app.get('/connect', (req, res) => {
	db.connect(function (err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}

		res.send('connected as id ' + db.threadId);
	});
});

app.listen(3000, () => {
	console.log('Started App');
});
