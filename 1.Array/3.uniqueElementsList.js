const numbers = [1, 2, 3, 4, 3, 2, 3, 5, 6, 64, 4]

//filter
const uniList1 = numbers.filter(ele => numbers.indexOf(ele) === numbers.lastIndexOf(ele))
console.log("uniList1:", uniList1)

//forEach
const uniList2 = []

numbers.forEach(ele => {
  if (numbers.indexOf(ele) === numbers.lastIndexOf(ele)) {
    uniList2.push(ele)
  }
})
console.log("uniList2:", uniList2)

//Frequency map (Second Best Way)
const frequencyMap = Object.create(null)

numbers.forEach(ele => {
  frequencyMap[ele] = (frequencyMap[ele] || 0) + 1
})

const uniList3 = Object.keys(frequencyMap)
  .filter(key => frequencyMap[key] === 1)
  .map(Number)
console.log("uniList3:", uniList3)

/*
Other ways to filter unique elements from frequency map
Way 2
const uniList3 = numbers.filter(ele => frequencyMap[ele] === 1)
console.log("uniList3:", uniList3)
*/

//Map (Best Way)
const map = new Map()

numbers.forEach(ele => {
  map.set(ele, (map.get(ele) || 0) + 1)
})

const uniList4 = [...map].filter(([_ele, count]) => count === 1).map(([key]) => key)
console.log("uniList4:", uniList4)

/*
other way to iterate map
Way 2
const uniList4 = Array.from(map)
  .filter(([_ele, count]) => count === 1)
  .map(([key]) => key)
console.log("uniList4:", uniList4)

Way 3
const uniList4 = []

for (const [ele, count] of map) {
  if (count === 1) {
    uniList4.push(ele)
  }
}
console.log("uniList4:", uniList4)
Way 4
const uniList4 = []

map.forEach((count, ele) => {
  if (count === 1) {
    uniList4.push(ele)
  }
})
console.log("uniList4:", uniList4)
*/

//Manual Approach
const uniList5 = []

for (let i = 0; i < numbers.length; i++) {
  let exists = false

  for (j = 0; j < numbers.length; j++) {
    if (i !== j && numbers[i] === numbers[j]) {
      exists = true
      break
    }
  }
  if (!exists) {
    uniList5.push(numbers[i])
  }
}
console.log("uniList5:", uniList5)

/*
other Manual Approaches
Way 2 (Pure Manual Approach)
const uniList5 = []

for (let i = 0; i < numbers.length; i++) {
  let exists = false

  for (let j = 0; j < numbers.length; j++) {
    //check if element is duplicate in original array
    if (i !== j && numbers[i] === numbers[j]) {
      exists = true
      break
    }
  }
  if (!exists) {
    uniList5[uniList5.length] = numbers[i]
  }
}
console.log("uniList5:", uniList5)
*/

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**       | **Complexity** | **Production**      |
| -------- | ------------------ | -------------- | ------------------- |
| 1        | Map                | O(n)           | Excellent           |
| 2        | Object frequency   | O(n)           | Very Good           |
| 3        | filter / forEach   | O(n²)          | Poor for large data |
| 4        | Manual nested loop | O(n²)          | Worst               |
*/
