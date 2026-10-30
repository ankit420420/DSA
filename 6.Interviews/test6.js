console.log("Start")

setTimeout(() => {
  console.log("Timeout")
}, 0)

async function asyncFunc() {
  console.log("Inside asyncFunc")
  await Promise.resolve()
  console.log("After await")
}

asyncFunc()

console.log("End")
