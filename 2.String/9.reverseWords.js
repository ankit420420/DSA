const str = "A lovely day"

//In Build
const revInbuild = str.split(" ").reverse().join(" ")
console.log("revInBuild:", revInbuild)

// Recursion
const reverseWords1 = arr => {
  if (arr.length === 0) {
    return []
  }

  const [first, ...rest] = arr
  return [...reverseWords1(rest), first]
}
console.log("revRecursion1:", reverseWords1(str.split(" ")).join(" "))

//Recursion2
const str = "A lovely day"

const reverseWords1 = (arr, result = []) => {
  if (arr.length === 0) {
    return result
  }

  const [first, ...rest] = arr

  reverseWords1(rest, result)
  result.push(first)

  return result
}

console.log("revRecursion1:", reverseWords1(str.split(" ")).join(" "))

const reverseWords2 = arr => {
  if (arr.length === 0) {
    return []
  }

  const [first, ...rest] = arr
  const result = reverseWords2(rest)
  result.push(first)
  return result
}
console.log("revRecursion2:", reverseWords2(str.split(" ")).join(" "))

//Recursion (Index based) single teration
// const result = []
// const arr1 = str.split(" ")

// function reverseWords3(index) {
//   if (index < 0) {
//     return ""
//   }
//   result.push(arr1[index])
//   reverseWords3(--index)
// }

// reverseWords3(arr1.length - 1)
// console.log(result.join(" "))

const result = []
const arr1 = str.split(" ")

function reverseWords3(arr, index = arr.length - 1, result = []) {
  if (index < 0) {
    return result
  }
  result.push(arr1[index])
  return reverseWords3(arr, index - 1, result)
}

console.log("ffgg:", reverseWords3(str.split(" ")).join(" "))

//User Defined
const arr2 = str.split(" ")
let revUser = ""
for (let i = arr2.length - 1; i >= 0; i--) {
  revUser += arr2[i] + " "
}
console.log("revUser:", revUser.trimEnd())

//manual
const arr = str.split(" ")
let left = 0
let right = arr.length - 1

while (left < right) {
  const temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
  left++
  right--
}
console.log(arr.join(" "))
