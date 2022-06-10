const robot = require('robotjs')
const keys = require('../presets/keys')

module.exports = function (cmdArr) {
  cmdArr.shift()
  const cmd = cmdArr.join(' ')
  robot.keyTap(...keys[cmd])
}
