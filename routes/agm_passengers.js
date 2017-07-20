var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// var Verify = require('./verify');


var passengers = require('../models/agm_passengers');

var router = express.Router();
router.use(bodyParser.json());


router.route('/')

    // view all registered passengers information in database
.get(function (req,res) {

    passengers.find({},function(err, passenger) {
        if (err) throw err;
        res.json(passenger);
    });
})


    // CREATES NEW passenger BOOKING information into the database
.post(function (req, res) {

    passengers.create(req.body, function (err, passenger) {
        if (err) throw err;

        console.log('booking successful');
        var id = passenger._id;
        res.writeHead(200,{
            'content-Type': 'text/plain'
        });
        res.end('booking was successful with  passenger name : '+ id);
    });
})

.delete (function (req,res) {

    passengers.remove({},function(err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

router.route('/:passengersId')

//    view specific user information in the database
.get(function (req,res) {

    passengers.findById(req.params.passengersId, function(err, passenger) {
        if (err) throw err;

        res.json(passenger);
    });
})

// .put(function (req, res) {
//
//     passengers.findByIdAndUpdate(req.params.passengersId, {
//         $set: req.body
//     },{
//         new: true
//     }, function (err, passenger) {
//         if (err) throw err;
//
//         res.json(passenger);
//     });
// })

//    delete a particular user information from the database
.delete(function (req, res) {

    passengers.remove(req.params.passengersId, function (err, resp) {
        if (err) throw err;

        res.json(resp);

    });
});

module.exports = router;
