const arr = [1, 2, 3, 2, 1, 76, 121, 3, 56, 1]

// Set (Best Way)
const uniOccurancesList1 = [...new Set(arr)]
console.log("uniOccurancesList1:", uniOccurancesList1)

// filter (Second Best Way)
const uniOccurancesList2 = arr.filter((ele, index) => arr.indexOf(ele) === index)
console.log("uniOccurancesList2:", uniOccurancesList2)

// forEach

// a. Using includes
const uniOccurancesList3 = []

arr.forEach(ele => {
  if (!uniOccurancesList3.includes(ele)) {
    uniOccurancesList3.push(ele)
  }
})
console.log("uniOccurancesList3:", uniOccurancesList3)
/*
Others ways using - forEach Approach

// b. Using indexOf
const uniOccurancesList4 = []

arr.forEach((ele, index) => {
  if (arr.indexOf(ele) === index) {
    uniOccurancesList4.push(ele)
  }
})
console.log("uniOccurancesList4:", uniOccurancesList4)

// c. Using find
const uniOccurancesList5 = []

arr.forEach(ele => {
  if (uniOccurancesList5.find(existingEle => existingEle === ele) === undefined) {
    uniOccurancesList5.push(ele)
  }
})
console.log("uniOccurancesList5:", uniOccurancesList5)
*/

// Manual Approach
const uniOccurancesList6 = []

for (let i = 0; i < arr.length; i++) {
  let exists = false

  for (let j = 0; j < uniOccurancesList6.length; j++) {
    if (uniOccurancesList6[j] === arr[i]) {
      exists = true
      break
    }
  }
  if (!exists) {
    uniOccurancesList6[uniOccurancesList6.length] = arr[i]
  }
}
console.log("uniOccurancesList6:", uniOccurancesList6)

/*
can also use below approach to insert elements to new array
let idx = 0 //declaring this inside outer for loop
for(){let j=0,....} //same logic as above
if (!exists) {
  uniOccurancesList6[idx++] = arr[i]
}
*/

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**       | **Time Complexity** | **Space Complexity** | **Production**        |
| -------- | ------------------ | ------------------- | -------------------- | --------------------- |
| 1        | Set                | O(n)                | O(n)                 | Excellent             |
| 2        | filter             | O(n²)               | O(n)                 | Good for small arrays |
| 3        | forEach            | O(n²)               | O(n)                 | Okay                  |
| 4        | Manual nested loop | O(n²)               | O(n)                 | Poor                  |

1. Set
•	Set is designed specifically for:
  o	storing unique values
  o	preventing duplicates
•	Output preserves order
•	This is the standard modern JS way
•	Best for large datasets


2. filter
•	Fine for small arrays, because every iteration scans again
•	Not ideal for huge datasets


3. forEach
•	Fine for small arrays, because every iteration scans again
•	Not ideal for huge datasets
•	Readable, but slower


4. Manual Approach
•	Fine for small arrays, because every iteration scans again
•	Not ideal for huge datasets
•	Worst readability
*/

// arr.length = n
// result.length = m

// Example:
// For string: "abcd"

// When recursion returns it starts unwinding the call stack:

// Call 1:
// reverse("d".slice(1))+str[0] calls "" + "d" => "d" copies 1 char

// Call 2:
// reverse("cd".slice(1))+str[0] calls "d" + "c"=> "dc" copies 2 chars

// Call 3:
// reverse("bcd".slice(1))+str[0] calls "dc" + "b"=> "dcb" copies 3 chars

// Call 4:
// reverse("abcd".slice(1))+str[0] calls "dcb" + "a"=> "dcba" copies 4 chars
