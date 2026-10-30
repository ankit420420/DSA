// Merry Christmas 🎄 in JavaScript (Node.js)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

;(async function () {
  const fire = ["✨", "💥", "🎆", "🎇"]

  // Countdown with tree
  for (let i = 5; i > 0; i--) {
    console.log(`${i} 🎄`)
    await sleep(500)
  }

  // Fireworks
  for (const f of fire) {
    console.log(f.repeat(10))
    await sleep(300)
  }

  console.log("MERRY CHRISTMAS!")
})()
