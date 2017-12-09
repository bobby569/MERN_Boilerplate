const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');

/*
	Resume the line of mongoose below to connect to the database
	after fill out the mongoURI in ./config/dev.js
 */

// mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

require('./routes/api')(app);

if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8080;
app.listen(PORT);
