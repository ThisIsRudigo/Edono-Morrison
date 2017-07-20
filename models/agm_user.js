var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

//create Schema
var agmUser = new Schema({
        username: {
            type:String,
            unique: true
        },
        password: {
            type:String
        },
        firstName: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: ''
        },
        phone_number: {
            type: Number,
            require: true,
            unique: true
        },
        gender: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        dateOfBirth:{
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        admin: {
            type: Boolean,
            default: false
        }
    }, {
        timestamps: true
});

agmUser.methods.getName = function () {
  return (this.firstName + ' ' + this.lastName)
};

agmUser.plugin(passportLocalMongoose);

module.exports = mongoose.model('agmUser', agmUser);

