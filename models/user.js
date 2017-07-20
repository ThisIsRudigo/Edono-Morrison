// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var passportLocalMongoose = require('passport-local-mongoose');
//
// //create Schema
// var User = new Schema({
//         username: {
//             type:String,
//             unique: true
//         },
//         password: {
//             type:String
//         },
//         firstName: {
//             type: String,
//             default: ''
//         },
//         lastName: {
//             type: String,
//             default: ''
//         },
//         phone_number: {
//             type: Number,
//             require: true,
//             unique: true
//         },
//         gender: {
//             type: String,
//             require: true
//         },
//         email: {
//             type: String,
//             require: true,
//             unique: true
//         },
//         dateOfBirth:{
//             type: String,
//             require: true
//         },
//         address: {
//             type: String,
//             require: true
//         },
//         admin: {
//             type: Boolean,
//             default: false
//         }
//     }, {
//         timestamps: true
// });
//
// User.methods.getName = function () {
//   return (this.firstName + ' ' + this.lastName)
// };
//
// User.plugin(passportLocalMongoose);
//
// module.exports = mongoose.model('User', User);
//
