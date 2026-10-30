const str = "Step on no pets"

//==== Inbuilt  ====
const normalizedStr1 = str.toLowerCase()
const revInBuilt = [...normalizedStr1].reverse().join("")

console.log(
  "Inbuilt:",
  normalizedStr1 === revInBuilt ? "It is a palindrome" : "It is not a palindrome"
)

//==== Recursion ====
let left1 = 0
let right1 = str.length - 1

function reverseRecursion(str, left, right) {
  if (left >= right) {
    return true
  }
  if (str[left].toLowerCase() != str[right].toLowerCase()) {
    return false
  }
  return reverseRecursion(str, left + 1, right - 1)
}

const isPalindrome1 = reverseRecursion(str, left1, right1)

console.log("Recursion:", isPalindrome1 ? "It is a palindrome" : "It is not a palindrome")

//==== Manual Approach ====
// a. Using 2 pointer (Best Way)
let left2 = 0
let right2 = str.length - 1
let isPalindrome2 = true

while (left2 < right2) {
  if (str[left2].toLowerCase() != str[right2].toLowerCase()) {
    isPalindrome2 = false
    break
  }
  left2++
  right2--
}

console.log("Manual:", isPalindrome2 ? "It is a palindrome" : "It is not a palindrome")

// b. Using Pure Manual Approach (Second Best Way)
let left3 = 0
let right3 = str.length - 1
let isPalindrome3 = true

while (left3 < right3) {
  if (toLowercaseChar(str[left3]) != toLowercaseChar(str[right3])) {
    isPalindrome3 = false
    break
  }
  left3++
  right3--
}

console.log("Pure Manual:", isPalindrome3 ? "It is a palindrome" : "It is not a palindrome")

//==== Helper functions ====
// Convert uppercase character to lowercase
function toLowercaseChar(ch) {
  const code = ch.charCodeAt(0)
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(code + 32)
  }
  return ch
}

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**                  | **Time Complexity** | **Space Complexity** | **Production**                                 |
| -------- | ----------------------------- | ------------------- | -------------------- | ---------------------------------------------- |
| 1        | Manual                        | O(n)                | O(n)                 | Excellent                                      |
| 2        | Manual (Pure Manual Approach) | O(n)                | O(n)                 | Good, but handles only English ACII characters |
| 3        | Inbuilt Method                | O(n)                | O(n)                 | Good, but consume extra space for new string   |
| 4        | Recursion                     | O(n²)               | O(n²)                | Worst                                          |

1. Manual
•	Checks only half characters
•	No extra array or string is created
•	Does not stack function call
•	Cleaner and more readable
•	Best for large datasets


2. Manual (Pure Mannual Approach) 
•	Handles only English ASCII uppercase letters
•	Still excellent for large datasets


3. Inbuilt Method 
•	Creates new reversed string for comparison
•	Consumes extra space for new string
•	Still good for large datasets


4. Recursion
•	Checks each pair once
•	Adds each recursion call to same function to call-stack memory and can cause stack overflow for large inputs
•	Worst method
•	Not ideal for production-scale data
*/
