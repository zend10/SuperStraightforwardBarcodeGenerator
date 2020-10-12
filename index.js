let fs = require('fs')
let JsBarcode = require('jsbarcode')
let { createCanvas } = require('canvas')

let quantity = 300

for (let i = 0; i < quantity; i++) {
    let number = getRndInteger(10000001, 99999999)
    let canvas = createCanvas()
    JsBarcode(canvas, number)
    let buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(`./img/${number}.png`, buffer)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}