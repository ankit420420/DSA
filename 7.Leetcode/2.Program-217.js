// LeetCode #217 - Contains Duplicate
const nums = [1, 2, 3, 1]

var containsDuplicate = function (nums) {
  const set = new Set()

  for (const ele of nums) {
    if (set.has(ele)) {
      return true
    }
    set.add(ele)
  }
  return false
}

console.log(containsDuplicate(nums))

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity** | **Space Complexity** | **Production** |
| -------- | ------------ | ------------------- | -------------------- | -------------- |
| 1        | Set          | O(n)                | O(n)                 | Excellent      |

*/
