const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.use(express.json())

app.use(routes)

app.use((req, res, next) => res.status(404).send());

app.listen(port)