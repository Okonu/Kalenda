const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const ENCRYPT_TIMES = 10;

const { Schema } = mongoose;

const userSchema = mongoose;

const userSchema = new Schema({
    username: String,
    required: true,
    unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: [({ length}) => length >= 6, "Password must be at least 6 characters."]
    },

    events: [{
        date: {type: Date
    },
    time: {
        type: String
    },
    name: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    }
}]
);