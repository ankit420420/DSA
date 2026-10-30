const arr1 = [1, 2, 4, 3, 6]
const arr2 = [1, 2, 5, 8, 3]

//Set + filter (Second Best Way)
const set1 = new Set(arr1)
const set2 = new Set(arr2)

const commonEleArr1 = [...set1].filter(ele => set2.has(ele))
console.log("commonEleArr1:", commonEleArr1)

//Set + filter  [filtering smaller set] (Best Way)
const smallerArr1 = arr1.length < arr2.length ? arr1 : arr2
const largerArr1 = arr1.length < arr2.length ? arr2 : arr1
const smallerArrSet1 = new Set(smallerArr1)
const largerArrSet1 = new Set(largerArr1)

const commonEleArr2 = [...smallerArrSet1].filter(ele => largerArrSet1.has(ele))
console.log("commonEleArr2:", commonEleArr2)

//Manual Approach
const commonEleArr3 = []
const smallerArr2 = arr1.length < arr2.length ? arr1 : arr2
const largerArr2 = arr1.length < arr2.length ? arr2 : arr1

for (let i = 0; i < smallerArr2.length; i++) {
  let exists = false

  //check if element is common in larger array
  for (let j = 0; j < largerArr2.length; j++) {
    if (largerArr2[j] === smallerArr2[i]) {
      //check if common element is already present in new array or not
      for (let k = 0; k < commonEleArr3.length; k++) {
        if (commonEleArr3[k] === smallerArr2[i]) {
          exists = true
          break
        }
      }
      if (!exists) {
        commonEleArr3[commonEleArr3.length] = smallerArr2[i]
      }
      break
    }
  }
}
console.log("commonEleArr3:", commonEleArr3)

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**                         | **Complexity**         | **Production**              |
| -------- | ------------------------------------ | ---------------------- | ------------------- |
| 1        | Set + filter (filtering smaller set) | O(n + m)               | Excellent           |
| 2        | Set + filter                         | O(n + m)               | Good for large data |
| 3        | Manual nested loop                   | O(n * (m + k)) = O(n²) | Worst               |

1. Set + filter (filtering smaller set)
• Set on both the datasets remove duplicates
• Smaller Set will perform less iterations to check for element to satisfy condition 
• Once the dataset is inside a Set, lookup in Set using has() is fast
• Best for very large datasets


2. Set + filter
• Only downside is 
  o	Filtering from big dataset takes more time
• Still excellent for large datasets


3. Other approaches
• All repeatedly scan arrays
• Fine for small datasets
• Not ideal for production-scale data
*/
