const arr1 = [1, 2, 4, 3, 6]
const arr2 = [1, 2, 5, 8, 3]

//Set + filter (Best Way)
const set1 = new Set(arr1)
const set2 = new Set(arr2)

const uniqueEleArr1 = [...set1].filter(ele => !set2.has(ele))
console.log("uniqueEleArr1:", uniqueEleArr1)

//Manual Approach
const uniqueEleArr2 = []

for (let i = 0; i < arr1.length; i++) {
  let existsArr2 = false
  let existsUniqueArr2 = false

  //check if element of first array is present in second array
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      existsArr2 = true
      break
    }
  }

  //if element of first array exists in second array then move to next element of first array immediately
  //this saves from nested logic
  if (existsArr2) {
    continue
  }

  //check if unique element of first array is already present in new array or not
  for (let k = 0; k < uniqueEleArr2.length; k++) {
    if (uniqueEleArr2[k] === arr1[i]) {
      existsUniqueArr2 = true
      break
    }
  }
  if (!existsUniqueArr2) {
    uniqueEleArr2[uniqueEleArr2.length] = arr1[i]
  }
}
console.log("uniqueEleArr2:", uniqueEleArr2)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**                        | **Complexity**         | **Production**              |
| -------- | ----------------------------------- | ---------------------- | ------------------- |
| 1        | Set + filter                        | O(n + m)               | Excellent           |
| 2        | Manual nested loop                  | O(n * (m + k)) = O(n²) | Worst               |
*/
