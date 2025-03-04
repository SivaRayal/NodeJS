const http = require('node:http');
const event = require('node:events');
const fs = require('node:fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 8081;
const myEventEmitter = new event.EventEmitter();
const daymap = new Map();
daymap.set(0, 'MONDAY');
daymap.set(1, 'TUESDAY');
daymap.set(2, 'WEDNESDAY');
daymap.set(3, 'THURSDAY');
daymap.set(4, 'FRIDAY');
daymap.set(5, 'SATURDAY');
daymap.set(6, 'SUNDAY');

myEventEmitter.on('getLuckyDay', (luckyDay) => {
    luckyDay.day += daymap.get(luckyDay.number % 7)
    console.log(luckyDay.day);
});

http.createServer((req, resp) => {
    console.log(req.url);
    if (req.url === '/') {
        filename = path.join(__dirname, '../views/index.html')
        fs.readFile(filename, 'utf-8', (err, content) => {
            if (err) {
                resp.writeHead(500);
                resp.end('Not able to load html view');
            } else {
                // resp.writeHead(200,{"Content-Type":"text/css"});
                // renderer.css(resp);
                resp.writeHead(200, { "Content-Type": "text/html" });
                resp.end(content);
            }
        });
    } else if (req.method === 'POST' && req.url === '/getLucyDay') {
        let result = '';
        console.log('inside post event');
        req.on('data', (chunk) => {
            result += chunk;
        });
        req.on('end', () => {
            console.log('Data received from client is - ' + result)

            resp.writeHead(200, { "Content-Type": "text/html" });
            const luckyDay = { number: parseInt(result), day: '' };
            myEventEmitter.emit('getLuckyDay', luckyDay);
            console.log('finalOut-' + luckyDay.day);
            resp.end(luckyDay.day);
        })
    } else {
        // resp.writableEnded(404);
        // resp.end('Page Not Found..!');
    }
}).listen(port, hostname, () => {
    console.log('Server is running up');
});