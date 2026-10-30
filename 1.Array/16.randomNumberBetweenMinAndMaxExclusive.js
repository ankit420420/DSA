const min = 11
const max = 20
const decimal = 2
const factor = 10 ** decimal

const random = Math.floor(Math.random() * (max - min) * factor) / factor + min
console.log("random:", random.toFixed(decimal))
