const str = "ankitsrivastava"

//Array version
let low = 1
let high = str.length - 2
const result = []

result.push(str)

while (low < str.length - 1) {
  let line = str[low] + " ".repeat(str.length - 2) + str[high]
  result.push(line)
  low++
  high--
}

result.push(str.split("").reverse().join(""))

for (let res of result) {
  console.log(res)
}

//Console version
let low1 = 1
let high1 = str.length - 2

console.log(str)

while (low1 < str.length - 1) {
  console.log(`${str[low1]}${" ".repeat(str.length - 2)}${str[high1]}`)
  low1++
  high1--
}

console.log(str.split("").reverse().join(""))
