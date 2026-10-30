const min = 1
const max = 6

setInterval(() => console.log(Math.floor(Math.random() * (max - min + 1)) + min), 1000)
