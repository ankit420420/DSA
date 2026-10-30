const numArr1 = [1, 2, 4, 3, 7, 4, 5]

// Using reverse (Best Way)
numArr1.reverse()
console.log("reversedArray1:", numArr1)

// Manual Approach (Second Best Way)
const numArr2 = [1, 2, 4, 3, 7, 4, 5]

function reverse(numArr) {
  let left = 0
  let right = numArr.length - 1
  while (left < right) {
    ;[numArr[left], numArr[right]] = [numArr[right], numArr[left]]
    left++
    right--
  }
}

reverse(numArr2)
console.log("reversedArray2:", numArr2)

/*Other way to reverse with third variable
while (left < right) {
  const temp = numArr[left]
  numArr[left] = numArr[right]
  numArr[right] = temp

  left++
  right--
}
*/

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach** | **Time Complexity** | **Space Complexity** | **Production** |
| -------- | ------------ | ------------------- | -------------------- | -------------- |
| 1        | reverse      | O(n)                | O(1)                 | Excellent      |
| 1        | 2 pointer    | O(n)                | O(1)                 | Excellent      |

*/
