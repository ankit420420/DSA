const numArr = [1, 2, 4, 3, 7, 4, 5]
const target = 5

// Nested loops
const usedSet1 = new Set()
const result1 = []
for (let i = 0; i <= numArr.length - 2; i++) {
  if (!usedSet1.has(numArr[i])) {
    for (let j = i + 1; j <= numArr.length - 1; j++) {
      if (numArr[i] + numArr[j] === 5) {
        const pair1 = [Math.min(numArr[i], numArr[j]), Math.max(numArr[i], numArr[j])]
        result1.push(pair1)
        usedSet1.add(numArr[i])
        usedSet1.add(numArr[j])
        break
      }
    }
  }
}
console.log(result1)

// Set (Best Way)
const complementSet = new Set()
const usedSet2 = new Set()
const result2 = []
for (let num of numArr) {
  const complement = target - num

  // Checking if complement was already added to set. it tells that pair exists
  // Also chekcing if complement added to usedSet. It tells that the pair is already added to result array
  // It is done to avoid adding duplicate pairs
  if (complementSet.has(complement) && !usedSet2.has(complement)) {
    const pair2 = [Math.min(num, complement), Math.max(num, complement)]

    // adding pair to array to prepare response
    result2.push(pair2)

    // Adding elements to usedSet, to mark that thsi set of pairs are used
    usedSet2.add(num)
    usedSet2.add(complement)
  }
  // adding current number and index to Map to track that its pair exist when in subsequent iteration its complement is found
  // It is done to avoid adding dulicate pairs
  complementSet.add(num)
}

console.log(result2)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | ------------ | -------------------- | -------------------- | -------------- |
| 1        | Set          | O(n)                 | O(n)                 | Excellent      |
| 2        | Nested loops | O(n²)                | O(n)                 | Excellent      |

1. Set 
•	It reduces the expected time complexity from O(n²) to O(n)


2. Nested loops 
•	Even if the complement doesn't exist, indexOf() may scan the entire array 
*/
