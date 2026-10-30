// LeetCode #1 - Two Sum
const nums = [2, 7, 11, 15]
const target = 9

var twoSum = function (nums, target) {
  const complementMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    if (complementMap.has(complement)) {
      const j = complementMap.get(complement)
      return [j, i]
    }

    complementMap.set(num, i)
  }
  return []
}

console.log(twoSum(nums, target))

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity** | **Space Complexity** | **Production** |
| -------- | ------------ | ------------------- | -------------------- | -------------- |
| 1        | Map          | O(n)                | O(n)                 | Excellent      |

*/
