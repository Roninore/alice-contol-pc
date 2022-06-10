const robot = require('robotjs')
const clipboardy = require('clipboardy')

const { exec } = require('child_process')

function execute(cmd) {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
}

const wait = async (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

function asyncEvent(color, x, y) {
  return new Promise((res) => {
    const interval = setInterval(() => {
      if (robot.getPixelColor(x, y) == color) {
        res(true)
        clearInterval(interval)
      }
    }, 500)
    const timeout = setTimeout(() => {
      clearInterval(interval)
      res(false)
    }, 10000)
  })
}

setTimeout(async () => {
  // const pos = robot.getMousePos()
  // console.log(pos)
  // const color = robot.getPixelColor(pos.x, pos.y)
  // console.log(color)
  // const total = robot.getScreenSize()
  // console.log(total)
  // robot.dragMouse(total.width - 100, total.height - 100)
  /////////
  // execute(
  //   'start chrome https://hd.kinopoisk.ru/film/42be2adae091f64aadb3bbf449285242'
  // )
  // await asyncEvent(762649, 166, 675)
  // robot.dragMouse(166, 675)
  // robot.mouseClick()
  robot.keyTap('escape')
  await wait(50)
  robot.dragMouse(600, 205)
  await wait(50)
  robot.mouseClick()
  await wait(50)
  clipboardy.writeSync('избранное')
  await wait(50)
  robot.keyTap('v', ['control'])
  await wait(50)
  robot.keyTap('enter')
  await wait(50)
  clipboardy.writeSync('привет лох')
  await wait(50)
  robot.keyTap('v', ['control'])
  await wait(50)
  robot.keyTap('enter')
}, 2000)

// setInterval(() => {
//   const pos = robot.getMousePos()
//   console.log(pos)
//   const color = robot.getPixelColor(pos.x, pos.y)
//   console.log(color)
// }, 1000)
