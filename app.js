// http module comes with node, so just require it
const http = require('http');
// file system module
const fs = require('fs'); 


const hostname = process.env.IP;
const port = process.env.PORT; 


fs.readFile('index.html', (err, html) => {
    if(err) {
        throw err;
    }

    const server = http.createServer( (req, res) => {
        // 200 status code
        res.statusCode = 200; 
        // set header
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        // res.end('Hello world!');
    }); 

   
    server.listen(port, hostname, () => {
       console.log("Server started on port: " + port); 
    }); 
    
});

