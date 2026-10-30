const arr = [1, 2, 3, 4, 5]
const k = 3

//Way 1
const index1 = arr.indexOf(k)
console.log(index1 !== -1 ? index1 + 1 : "Element not present")

//Way 2
const index2 = arr.findIndex(ele => ele === k)
console.log(index2 !== -1 ? index2 + 1 : "Element not present")

//Way 3
let pos = -1
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === k) {
    pos = i
    break
  }
}

console.log(pos !== -1 ? pos + 1 : "Element not present")
