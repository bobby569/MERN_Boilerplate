const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const passport = require('passport');
const path = require('path');
const session = require('cookie-session');
const keys = require('./config/keys');
require('./app/models/User');
require('./app/services/passport');

/*
	Resume the line of mongoose below to connect to the database
	after fill out the mongoURI in ./config/dev.js
 */

// mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(
	session({
		maxAge: 24 * 60 * 60 * 1000, // in microseconds
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

require('./app/routes/api')(app);

if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, err => {
	if (err) {
		throw err;
	}
	console.log(`Server is listening on http://localhost:3000/`);
});
