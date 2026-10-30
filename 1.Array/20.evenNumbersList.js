const arr = [1, 3, 4, 2, 54, 32, 12, 66, 57]

//filter (Best Way)
const evenArr1 = arr.filter(ele => ele % 2 === 0)
console.log("evenArr1:", evenArr1)

//forEach
const evenArr2 = []
arr.forEach(ele => {
  if (ele % 2 === 0) {
    evenArr2.push(ele)
  }
})
console.log("evenArr2:", evenArr2)

//reduce
const evenArr3 = arr.reduce((acc, ele) => {
  if (ele % 2 === 0) {
    acc.push(ele)
  }
  return acc
}, [])
console.log("evenArr3:", evenArr3)

//Manual Approach
const evenArr4 = []
for (const ele of arr) {
  if (ele % 2 === 0) {
    evenArr4.push(ele)
  }
}
console.log("evenArr4:", evenArr4)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**    | **Complexity** | **Production**              |
| -------- | --------------- | -------------- | --------------------------- |
| 1        | filter          | O(n)           | Excellent                   |
| 2        | Manual Approach | O(n)           | Good                        |
| 3        | forEach         | O(n)           | Good, but manual            |
| 4        | reduce          | O(n)           | Less readable for this case |

1. filter
•	filter is designed specifically to create a new array containing only matching elements


2. Manual Approach
•	This is also good, especially for beginners, because logic is very clear


3. forEach
•	This is also good but not ideal
•	It is specifically used for running side effects like printing, updating external variable


4. reduce
•	For just filtering even numbers, reduce() is unnecessarily complex
•	Worst readable
*/
