const arr = [1, 45, 1, 67, 33, 21, 3, 4, , 40, 56, 40]
// const arr = [10, 20, 10]

// Set + sort
const result = [...new Set(arr)].sort((a, b) => b - a)
if (result.length < 3) {
  console.log("Array does not contains 3 distinct elements")
} else {
  console.log(`3 largest elements are: ${result[0]},${result[1]},${result[2]}`)
}

//other way to get elemetns for array - using Set + Sort
const result1 = result.slice(0, 3)
if (result1.length < 3) {
  console.log("Array does not contains 3 distinct elements")
} else {
  console.log(`3 largest elements are: ${result1}`)
}

// Manual - (Best Approach)
let first = -Infinity
let second = -Infinity
let third = -Infinity

for (const ele of arr) {
  if (ele === first || ele === second || ele === third) {
    continue
  }

  if (ele > first) {
    third = second
    second = first
    first = ele
  } else if (ele > second) {
    third = second
    second = ele
  } else if (ele > third) {
    third = ele
  }
}

if (third === -Infinity) {
  console.log("Array does not contins 3 distinct elements")
} else {
  console.log(`3 largest elemetns are: ${first},${second},${third}`)
}
