// index.js

const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port and root directory
const port = process.env.PORT || 3000;
const rootDir = path.join(__dirname, 'public');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Get the file path based on the request URL
    let filePath = path.join(rootDir, req.url === '/' ? 'index.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';
}

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});