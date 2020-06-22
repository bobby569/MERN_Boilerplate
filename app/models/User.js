const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.model(
    'users',
    new Schema({
        username: String,
        firstname: String,
        lastname: String,
    }),
);
