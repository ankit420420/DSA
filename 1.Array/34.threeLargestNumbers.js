const arr = [1, 45, 1, 67, 33, 21, 3, 4, 40, 56, 40]

// Set + sort
const result = [...new Set(arr)].sort((a, b) => b - a)
if (result.length < 3) {
  console.log("Array does not contain 3 distinct elements")
} else {
  console.log(`3 largest elements are: ${result[0]},${result[1]},${result[2]}`)
}

// Set + Sort + slice (Second Best Way)
const result1 = result.slice(0, 3)
if (result1.length < 3) {
  console.log("Array does not contain 3 distinct elements")
} else {
  console.log(`3 largest elements are: ${result1}`)
}
console.log(result)
// Manual - (Best Way)
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
  console.log("Array does not contain 3 distinct elements")
} else {
  console.log(`3 largest elements are: ${first},${second},${third}`)
}

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**       | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | ------------------ | -------------------- | -------------------- | -------------- |
| 1        | Manual Approach    | O(n)                 | O(n)                 | Excellent      |
| 2        | Set + sort         | O(n)                 | O(n)                 | Excellent      |
| 3        | Set + sort + slice | O(n)–O(n²)*          | O(n) or more         |                |

1. Manual Approach 
•	Best for performance


2. Set + sort 
•	Best for concise, readable application code when the input size is moderate


3. Set + sort + slice 
•	Prefer slice() if you want an array of the top three values
*/
