const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res)=> {
//using lodash

const num = _.random(0, 20);
console.log(num); 
//set header content type
res.setHeader('Content-Type', 'text/html');

let path = './views/'
switch (req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200
        break;
    default:
        path += '404.html';
        res.statusCode = 200;
        
        break;
}

//send html file
fs.readFile(path, (err, data)=>{
    if(err) {
        console.log(err);
        res.end();
    } else {
        //since we're returning one value
        res.end(data);
    }
})
});


server.listen(3000, 'localhost', ()=> {
    console.log('Listening for request on port 3000');
});
