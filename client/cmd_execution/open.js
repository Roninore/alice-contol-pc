const links = require('../presets/openLinks.js')
const execute = require('../cmd_execution/shell_execute')

module.exports = function (cmdArr) {
  cmdArr.shift()
  const cmd = cmdArr.join(' ')
  execute(links[cmd])
}
