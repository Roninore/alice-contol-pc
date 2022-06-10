const clipboardy = require('clipboardy')
const robot = require('robotjs')
const wait = require('./wait')

module.exports = function otherCmds(cmdArr) {
  if (cmdArr[0] == 'напиши' || cmdArr[0] == 'введи') cmdArr.shift()
  const str = cmdArr.join(' ')
  // const saveClipboard = clipboardy.readSync()
  clipboardy.writeSync(str)
  wait(100)
  robot.keyTap('v', ['control'])
  // clipboardy.writeSync(saveClipboard)
}
