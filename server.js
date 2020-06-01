const http = require('http');
const url = require('url');
const port = 8000;

const requestHandler = (request, response) => {
    const parseUrl = url.parse(request.url, true)
    const name = parseUrl.query.name
    const city = parseUrl.query.city
    if (request.url === '/') {
        response.end('Hello Node.js Server !')
    } else if (name && city) {
        response.end(`Hello, ${name} from ${city}`)
    } else {
        response.end('Please provide name and city parameters.')
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.error('Something bad happened')
    } else {
        console.log(`server is listening on ${port}`)
    }
});