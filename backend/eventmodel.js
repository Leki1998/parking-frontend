const mongoose = require('mongoose');
//const moment = require('moment');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({

    device_id: {
        type: String,
        
    },
    //Senosr Type
    sensor_type: {
        type: String,
       
    },
    sensor: {
        type: Number,
        
    },
    _id: {
        type: String,
        
    },
}, {
        _id: false,
        id: false,
        versionKey: false,
        strict: false,
        timestamps:true
    }
);
module.exports = mongoose.model('Event', eventsSchema)