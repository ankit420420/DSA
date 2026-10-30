const arr = [1, 45, 665, 34, 21, 12, 3]

//Math.max(...) (Second Best Way)
const maxEle1 = Math.max(...arr)
console.log("maxEle1:", maxEle1)

//Math.max.apply
const maxEle2 = Math.max.apply(null, arr)
console.log("maxEle2:", maxEle2)

const maxEle3 = Math.max.apply(undefined, arr)
console.log("maxEle3:", maxEle3)

const maxEle4 = Math.max.apply(Math, arr)
console.log("maxEle4:", maxEle4)

//sort()
//ascending sort
const arr1 = [...arr].sort((a, b) => a - b)
const maxEle5 = arr1[arr1.length - 1]
console.log("maxEle5:", maxEle5)

//descending sort
const arr2 = [...arr].sort((a, b) => b - a)
const maxEle6 = arr2[0]
console.log("maxEle6:", maxEle6)

//reduce (Third Best Way)
const maxEle7 = arr.reduce((a, b) => Math.max(a, b), -Infinity)
console.log("maxEle7:", maxEle7)

//Manual Approach (Best Way)
function max(arr) {
  let len = arr.length
  let max = -Infinity

  while (len--) {
    if (arr[len] > max) {
      max = arr[len]
    }
  }
  return max
}
const maxEle8 = max(arr)
console.log("maxEle8:", maxEle8)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**    | **Complexity** | **Production**               |
| -------- | --------------- | -------------- | ---------------------------- |
| 1        | Manual Approach | O(n)           | Best for large arrays        |
| 2        | Math.max(...)   | O(n)           | Best for small/medium arrays |
| 3        | reduce          | O(n)           | Good                         |
| 4        | Math.max.apply  | O(n)           | Old style                    |
| 5        | sort            | O(n log n)     | Not recommended only for max |

1. Manual Approach
•	Used when performance matters, generally faster in performance-critical scenarios because it avoids the overhead of calling a callback function for every element
•	Checks each element one by one and keeps only the maximum value
•	Do not sort the whole array and do not pass all values as function arguments, so do not throw stack size error
•	Best for large data sets
•	When full control is needed


2. Math.max(…) 
•	Best for typical arrays (< ~100k items)
•	In modern JavaScript — it's cleaner, more readable, and more concise
•	But for very large arrays this can throw “Maximum call stack size exceeded” error because it passes every array element as a separate function argument


3. reduce
•	When readability is more important
•	functional style is preferred
•	Checks each element one by one and keeps only the maximum value
•	Do not sort the whole array and do not pass all values as function arguments, so do not throw stack size error
•	Best for large data sets


4. Math.max.apply 
•	Best for typical arrays (< ~100k items) when used in Old Javascript (pre-ES6) and Dynamic context scenarios
•	This was commonly used before spread syntax 
•	But for very large arrays this can throw “Maximum call stack size exceeded” error because it passes every array element as a separate function argument


5. sort
Never use sort() for finding largest element in the array because:
•	It changes the original array
•	Also, sorting is unnecessary because you only need the largest value, not the full sorted order
•	It's time complexity is O(n log n)
Use only when you also need the sorted array
*/
