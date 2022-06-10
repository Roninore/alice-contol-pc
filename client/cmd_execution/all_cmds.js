const open = require('./open.js')
const press_key = require('./press_key.js')
const dialog = require('./dialog.js')
const write = require('./write.js')
const otherCmds = require('./otherCmds.js')
const toggleBTN = require('./toggleBTN.js')
const nums = require('../presets/nums.js')

async function* asyncGenerator(count) {
  let i = 0
  while (i < count) {
    yield i++
  }
}

module.exports = async function commands(command) {
  const cmdArr = command.split(' ')
  if (cmdArr[0] == 'алиса') cmdArr.shift()
  let count = 1
  if (cmdArr[1] == 'раз' || cmdArr[1] == 'раза') {
    try {
      if (!isNaN(nums[cmdArr[0]])) count = Number(nums[cmdArr[0]])
      cmdArr.shift()
      cmdArr.shift()
    } catch (e) {
      console.log(e)
    }
  }
  const cmd = cmdArr.join(' ')
  try {
    for await (let i of asyncGenerator(count)) {
      const cmdArrTemp = cmdArr.slice()
      console.log(cmdArrTemp)
      switch (cmdArrTemp[0]) {
        case 'открой':
        case 'ссылка':
          open(cmdArrTemp)
          break
        case 'нажми':
        case 'жми':
        case 'клавиша':
        case 'сочетание':
          press_key(cmdArrTemp)
          break
        case 'диалог':
          dialog(cmdArrTemp)
          break
        case 'напиши':
          write(cmdArrTemp)
          break
        case 'зажми':
        case 'удерживай':
          toggleBTN(cmdArrTemp, 'down')
          break
        case 'отпусти':
          toggleBTN(cmdArrTemp, 'up')
          break
        default:
          otherCmds(cmdArrTemp, cmd)
      }
      await wait(200)
    }
  } catch (e) {
    console.log(e)
  }
}
