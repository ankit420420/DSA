const arr1 = [1, 2, 5, 7]
const arr2 = [3, 4, 6]

let i = 0
let j = 0
const result = []

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    result.push(arr1[i++])
  } else {
    result.push(arr2[j++])
  }
}

while (i < arr1.length) {
  result.push(arr1[i++])
}

while (j < arr2.length) {
  result.push(arr2[j++])
}

console.log("sorted and merged array:", result)
