const http = require('http');
const url = require('url');

const address = 'http://localhost:1337?year=2021&month=January';

// Create a server.
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // Gör din response till text/html.
    let q = url.parse(req.url, true).query; // assign en variabel till sök, query.
    let txt = q.year + ' ' + q.month; // Query.year, query.month (year 2021, month April)
    const split = url.parse(address, true); // url tar 2 argument, addressen till sidan och boolean.
    console.log(split.search); // split.search visar vad som finns efter query string.
    const qdata = split.query;
    console.log(qdata); // qdata är en objekt med det som står i query string.
    res.write(qdata.year + ' ' + qdata.month); // skickar till frontend.
    res.end(); // slutar the response som skickades till frontend.
}).listen(1337); // Servern lyssnar på PORT 1337.
 