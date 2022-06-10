const write = require('./write.js')
const robot = require('robotjs')
const wait = require('./wait.js')

module.exports = async function (cmdArr) {
  cmdArr.shift()

  robot.keyTap('escape')
  await wait(50)
  robot.dragMouse(600, 205)
  await wait(50)
  robot.mouseClick()
  await wait(50)
  write(cmdArr)
  await wait(50)
  robot.keyTap('enter')
  await wait(50)
}
