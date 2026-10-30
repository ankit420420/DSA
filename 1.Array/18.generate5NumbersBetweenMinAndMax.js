const min = 10
const max = 20
const count = 5

for (let i = 0; i < count; i++) {
  console.log(`Random number ${i + 1}:`, Math.floor(Math.random() * (max - min + 1)) + min)
}
