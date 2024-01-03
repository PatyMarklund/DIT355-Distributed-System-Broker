// Implemented based on information provided in this Medium article https://medium.com/mindful-engineering/mqtt-aedes-broker-a036d607e5db

const aedes = require("aedes")(); // MQTT broker
const server = require('net').createServer(aedes.handle);
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)
const port = 1884;
const wsPort = 8884

server.listen(port, () => {
    console.log("Server listening on port", port)
})

httpServer.listen(wsPort, function () {
    console.log('Websocket server listening on port', wsPort)
})

aedes.authenticate = (client, username, password, callback) => {
    if (username !== undefined && password !== undefined) { // If username and password aren't provided we don't need to check if it's correct
        password = Buffer.from(password, 'base64').toString();
        if (username === 'team10' && password === 'team10') {
            return callback(null, true);
        }
    }
    console.log(`Client '${client.id}' could not be authenticated.`);
    return callback(null, false)
}

aedes.on('client', function (client) { // Log that a client has connected to the Broker
    console.log(`[CLIENT CONNECTED] Client '${(client ? client.id : client)}' connected. \nTotal number of clients connected: ${aedes.connectedClients}`)
})

aedes.on('clientDisconnect', function (client) { // Log that a client has disconnected from the Broker
    console.log(`[CLIENT DISCONNECTED] Client '${(client ? client.id : client)}' disconnected. \nTotal number of clients connected: ${aedes.connectedClients}`)
})

aedes.on('publish', async function (packet, client) { // Log that a client has published a message to the Broker
    if (client) {
        console.log(`[MESSAGE PUBLISHED] Client '${(client ? client.id : 'BROKER_' + aedes.id)}' has published a message on ${packet.topic}.`)
    }
})

aedes.on('subscribe', function (subscriptions, client) { // Log that a client has subscribed to a topic
    console.log(`[TOPIC SUBSCRIBED] Client '${(client ? client.id : client)}' subscribed to topic: ${subscriptions.map(s => s.topic).join(',')}.`)
})
