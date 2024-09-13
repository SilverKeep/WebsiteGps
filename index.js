const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hostName = 'monkfish-app-xmvp8.ondigitalocean.app';


app.listen(port, hostName, () => console.log(`Server running at http://${hostName}:${port}/`))
