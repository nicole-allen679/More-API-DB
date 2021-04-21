const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const{ getTasks, createTask } = require('./src/tasks')
const app = express()

app.use(cors())

app.get('/tasks', getTasks)
app.post('/tasks', createTask)
// app.update('/tasks', changeTasks)
// app.delete('/tasks', deleteTasks)

 exports.app = functions.https.onRequest(app)
