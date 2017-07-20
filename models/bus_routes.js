var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var acBusSchema = new Schema({

    trip_duration: {
        type: String,
        require: true
    },
    Trip_cost: {
        type: Number,
        require: true
    },
    Time: {
        type: String,
        require: true
    }
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }

}, {
        timestamps: true
});


var nonAcBusSchema = new Schema({
    Trip_duration: {
        type: String,
        require: true
    },
    Trip_cost: {
        type: Number,
        require: true
    },
    Time: {
        type: String,
        require: true
    }
    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
}, {
    timestamps: true
});

var routeSchema = new Schema({
    from_location: {
        type: String,
        require: true
    },
    to_location: {
        type: String,
        require: true
    },
    travel_date: {
        type: String,
        require: true
    },
    ac_bus_details: [acBusSchema],

    Non_ac_bus_details: [nonAcBusSchema]

    // postedBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
}, {
    timestamps: true
});


var Routes = mongoose.model('Route', routeSchema);
module.exports = Routes;
