//Creating a Basic Web Server

//node module
const http = require('http');

//if we want to load in a file, we have to bring in the file system module
const fs = require('fs');

//loopback address
const hotstName = '127.0.0.1';
const port = '3000';

fs.readFile('index.html', (err, html) => {

    //checks if there is an error loads the file
    if (err) {
        throw err;
    }

    const server = http.createServer((request, response) => {

        //set a status code
        response.statusCode = 200;
        response.setHeader('Conent-type', 'text/html');
        response.write(html); //reads file
        response.end(); //tels the server to end output here
    
    });
    
    server.listen(port, hotstName, () => {
        console.log(`server started on port ${port}`);
    });

});

