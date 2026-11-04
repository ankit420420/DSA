const numArr = [1, 2, 4, 3, 7, 4, 5]
const target = 5

// 2 Sets
const complementSet = new Set()
const usedSet1 = new Set()
const result1 = []
for (let i = 0; i < numArr.length; i++) {
  const num = numArr[i]
  const complement = target - num
  const j = numArr.indexOf(complement)

  // Checking if complement was already added to set. it tells that pair exists
  // Also chekcing if complement added to usedSet. It tells that the pair is already added to result array
  // It is done to avoid adding duplicate pairs
  if (complementSet.has(complement) && !usedSet1.has(complement)) {
    const lowIndex = num < complement ? i : j
    const highIndex = num < complement ? j : i

    const pair1 = [lowIndex, highIndex]

    // adding pair to array to prepare response
    result1.push(pair1)

    // Adding elements to usedSet, to mark that thsi set of pairs are used
    usedSet1.add(num)
    usedSet1.add(complement)
  }

  // adding current number to set to track that this pair exist when in subsequent iteration its complement is found
  // It is done to avoid adding dulicate pairs
  complementSet.add(num)
}

console.log(result1)

// Map + Set (Best Way)
const complementIndexMap = new Map()
const usedSet2 = new Set()
const result2 = []
for (let i = 0; i < numArr.length; i++) {
  const num = numArr[i]
  const complement = target - num

  // Checking if complement was already added to set. it tells that pair exists
  // Also chekcing if complement added to usedSet. It tells that the pair is already added to result array
  // It is done to avoid adding duplicate pairs
  if (complementIndexMap.has(complement) && !usedSet1.has(complement)) {
    const j = complementIndexMap.get(complement)
    const pair2 = [j, i]

    // adding pair to array to prepare response
    result1.push(pair2)

    // Adding elements to usedSet, to mark that thsi set of pairs are used
    usedSet1.add(num)
    usedSet1.add(complement)
  }

  // adding current number and index to Map to track that its pair exist when in subsequent iteration its complement is found
  // It is done to avoid adding dulicate pairs
  if (!complementIndexMap.has(num)) {
    complementIndexMap.set(num, i)
  }
}

console.log(result1)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | ------------ | -------------------- | -------------------- | -------------- |
| 1        | Map + Set    | O(n)                 | O(n)                 | Excellent      |
| 2        | 2 Sets       | O(n²)                | O(n)                 | Excellent      |

1. Map + Set 
•	It stores up to 1 million values in complementSet → O(n) auxiliary space


2. 2 Sets 
•	It stores no values in usedSet1 because no pairs are found → O(1) auxiliary space for that input.
*/
