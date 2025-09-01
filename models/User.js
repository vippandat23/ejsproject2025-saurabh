const mongoose = require('mongoose');
const mongoosetimestamp = require("mongoose-timestamps");
const timestamps = require('mongoose-timestamps')
const Schema = mongoose.Schema;
let userSchema = Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
   // confirmpassword: { type: String, required: true },
    userType: { type: String, default: 'student' },
    createAt: Date,
    updateAt: Date,
});
userSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model('User', userSchema);