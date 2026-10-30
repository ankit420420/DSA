const num = 4

//Using Recursion
const recurFactorail = num => {
  if (num < 0) {
    return "Factorail exists only for natural numbers"
  }
  if (num === 0 || num === 1) {
    return 1
  }
  return num * recurFactorail(num - 1)
}

const result1 = recurFactorail(num)
console.log("result1:", result1)

//reduce
const result2 = Array.from({ length: num }, (_, i) => i + 1).reduce((acc, ele) => acc * ele)
console.log("result2:", result2)

//Manual method
const factorail = num => {
  if (num < 0) {
    return "Factorail exists only for natural numbers"
  }

  let fact = 1

  if (num === 0 || num === 1) {
    return fact
  }
  for (let i = 2; i <= num; i++) {
    fact *= i
  }
  return fact
}

const result3 = factorail(num)
console.log("result3:", result3)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**       | **Complexity** | **Production**         |
| -------- | ------------------ | -------------- | ---------------------- |
| 1        | Manual nested loop | O(n)          | Excellent              |
| 2        | Recursion          | O(n)          | Good for small numbers |
| 3        | reduce             | O(n)          | Worst                  |

1. Manual method
•	It only keeps one variable and updates it again and again
•	Less memory utilization
•	Best for large numbers


2. Recursion
•	Fine for small numbers
•	But for very large numbers this can throw “Maximum call stack size exceeded” error because JavaScript has a limited call stack


3. reduce
•	It creates a new array
•	Worst approach as it uses more memory unnecessarily due to array creation
*/
