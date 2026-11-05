const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2]

Set + every
const [small, large] = arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1]
const set1 = new Set(large)
const result = small.every(ele => set1.has(ele))

console.log(
  result
    ? "Smaller array is subset of Larger array"
    : "Smaller array is not a subset of Larger array"
)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | ------------ | -------------------- | -------------------- | -------------- |
| 1        | Set + every  | O(n + m)             | O(n)                 | Excellent      |
*/
