const arr1 = [1, 3, 5, 7]
const arr2 = [2, 4, 6]

const result = []
const len = Math.max(arr1.length, arr2.length)

for (let i = 0; i < len; i++) {
  if (i < arr1.length) {
    result.push(arr1[i])
  }
  if (i < arr2.length) {
    result.push(arr2[i])
  }
}
console.log("result:", result)
