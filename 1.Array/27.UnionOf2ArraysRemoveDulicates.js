const arr1 = [1, 2, 4, 3, 6, 4]
const arr2 = [1, 2, 5, 8, 3, 8]

//Set
const combinedArray1 = [...new Set([...arr1, ...arr2])]
console.log(combinedArray1)

//Individual Set (for very large array) (Best Way)
const uniqueSet = new Set()

for (const ele of arr1) {
  uniqueSet.add(ele)
}

for (const ele of arr2) {
  uniqueSet.add(ele)
}

const combinedArray2 = [...uniqueSet]
console.log("combinedArray2:", combinedArray2)

//Manual Approach
const combinedArray3 = []

//helper function to check and add element to new array if it does not exists
const addIfNotExists = ele => {
  //return if element is already added to new array
  for (let k = 0; k <= combinedArray3.length; k++) {
    if (combinedArray3[k] === ele) {
      return
    }
  }

  combinedArray3[combinedArray3.length] = ele
}

//adding each element of first array in new array by calling helper function
for (let i = 0; i < arr1.length; i++) {
  addIfNotExists(arr1[i])
}

//adding each element of secons array in new array by calling helper function
for (let j = 0; j < arr2.length; j++) {
  addIfNotExists(arr2[j])
}

console.log("combinedArray3:", combinedArray3)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**         | **Complexity**      | **Production**           |
| -------- | -------------------- | ------------------- | ------------------------ |
| 1        | Indvidual Set        | O(n + m)            | Good for very large data |
| 2        | Set                  | O(n + m)            | Excellent                |
| 3        | Manual nested loop   | O((n + m)²) = O(n²) | Worst                    |

1. Individual Set
• Best for very large datasets


2. Set
• Best for large datasets usually ranging from thousands or lakhs of elements, depending on system memory


3. Other approaches
• All repeatedly scan arrays
• Fine for small datasets
• Not ideal for production-scale data
*/
