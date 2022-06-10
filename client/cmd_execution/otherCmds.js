const robot = require('robotjs')
const keys = require('../presets/keys')

module.exports = function otherCmds(cmdArr, cmd) {
  switch (cmd) {
    case 'выделить всё':
    case 'выделить все':
    case 'стереть':
    case 'отменить':
    case 'вставить':
    case 'копировать':
    case 'вырезать':
    case 'закрой вкладку':
    case 'открой вкладку':
    case 'следующая вкладка':
    case 'восстанови вкладку':
    case 'отправить':
    case 'отправь':
    case 'стереть слово':
    case 'выделить слово':
      robot.keyTap(...keys[cmd])
      return
    default:
      console.log('No cases')
      return
  }
}

robot.dragMouse(1, 1)
Math.ceil()
