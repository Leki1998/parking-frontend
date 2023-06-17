const mqtt=require('mqtt');

const client=mqtt.connect("mqtt://broker.hivemq.com:8883");
const topic="picow/ir_sensor_data"

client.on('connect', async () => {
    console.log('MQTT Connected');

    await client.subscribe(topic);
})

client.on('message', async (topic, message) => {
    console.log('\n[MQTT Received] Topic:', topic, ', Message:', message.toString());
})