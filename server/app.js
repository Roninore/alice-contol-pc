const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

let lastCommand = { date: Date.now(), text: '' }

app.use(express.json({ extended: true }))
app.use('/execute', async (req, res) => {
  console.log('Алиса сделала запрос!')
  console.log(req.headers)
  if (
    req.headers.hasOwnProperty('date') &&
    req.headers.hasOwnProperty('text')
  ) {
    lastCommand = { date: req.headers.date, text: req.headers.text }
    io.emit('message', lastCommand)
  }
  res.status(200).json({ msg: 'good' })
})

const PORT = 80
const connections = []

async function start() {
  try {
    server.listen(PORT, () => console.log(`Started, on port: ${PORT}`))
    io.on('connection', (socket) => {
      console.log('Подключено')
      connections.push(socket)
      socket.on('disconnect', (data) => {
        console.log('Отключено')
        connections.splice(connections.indexOf(socket), 1)
      })
    })
  } catch (e) {
    console.log('err', e)
  }
}

start()
