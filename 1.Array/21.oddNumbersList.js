const arr = [1, 2, 3, 4, 5, 6, 7]

//Way 1 (Best Way)
const oddNumbers1 = arr.filter(ele => ele % 2 !== 0)
console.log("oddNumbers1:", oddNumbers1)

//Way 2
const oddNumbers2 = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddNumbers2.push(arr[i])
  }
}
console.log("oddNumbers2:", oddNumbers2)

//Way 3
const oddNumbers3 = []
for (let ele of arr) {
  if (ele % 2 !== 0) {
    oddNumbers3.push(ele)
  }
}
console.log("oddNumbers3:", oddNumbers3)
