const robot = require('robotjs')
const keys = require('../presets/keys')

module.exports = function (cmdArr, down) {
  cmdArr.shift()
  const cmd = cmdArr.join(' ')
  console.log('toggle', cmd)
  robot.keyToggle(keys[cmd][0], down)
}
