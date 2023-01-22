const express = require('express')
const viewEngine = require('./src/config/viewEngine.js')
const router = require('./routes')

const app = express()
viewEngine(app)

app.use(router)




app.listen(5000, ()=> console.log('server listening on port 5000'))