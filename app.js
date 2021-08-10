//Nodejs app with mysql2

const express = require('express');
const db = require('./modules/db');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World! <a href="/connect">Connect</a>');
});

app.get('/connect', (req, res) => {
	const sql = db();

	sql.connect(function (err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}

		res.send('id as ' + sql.threadId);
	});
});

app.listen(3000, () => {
	console.log('Started App');
});
