const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4332 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        // eslint-disable-next-line no-console
        console.log('received: %s', message);
    });

    ws.send('Hi');
});