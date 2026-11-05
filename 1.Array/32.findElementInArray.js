const arr = [1, 2, 3, 4, 5]
const k = 3

// indexOf
const index1 = arr.indexOf(k)
console.log(index1 !== -1 ? index1 + 1 : "Element not present")

// findIndex
const index2 = arr.findIndex(ele => ele === k)
console.log(index2 !== -1 ? index2 + 1 : "Element not present")

// Manual Approach
let pos = -1
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === k) {
    pos = i
    break
  }
}

console.log(pos !== -1 ? pos + 1 : "Element not present")

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**    | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | --------------- | -------------------- | -------------------- | -------------- |
| 1        | indexOf         | O(n)                 | O(1)                 | Excellent      |
| 2        | findIndex       | O(n)                 | O(1)                 | Good           |
| 3        | Manual Approach | O(n)                 | O(1)                 | Good           |

1. indexOf
•	Searches sequentially from the beginning
•	Only a fixed amount of additional memory is required


2. findIndex
•	Searches sequentially but invokes a callback for each visited element until a match is found.
•	The callback doesn't create a growing data structure
•	More concise code than Manual Approach


3. Manual Approach 
•	The break statement prevents unnecessary iterations after a match.
*/
