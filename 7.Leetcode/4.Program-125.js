// LeetCode #125 - Valid Palindrome
var isPalindrome = function (s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--
    }
    if (left >= right) {
      return true
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    }
    left++
    right--
  }
  return true
}

function isAlphaNumeric(c) {
  const code = c.charCodeAt(0)
  return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome(" "))
console.log(isPalindrome(",a"))

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity** | **Space Complexity** | **Production** |
| -------- | ------------ | ------------------- | -------------------- | -------------- |
| 1        | 2 pointer    | O(n)                | O(1)                 | Excellent      |

*/
