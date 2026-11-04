// Using destructuring (Best Approach)
console.log("====Using destructuring====")

let num1 = 12
let num2 = 31

console.log("Original Numbers")
console.log("num1:", num1)
console.log("num2:", num2)
;[num1, num2] = [num2, num1]

console.log("Swapped Numbers")
console.log("num1:", num1)
console.log("num2:", num2)
console.log()

//==== Using Manual Approach ====
console.log("====Using Manual Aproach====")

// a. Using add/substract
console.log("====Using Add/Substract====")

let num3 = 12
let num4 = 31

console.log("Original Numbers")
console.log("num3:", num3)
console.log("num4:", num4)

num3 = num3 + num4
num4 = num3 - num4
num3 = num3 - num4

console.log("Swapped Numbers")
console.log("num3:", num3)
console.log("num4:", num4)
console.log()

// b. Using multiply/divide
console.log("====Using Multiply/Divide====")

let num5 = 12
let num6 = 31

console.log("Original Numbers")
console.log("num5:", num5)
console.log("num6:", num6)

num5 = num5 * num6
num6 = num5 / num6
num5 = num5 / num6

console.log("Swapped Numbers")
console.log("num5:", num5)
console.log("num6:", num6)

// c. Using XOR bitwise operator
console.log("====Using  XOR bitwise operator====")

let num7 = 12
let num8 = 31

console.log("Original Numbers")
console.log("num7:", num7)
console.log("num8:", num8)

num7 = num7 ^ num8
num8 = num7 ^ num8
num7 = num7 ^ num8

console.log("Swapped Numbers")
console.log("num7:", num7)
console.log("num8:", num8)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**                                | **Time Complexity** | **Space Complexity** | **Production**          |
| -------- | ------------------------------------------- | ------------------- | -------------------- | ----------------------- |
| 1        | Destructing                                 | O(1)                | O(1)                 | Excellent               |
| 2        | Add/Substract - Manual Approach             | O(1)                | O(1)                 | Good for small arrays   |
| 3        | Multiple/Divide - Manual Approach           | O(1)                | O(1)                 | Not recommended         |
| 4        | XOR bitwise operator - Manual Approach      | O(1)                | O(1)                 | God for 32 bit integers |

1. Destructing
•	Best for swapping without third variable
•	It works with strings, numbers, objects, and other values without arithmetic or bitwise limitations
•	Supports large numbers beyond 32-bit range


2. Add/Substract - Manual Approach
•	Supports large numbers beyond 32-bit range
•	This can lose precision for large numbers and may overflow to Infinity


3. Multiple/Divide - Manual Approach
•	Supports large numbers beyond 32-bit range
•	It fails when either value is zero
•	Can also suffer from floating-point precision problem


4. XOR bitwise operator - Manual Approach
•	Suitable for 32-bit integer values in JavaScript
•	Can also suffer from floating-point precision problem
*/
