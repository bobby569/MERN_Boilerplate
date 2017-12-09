const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.model(
	'users',
	new Schema({
		firstname: String,
		lastname: String
	})
);
