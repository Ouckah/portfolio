const { WebcastPushConnection } = require('tiktok-live-connector');
const express = require('express');
const expressWs = require('express-ws');

const { app } = expressWs(express());

const clients = [];

const tiktokUsername = 'ani.n.alex'; // put the username here
const tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

tiktokLiveConnection
    .connect()
    .then((state) => {
        console.info(`Connected to roomId ${state.roomId}`);
    })
    .catch((err) => {
        console.error('Failed to connect', err);
    });

// Define the events that you want to handle
// In this case we listen to chat messages (comments)
tiktokLiveConnection.on('chat', data => {
    for (const client of clients) {
        client.send(JSON.stringify(data));
    }
    console.log(`${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);
});

// And here we receive gifts sent to the streamer
tiktokLiveConnection.on('gift', data => {
    console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
});

app.ws('/api/tiktok', (ws, req) => {
    clients.push(ws);
    ws.on('close', () => {
        const index = clients.indexOf(ws);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });
});

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});