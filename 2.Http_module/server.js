const http = require('http')
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"content-type":"text/html"});

    if(req.url === '/'){
        res.end('<h1>Home page</h1><p>Welcome to the home page</p>');
    }
    else if (req.url === '/contact') {

        const filePath = path.join(__dirname, 'contact.html');

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('<h1>Internal Server Error</h1><p>There was an error reading the contact page.</p>');
            } else {
                console.log("filepath : " +filePath)
                res.end(data); // Send the content of contact.html
            }
        });
    } 
    else {
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1><p>Sorry, this page does not exist.</p>');
    }
});

server.listen(3000, ()=>{
    console.log("Server running at 3000");
});