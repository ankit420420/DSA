// LeetCode #344 - Reverse String
// Reverse array of strings by modifying the input array in-place with O(1) extra memory

var reverseString = function (s) {
  s.reverse()
}

const s = ["h", "e", "l", "l", "o"]
console.log("Before reversal:", s)
reverseString(s)
console.log("After reversal:", s)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity** | **Space Complexity** | **Production** |
| -------- | ------------ | ------------------- | -------------------- | -------------- |
| 1        | 2 pointer    | O(n)                | O(1)                 | Excellent      |

*/
