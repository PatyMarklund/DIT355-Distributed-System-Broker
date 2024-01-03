const mqtt = require('mqtt');

const options = {
    qos: 2
}
const credentials = {
    'username': 'team10',
    'password': 'team10',
    'clientId': 'Test publisher'
}
const updatedBooking = {
    '_id': ('63985dba813f7ea65698bb2a'),
    'patient': {
          email: 'kaja@test.com',
          firstName: 'Kajsa',
          lastName: 'Anka',
          ssn: 1234567890
        },
      }

const client = mqtt.connect("mqtt://localhost:1884", credentials);

client.on('connect', function () {
    console.log("Connected to the broker.")
    setInterval(() => {
        if (!client.connected) {
            console.log("Lost connection to the broker.")
            return
        }
        client.publish('booking/update-booking/id/request', JSON.stringify(updatedBooking), options)
        console.log("Message sent to topic: booking/update-booking/id/request")
    }, 10000)
})

client.on('error', (error) => {
    console.log("Error: " + error)
})