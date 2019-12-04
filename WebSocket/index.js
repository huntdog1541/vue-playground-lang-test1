const WebSocket = require('ws');
const shell = require('shelljs');
const fs = require('fs');

const wss = new WebSocket.Server({ port: 4332 });

//let isWebSocketOpen = false;


wss.on('connection', function connection(ws) {
    //isWebSocketOpen = true;
    ws.on('message', function incoming(message) {
        let mess = JSON.parse(message);
        fs.writeFile('test.js', mess, (error) => {
            if(error)
            {
                console.log('Error: ' + error);
                throw error;
            }
        });
        // eslint-disable-next-line no-console
        console.log('received: %s', mess);
        let executionString = 'docker run dwhunt/ubuntu-base cp test.js test.js && node test.js';
        let data = null;
        shell.exec(executionString, {async: true}, (code, stdout, stderr) => {
            data = {action: "addToTerminal", code: code, err: stderr, message: stdout };
            ws.send(JSON.stringify(data));
        })
    });


    ws.send(JSON.stringify('Hi'));
});