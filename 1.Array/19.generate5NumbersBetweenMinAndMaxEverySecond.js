const min = 10
const max = 20
let count = 0

const intervalId = setInterval(() => {
  console.log(`Random number ${count + 1}:`, Math.floor(Math.random() * (max - min + 1)) + min)
  count++

  if (count === 5) {
    clearInterval(intervalId)
  }
}, 1000)
