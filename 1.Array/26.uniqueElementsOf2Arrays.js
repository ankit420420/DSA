const arr1 = [1, 2, 4, 3, 6]
const arr2 = [1, 2, 5, 8, 3]

//set + filter (Best Way)
const set1 = new Set(arr1)
const set2 = new Set(arr2)

const uniqueFilteredArr1 = [...set1].filter(ele => !set2.has(ele))
const uniqueFilteredArr2 = [...set2].filter(ele => !set1.has(ele))

const uniqueEleArr1 = [...uniqueFilteredArr1, ...uniqueFilteredArr2]
console.log("uniqueEleArr1:", uniqueEleArr1)

//Manual Approach
const uniqueEleArr2 = []

//helper function to check and add element to new array if its not present in given array
const addIfUnique = (ele, otherArr) => {
  //return if element is present in other array
  for (let k = 0; k < otherArr.length; k++) {
    if (otherArr[k] === ele) {
      return
    }
  }

  //return if element is already added to new array
  for (let l = 0; l < uniqueEleArr2.length; l++) {
    if (uniqueEleArr2[l] === ele) {
      return
    }
  }

  uniqueEleArr2[uniqueEleArr2.length] = ele
}

//adding unique elements of first array in new array by calling helper function
for (let i = 0; i < arr1.length; i++) {
  addIfUnique(arr1[i], arr2)
}

//adding unique elements of second array in new array by calling helper function
for (let j = 0; j < arr2.length; j++) {
  addIfUnique(arr2[j], arr1)
}

console.log("uniqueEleArr2:", uniqueEleArr2)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**         | **Complexity**      | **Production**           |
| -------- | -------------------- | ------------------- | ------------------------ |
| 1        | Set + filter         | O(n + m)            | Excellent                |
| 2        | Manual nested loop   | O((n + m)²) = O(n²) | Worst                    |
*/
