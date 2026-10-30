const arr = [1, 45, 665, 34, 21, 12, 3]

//Math.min(...) (Second Best Way)
const minEle1 = Math.min(...arr)
console.log("minEle1:", minEle1)

//Math.min.apply
const minEle2 = Math.min.apply(null, arr)
console.log("minEle2:", minEle2)

const minEle3 = Math.min.apply(undefined, arr)
console.log("minEle3:", minEle3)

const minEle4 = Math.min.apply(Math, arr)
console.log("minEle4:", minEle4)

//sort()
//ascending sort
const arr1 = [...arr].sort((a, b) => a - b)
const minEle5 = arr1[0]
console.log("minEle5:", minEle5)

//descending sort
const arr2 = [...arr].sort((a, b) => b - a)
const minEle6 = arr2[arr2.length - 1]
console.log("minEle6:", minEle6)

//reduce (Third Best Way)
const minEle7 = arr.reduce((a, b) => Math.min(a, b), Infinity)
console.log("minEle7:", minEle7)

//Manual Approach (Best Way)
function min(arr) {
  let len = arr.length
  let min = Infinity

  while (len--) {
    if (arr[len] < min) {
      min = arr[len]
    }
  }
  return min
}
const minEle8 = min(arr)
console.log("minEle8:", minEle8)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**    | **Complexity** | **Production**               |
| -------- | --------------- | -------------- | ---------------------------- |
| 1        | Manual Approach | O(n)           | Best for large arrays        |
| 2        | Math.min(...)   | O(n)           | Best for small/medium arrays |
| 3        | reduce          | O(n)           | Good                         |
| 4        | Math.min.apply  | O(n)           | Old style                    |
| 5        | sort            | O(n log n)     | Not recommended only for min |

1. Manual Approach
•	Used when performance matters, generally faster in performance-critical scenarios because it avoids the overhead of calling a callback function for every element
•	Checks each element one by one and keeps only the minimum value
•	Do not sort the whole array and do not pass all values as function arguments, so do not throw stack size error
•	Best for large data sets
•	When full control is needed


2. Math.min(…) 
•	Best for typical arrays (< ~100k items)
•	In modern JavaScript — it's cleaner, more readable, and more concise
•	But for very large arrays this can throw “Maximum call stack size exceeded” error because it passes every array element as a separate function argument


3. reduce
•	When readability is more important
•	functional style is preferred
•	Checks each element one by one and keeps only the minimum value
•	Do not sort the whole array and do not pass all values as function arguments, so do not throw stack size error
•	Best for large data sets


4. Math.min.apply 
•	Best for typical arrays (< ~100k items) when used in Old Javascript (pre-ES6) and Dynamic context scenarios
•	This was commonly used before spread syntax 
•	But for very large arrays this can throw “Maximum call stack size exceeded” error because it passes every array element as a separate function argument


5. sort
Never use sort() for finding largest element in the array because:
•	It changes the original array
•	Also, sorting is unnecessary because you only need the largest value, not the full sorted order
•	It's time complexity is O(n log n)
•	Use only when you also need the sorted array
*/
