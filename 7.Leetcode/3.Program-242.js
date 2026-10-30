// LeetCode #242 - Valid Anagram
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const map = new Map()
  for (const ele of s) {
    map.set(ele, (map.get(ele) || 0) + 1)
  }

  for (const ele of t) {
    const count = map.get(ele)

    if (!count) {
      return false
    }

    map.set(ele, count - 1)
  }

  return true
}
console.log(isAnagram("anagram", "nagaram"))

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity** | **Space Complexity** | **Production** |
| -------- | ------------ | ------------------- | -------------------- | -------------- |
| 1        | Set          | O(n)                | O(n)                 | Excellent      |

*/
