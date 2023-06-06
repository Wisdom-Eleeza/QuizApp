const express = require('express')
const app = express()

const port = 8080

app.get('/', (req, res) => {
    res.send('Authentication')
})

app.listen(`Sever listening on port ${port}`)