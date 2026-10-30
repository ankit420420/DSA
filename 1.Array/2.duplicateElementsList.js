const arr = [1, 2, 3, 4, 3, 2, 3, 5, 6, 64, 4]

// filter + Set
// a. Using indexOf !=== currentIndex
const dupList1 = [...new Set(arr.filter((ele, index) => arr.indexOf(ele) !== index))]
console.log("dupList1:", dupList1) // [ 3, 2, 4 ]

/*
Others ways using- filter + Set Approach

// b. Using indexOf !=== lastIndexOf
const dupList1 = [...new Set(arr.filter(ele => arr.indexOf(ele) !== arr.lastIndexOf(ele)))]
console.log("dupList1:", dupList1) // [ 2, 3, 4 ]
*/

// forEach
// a. Using indexOf + Set
const dupEleSet1 = new Set()

arr.forEach((ele, index) => {
  if (arr.indexOf(ele) !== index) {
    dupEleSet1.add(ele)
  }
})
const dupList2 = [...dupEleSet1]
console.log("dupList2:", dupList2) // [ 3, 2, 4 ]

/*
Others ways using - forEach Approach

// b. Using indexOf + includes
const dupList2 = []

arr.forEach((ele, index) => {
  if (arr.indexOf(ele) !== index && !dupList3.includes(ele)) {
    dupList3.push(ele)
  }
})
console.log("dupList3:", dupList3) //[ 3, 2, 4 ]

// c. Using indexOf + find
const dupList4 = []

arr.forEach((ele, index) => {
  if (
    arr.indexOf(ele) !== index &&
    dupList4.find(existingEle => existingEle === ele) === undefined
  ) {
    dupList4.push(ele)
  }
})
console.log("dupList4:", dupList4) // [ 3, 2, 4 ]
*/

// Set
// a. Using 2 sets (Third Best Way)
const set = new Set()
const dupEleSet2 = new Set()

arr.forEach(ele => {
  if (set.has(ele)) {
    dupEleSet2.add(ele)
  } else {
    set.add(ele)
  }
})
const dupList5 = [...dupEleSet2]
console.log("dupList5:", dupList5) // [ 3, 2, 4 ]

/*
Others ways using - Set Approach

// b. Using Set + includes
const set = new Set()
const dupList5 = []

arr.forEach(ele => {
  if (set.has(ele) && !dupList5.includes(ele)) {
    dupList5.push(ele)
  } else {
    set.add(ele)
  }
})
console.log("dupList5:", dupList5) // [ 3, 2, 4 ]
*/

// true/false
// a. Using Set (Third Best Way)
const uniqueObj = Object.create(null)
const dupEleSet3 = new Set()

arr.forEach(ele => {
  if (uniqueObj[ele]) {
    dupEleSet3.add(ele)
  } else {
    uniqueObj[ele] = true
  }
})
const dupList6 = [...dupEleSet3]
console.log("dupList6:", dupList6) // [ 3, 2, 4 ]

/*
Others ways using - true / false Approach

// b. Using includes
const uniqueObj = Object.create(null)
const dupList6 = []

arr.forEach(ele => {
  if (uniqueObj[ele] && !dupList6.includes(ele)) {
    dupList6.push(ele)
  } else {
    uniqueObj[ele] = true
  }
})
console.log("dupList6:", dupList6) // [ 3, 2, 4 ]
*/

// Object Frequency (Second Best Way)
const objFrequency = Object.create(null)

arr.forEach(ele => {
  objFrequency[ele] = (objFrequency[ele] || 0) + 1
})

const dupList7 = Object.keys(objFrequency)
  .filter(key => objFrequency[key] > 1)
  .map(Number)
console.log("dupList7:", dupList7) // [ 2, 3, 4 ]

// Map
// a. Using for...of (Best Way)
const dupList8 = []
const map = new Map()

arr.forEach(ele => {
  map.set(ele, (map.get(ele) || 0) + 1)
})

for (const [ele, count] of map) {
  if (count > 1) {
    dupList8.push(ele)
  }
}
console.log("dupList8:", dupList8) // [ 2, 3, 4 ]

/*
other ways to iterate map

// Using forEach
const dupList8 = []

map.forEach((count, ele) => {
  if (count > 1) {
    dupList8.push(ele)
  }
})
console.log("dupList8:", dupList8) // [ 2, 3, 4 ]

// Using spread operator (…)
const dupList8 = [...map].filter(([_ele, count]) => count > 1).map(([key]) => key)
console.log("dupList8:", dupList8) // [ 2, 3, 4 ]

// Using Array.from
const dupList8 = Array.from(map)
  .filter(([_ele, count]) => count > 1)
  .map(([key]) => key)
console.log("dupList8:", dudupList8pList7) // [ 2, 3, 4 ]
*/

// Manual Approach
const dupList9 = []

for (let i = 0; i < arr.length; i++) {
  let dup = false

  for (let j = 0; j < arr.length; j++) {
    if (i !== j && arr[i] === arr[j]) {
      dup = true
      break
    }
  }
  if (dup && !dupList9.includes(arr[i])) {
    dupList9.push(arr[i])
  }
}
console.log("dupList9:", dupList9) // [ 2, 3, 4 ]

/*
Other Manual Approaches

//Way 2
const dupList9 = []

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i !== j && arr[i] === arr[j] && !dupList9.includes(arr[i])) {
      dupList9.push(arr[i])
      break
    }
  }
}
console.log("dupList9:", dupList9) //[ 2, 3, 4 ]

//Way 3 (Pure Manual Approach)
const dupList9 = []

for (let i = 0; i < arr.length; i++) {
  let exists = false

  for (let j = 0; j < arr.length; j++) {
    //check if element is duplicate in original array
    if (i !== j && arr[i] === arr[j]) {
      //check if duplicate element is present in new array or not
      for (let k = 0; k <= dupList9.length; k++) {
        if (dupList9[k] === arr[i]) {
          exists = true
          break
        }
      }
      if (!exists) {
        dupList9[dupList9.length] = arr[i]
      }
    break
    }
  }
}
console.log("dupList9:", dupList9) // [ 2, 3, 4 ]
*/

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**       | **Time Complexity** | **Space Complexity** | **Production**      |
| -------- | ------------------ | ------------------- | -------------------- | ------------------- |
| 1        | Map                | O(n)                | O(n)                 | Excellent           |
| 2        | Object frequency   | O(n)                | O(n)                 | Very Good           |
| 3        | Set                | O(n)                | O(n)                 | Very Good           |
| 4        | true/false         | O(n)                | O(n)                 | Very Good           |
| 5        | filter + Set       | O(n²)               | O(n)                 | Okay for small data |
| 6        | forEach            | O(n²)               | O(n)                 | Poor for large data |
| 8        | Manual nested loop | O(n²)               | O(n)                 | Worst               |

1. Map
•	No repeated scanning
  o	One pass to build frequency 
  o	One pass to extract duplicates
•	Frequency counting is:
  o	readable
  o	scalable
•	Better than plain objects as it:
  o	preserves data types 
  o	avoids prototype issues 
  o	supports any key type
•	Best for large data sets


2. Object frequency 
•	Only downside
  o	keys become strings
  o	prototype edge cases if object not created using Object.create(null)
  o	less robust than Map
•	But still excellent


3. Set and true/false
•	Very elegant
•	But:
  o	slightly less explicit 
  o	harder to extend if later you need counts


4. Other approaches
•	All repeatedly scan arrays
•	Fine for small datasets
•	Not ideal for production-scale data
*/
// User Service restarts
//      ↓
// registry/DNS gets updated
//      ↓
// Order Service still uses "user-service"
//      ↓
// request reaches healthy instance
