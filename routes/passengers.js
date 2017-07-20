// var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// var mongoose = require('mongoose');
//
// var Verify = require('./verify');
//
// var passengers = require('../models/passengers');
//
// router.get('/passenger-booking',Verify.verifyOrdinaryUser, function (req,res) {
//
//     passengers.findById(req.query.id,function(err, passanger) {
//        console.log(req);
//         if (err) throw err;
//        res.json(passanger);
//     });
// });
//
//
// // CREATES NEW BOOKING
// router.post('/passenger-booking',urlencodedParser, function (req, res) {
//
//     passengers.create(req.body, function (err, passenger) {
//        if (err) throw err;
//
//             console.log('booking successful');
//             var id = passenger._id;
//             var name = passenger.name;
//             res.writeHead(200,{
//                'content-Type': 'text/plain'
//             });
//             res.end('booking was successful with passenger name:'+ name +" ;  passenger name : "+ id);
//
//     });
// });
//
//
//
//
//
// module.exports = router;
