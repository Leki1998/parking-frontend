// const express = require('express')
// const mongoose = require('mongoose')
// const app = express()
// const port = 8080

// const Event=require('./eventModel')

// app.use(express.json());

// const client=mqtt.connect("mqtt://broker.hivemq.com:8883");
// const topic="picow/ir_sensor_data"

// client.on('connect', async () => {
//     console.log('MQTT Connected');

//     await client.subscribe(topic);
// })

// client.on('message', async (topic, message) => {
//     console.log('\n[MQTT Received] Topic:', topic, ', Message:', message.toString());

//     // let data = message;
//     let data = message.toString();
//     data = JSON.parse(data);
//     data._id = shortId.generate();
//     data.created = moment().utc().add(5, 'hours');

//     // Save live data into database
//     await saveData(data);
// })



// app.listen(port, async () => {
//     await mongoose.connect('mongodb+srv://jplearning:KC8CdRpHe3QwPIm5@cluster0.7xqgz4q.mongodb.net/Practice?retryWrites=true&w=majority');

//     console.log(`Example app listening on port ${port}`)
// })

// //await mongoose.connect('mongodb+srv://02180414cst:Bhutan1998@cluster0.xk4ifhv.mongodb.net/?retryWrites=true&w=majority');

// const shortId = require('shortid');
// const mongoose = require('mongoose');
//
// const mqtt=require('mqtt');
//
// //Importing the model
//
// const Event=require("./eventmodel")
// const client = mqtt.connect('mqtt://broker.hivemq.com:1883');
// const topic="picow/ir_sensor_data"
//
//
// // MongoDB Connection Success
// mongoose.connection.on('connected', () => {
//     console.log('MongoDb connected');
// });
//
// // MongoDB Connection Fail
// mongoose.connection.on('error', (err) => {
//     console.log('Error connecting MongoDb', err);
// });
//
// //Connecting the MQTT Broker
// client.on('connect', async () => {
//     console.log('MQTT Connected');
//     await mongoose.connect('mongodb+srv://02180414cst:Bhutan1998@cluster0.pwyalfw.mongodb.net/data_one?retryWrites=true&w=majority');
//
//     await client.subscribe(topic);
// })
//
// client.on('message', async (topic, message) => {
//     console.log('[MQTT Received] Topic:', topic, ', Message:', message.toString());
//
//     let data = message.toString();
//     data = JSON.parse(data);
//     data._id = shortId.generate();
//
//     // Save live data into database
//     await saveData(data);
//
// })
// saveData = async (data) => {
//     data = new Event(data);
//     data = await data.save();
//     console.log('Saved data:', data);
// }


const shortId = require('shortid');
const mongoose = require('mongoose');
const mqtt = require('mqtt');
const socketIO = require('socket.io');

// Importing the model
const Event = require('./eventmodel');

const client = mqtt.connect('mqtt://broker.hivemq.com:1883');
const topic = 'picow/ir_sensor_data';

// MongoDB Connection Success
mongoose.connection.on('connected', () => {
    console.log('MongoDb connected');
});

// MongoDB Connection Fail
mongoose.connection.on('error', (err) => {
    console.log('Error connecting MongoDb', err);
});

// Connect to MongoDB and MQTT broker
async function connect() {
   // await mongoose.connect('mongodb+srv://02180414cst:Bhutan1998@cluster0.pwyalfw.mongodb.net/data_one?retryWrites=true&w=majority');

    client.on('connect', () => {
        console.log('MQTT Connected');
        client.subscribe(topic);
    });

    client.on('message', async (topic, message) => {
        console.log('[MQTT Received] Topic:', topic, ', Message:', message.toString());

        let data = message.toString();
        data = JSON.parse(data);
        data._id = shortId.generate();

        // Save live data into database and emit to Socket.IO clients
        const savedData = saveData(data);
        io.emit('data', savedData);
    });
}

// Save data to MongoDB
 function saveData(data) {
    data = new Event(data);
   // const savedData = await data.save();
    console.log('Saved data:', data);
    return data;
}

// Create a Socket.IO server
const server = require('http').createServer();
const io = socketIO(server,{
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});

// Socket.IO connection handler
io.on('connection', (socket) => {
    console.log('Socket.IO connected:', socket.id);

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Socket.IO disconnected:', socket.id);
    });
});

// Start the server
server.listen(3001, () => {
    console.log('Server listening on port 3001');
    connect();
});