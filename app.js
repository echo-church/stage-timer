const config = require('./modules/config/config')

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

if (app.get('env') === 'development') {
    app.locals.pretty = true
}
let url = '//' + config.node().ip + ":" + config.node().port
let publicUrl = '//' + config.node().publicUrl

server.listen(config.node().port, () => console.log('ECHO Stage Timer listening on: ' + url))

app.get('/', function (req, res) {
    let defaultResponse = {
        "code": 200,
        "message": "ECHO STAGE TIMER"
    }
    res.status(defaultResponse.code)
    res.send(defaultResponse)
})

io.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'})
    socket.on('my other event', function (data) {
        console.log(data)
    })
})
