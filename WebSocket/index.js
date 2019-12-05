const WebSocket = require('ws');
const shell = require('shelljs');
const fs = require('fs');

const wss = new WebSocket.Server({ port: 4332 });

//let isWebSocketOpen = false;


wss.on('connection', function connection(ws) {
    //isWebSocketOpen = true;
    ws.on('message', function incoming(message) {
        let mess = JSON.parse(message);
        let response = parseMessage(mess);
        ws.send(JSON.stringify(response));
        /*fs.writeFile('test.js', mess, (error) => {
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
        })*/
    });


    ws.send(JSON.stringify('Hi'));
});

function runCode(data)
{
    let response = null;
    fs.writeFile('test.js', data.message, (error) => {
        if(error)
        {
            // eslint-disable-next-line no-console
            console.log('Error: ' + error);
            throw error;
        }
    });
    let executionString = 'docker run dwhunt/ubuntu-base cp test.js test.js && node test.js';
    shell.exec(executionString, { aysnc: true }, (code, stdout, stderr) => {
        response = { action: 'addToTerminal', code: code, err: stderr, message: stdout };
        return response;
    })
}

function parseMessage(message)
{
    let response = null;
    if(typeof(message.action) === 'undefined')
    {
        let str = 'Sent -> ' + message;
        response = { action: 'echo', message: str };
    }
    else
    {
        if(message.action.match('code'))
        {
            response = runCode(message);
        }
    }
    return response;
}

