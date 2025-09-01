const mongoose = require('mongoose');
const mongoosetimestamp = require("mongoose-timestamps");
const timestamps = require('mongoose-timestamps')
const Schema = mongoose.Schema;

let studentSchema = Schema({
    rollNo: { type: Number, required: true },
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    course: { type: String, required: true },
    branch: { type: String, required: true },
    yearOfAdmission: { type: String },
    studentImage: {type: String},
    createAt: Date,
    updateAt: Date,
});
studentSchema.plugin(timestamps, { index: true });
module.exports = mongoose.model('Student', studentSchema);