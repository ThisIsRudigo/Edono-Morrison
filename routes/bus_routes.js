var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var Verify = require('verify');

var bus_routes = require('../models/bus_routes');

var router = express.Router();
router.use(bodyParser.json());
router.route('/')


.get(function (req,res) {

    bus_routes.find({},function(err, bus_route) {
        if (err) throw err;
        res.json(bus_route);
    });
})


    // REGISTERS NEW INFORMATION INTO THE BUS_ROUTES
.post(function (req, res) {

    bus_routes.create(req.body, function (err, bus_route) {
        if (err) throw err;

        console.log('Route added successful');
        var id = bus_route._id;
        res.writeHead(200,{
            'content-Type': 'text/plain'
        });
        res.end(' Route : '+ id);

    });
})

.delete (function (req,res) {

    bus_routes.remove({},function(err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

router.route('/:bus_routesId')

.get(function (req,res) {

    bus_routes.findById(req.params.bus_routesId, function(err, bus_route) {
        if (err) throw err;

        res.json(bus_route);
    });
})

.put(function (req, res) {

    bus_routes.findByIdAndUpdate(req.params.bus_routesId, {
        $set: req.body
    },{
        new: true
    }, function (err, bus_route) {
        if (err) throw err;

        res.json(bus_route);
    });
    
    
})
    
.delete(function (req, res) {

    bus_routes.remove(req.params.bus_routesId, function (err, resp) {
        if (err) throw err;

        res.json(resp);

    })
});


router.route('/:bus_routesId/Non_ac_bus_details')

.get(function (req,res) {

    bus_routes.findById(req.params.bus_routesId, function(err, bus_route) {
        if (err) throw err;

        res.json(bus_route.Non_ac_bus_details);
    });
})

.post(function (req, res) {

    bus_routes.findById(req.params.bus_routesId, function (err, bus_route) {

        if (err) throw err;
        bus_route.Non_ac_bus_details.push(req.body);

        bus_route.save(function (err, bus_route) {
            if (err) throw err;

            res.json(bus_route)
        });
    });
})

.delete(function (req, res) {

    bus_routes.findById(req.params.bus_routesId, function (err, bus_route) {
        if (err) throw err;

        for (var i = (bus_route.Non_ac_bus_details.length - 1); i>= 0; i--){
            bus_route.id(bus_route[i]._id).remove();
        }

        bus_route.save(function (err, result) {
            if (err) throw err;

            res.writeHead(200, {
                'content-Type': 'text/plain'
            });
            res.end('delete all comments')
        });
    });
});


router.route('/:bus_routesId/Non_ac_bus_details/:Non_ac_bus_detailsId')

.get(function (req,res) {

    bus_routes.findById(req.params.bus_routesId, function(err, bus_route) {
        if (err) throw err;

        res.json(bus_route.Non_ac_bus_details.id(req.params.Non_ac_bus_detailsId));
    });
})

.put(function (req, res) {

    bus_routes.findById(req.params.bus_routesId, function(err, bus_route){
        if (err) throw err;

        bus_route.Non_ac_bus_details.id(req.params.Non_ac_bus_detailsId).remove();

        bus_route.Non_ac_bus_details.push(req.body);

        bus_route.save(function (err, bus_route) {
            if (err) throw err;
            console.log('Updated trip information');
            console.log(bus_route);

            res.json(bus_route);
        });
    });
})

.delete(function (req, res) {

    bus_routes.findById(req.params.bus_routesId, function (err, bus_route) {
        bus_route.Non_ac_bus_details.id(req.params.Non_ac_bus_detailsId).remove();

        bus_route.save(function (err, resp) {
            if (err) throw err;

            res.json(resp);
        });
    });
});

router.route('/:bus_routesId/ac_bus_details')

    .get(function (req,res) {

        bus_routes.findById(req.params.bus_routesId, function(err, bus_route) {
            if (err) throw err;

            res.json(bus_route.ac_bus_details);
        });
    })

    .post(function (req, res) {

        bus_routes.findById(req.params.bus_routesId, function (err, bus_route) {

            if (err) throw err;
            console .log(bus_route);
            bus_route.ac_bus_details.push(req.body);

            bus_route.save(function (err, bus_route) {
                if (err) throw err;

                res.json(bus_route)
            });
        });
    })

    .delete(function (req, res) {

        bus_routes.findById(req.params.bus_routesId, function (err, bus_route) {
            if (err) throw err;

            for (var i = (bus_route.ac_bus_details.length - 1); i>= 0; i--){
                bus_route.id(bus_route[i]._id).remove();
            }

            bus_route.save(function (err, result) {
                if (err) throw err;

                res.writeHead(200, {
                    'content-Type': 'text/plain'
                });
                res.end('delete all comments')
            });
        });
    });


router.route('/:bus_routesId/ac_bus_details/:ac_bus_detailsId')

    .get(function (req,res) {

        bus_routes.findById(req.params.bus_routesId, function(err, bus_route) {
            if (err) throw err;

            res.json(bus_route.ac_bus_details.id(req.params.ac_bus_detailsId));
        });
    })

    .put(function (req, res) {

        bus_routes.findById(req.params.bus_routesId, function(err, bus_route){
            if (err) throw err;

            bus_route.ac_bus_details.id(req.params.ac_bus_detailsId).remove();

            bus_route.ac_bus_details.push(req.body);

            bus_route.save(function (err, bus_route) {
                if (err) throw err;
                console.log('Updated trip information');
                console.log(bus_route);

                res.json(bus_route);
            });
        });
    })

    .delete(function (req, res) {

        bus_routes.findById(req.params.bus_routesId, function (err, bus_route) {
            bus_route.ac_bus_details.id(req.params.ac_bus_detailsId).remove();

            bus_route.save(function (err, resp) {
                if (err) throw err;

                res.json(resp);
            });
        });
    });

module.exports = router;
