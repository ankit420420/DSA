const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2]

//Without function
const [small, large] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1]
const set1 = new Set(large)
const result = small.every(ele => set1.has(ele))

if (result) {
  console.log("Smaller array is subset of Larger array")
} else {
  console.log("Smaller array is not a subset of Larger array")
}

//With function
const isSubset = (arr1, arr2) => {
  const [small, large] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1]
  const set2 = new Set(large)
  return small.every(ele => set2.has(ele))
}

const result1 = isSubset(arr1, arr2)
if (result1) {
  console.log("Smaller array is subset of Larger array")
} else {
  console.log("Smaller array is not a subset of Larger array")
}
