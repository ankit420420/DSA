const numArr = [1, 1, 2, 3, 4, 4, 5, 6, 7, 515]
const target = 5

let left = 0
let right = numArr.length - 1
const result = []

while (left < right) {
  const leftValue = numArr[left]
  const rightValue = numArr[right]
  const sum = leftValue + rightValue

  if (sum === target) {
    const pair = [leftValue, rightValue]
    result.push(pair)
    left++
    right--

    while (left < right && leftValue === numArr[left]) {
      left++
    }

    while (left < right && rightValue === numArr[right]) {
      right--
    }
  } else if (sum < target) {
    left++
  } else {
    right--
  }
}

console.log(result)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity** | **Space Complexity** | **Production** |
| -------- | ------------ | ------------------- | -------------------- | -------------- |
| 1        | 2 pointer    | O(n)                | O(n)                 | Excellent      |
*/
