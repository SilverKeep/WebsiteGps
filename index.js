const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Setup essential routes 
app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html')); 
    //__dirname : It will resolve to your project folder. 
}); 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))