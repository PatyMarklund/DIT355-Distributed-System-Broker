const mqtt = require('mqtt');

const credentials = {
    'username': 'team10',
    'password': 'team10',
    'clientId': 'Test publisher'
}

const client = mqtt.connect("mqtt://localhost:1884", credentials);
client.on('connect', function () {
    console.log("Connected to the broker.")
    for (let i = 0; i < 20; i++) {
        setInterval(() => {
            if (!client.connected) {
                console.log("Lost connection to the broker.")
                return
            }
            client.publish('booking/createTest', JSON.stringify({"name": "test"}));
            console.log("Message sent to topic: booking/createTest")
        }, 100)
    }
})

client.on('error', (error) => {
    console.log("Error: " + error)
})