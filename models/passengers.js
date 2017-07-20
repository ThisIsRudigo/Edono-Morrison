// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// //create Schema/model for your database
//
// var passengerSchema = new Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     gender: {
//         type: String,
//         require: true
//     },
//     phone_number: {
//         type: Number,
//         require: true
//     },
//     vehicle_type: {
//         type: String,
//         require: true
//     },
//     from_location: {
//         type: String,
//         require: true
//     },
//     to_location: {
//         type: String,
//         require: true
//      },
//     travel_time: {
//         type: String,
//         require: true,
//         Default: ''
//     },
//     travel_date: {
//         type: String,
//         require: true
//     },
//     return_date: {
//         type: String,
//         require: true
//     },
//     ticket_type: {
//         type: String,
//         require: true
//     },
//     seat_no: {
//         type: Number,
//         require: true
//     },
//     amount_paid: {
//         type: Number,
//         require: true
//     },
//     nextkin_name: {
//         type: String,
//         require: true
//     },
//     nextkin_phone: {
//         type: Number,
//         require: true
//     }
// }, {
//     timestamps: true
// });
//
// var Passengers = mongoose.model('Passenger', passengerSchema);
//
// module.exports = Passengers;