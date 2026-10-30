const arr = [
  {
    id: "671",
    firstName: "Sherry",
    displayName: "Zhixia ZX3 Tian",
    emailAddress: "Sherry.Tian@lcfuturecenter.com",
    ImtId: "157"
  },
  {
    id: "2092",
    firstName: "Jamel",
    displayName: "Jamel Kong",
    emailAddress: "kongjm1@lenovo.com",
    ImtId: "157"
  },
  {
    id: "1379",
    firstName: "Bella",
    displayName: "Bella Mao",
    emailAddress: "maoxy1@lenovo.com",
    ImtId: "225"
  }
]

//Map (Best Way)
const map = new Map()

arr.forEach(ele => {
  const receiverData = {
    id: ele.id,
    displayName: ele.displayName,
    emailAddress: ele.emailAddress
  }

  if (!map.has(ele.ImtId)) {
    map.set(ele.ImtId, { ImtId: ele.ImtId, Receivers: [] })
  }

  map.get(ele.ImtId).Receivers.push(receiverData)
})

const groupedArr1 = [...map.values()]
console.log("groupedArr1", JSON.stringify(groupedArr1, null, 2))

//frequency Map (Second Best Way)
const objFrequency1 = Object.create(null)
arr.forEach(ele => {
  const receiverData = {
    id: ele.id,
    displayName: ele.displayName,
    emailAddress: ele.emailAddress
  }

  if (!frequencyMap[ele.ImtId]) {
    frequencyMap[ele.ImtId] = { ImtId: ele.ImtId, Receivers: [] }
  }

  frequencyMap[ele.ImtId].Receivers.push(receiverData)
})

const groupedArr2 = Object.values(frequencyMap)
console.log("groupedArr2:", JSON.stringify(groupedArr2, null, 2))

//reduce
const objFrequency2 = arr.reduce((acc, currEle) => {
  const receiverData = {
    id: currEle.id,
    displayName: currEle.displayName,
    emailAddress: currEle.emailAddress
  }
  if (!acc[currEle.ImtId]) {
    acc[currEle.ImtId] = { ImtId: currEle.ImtId, Receivers: [] }
  }

  acc[currEle.ImtId].Receivers.push(receiverData)
  return acc
}, {})

const groupedArr3 = Object.values(objFrequency2)
console.log("groupedArr3:", JSON.stringify(groupedArr3, null, 2))

/*
Others ways using - reduce Approach

const groupedArr3 = arr.reduce((acc, currEle) => {
  let obj = acc.find(ele => ele.ImtId === currEle.ImtId)

  const receiverData = {
    id: currEle.id,
    displayName: currEle.displayName,
    emailAddress: currEle.emailAddress
  }

  if (!obj) {
    obj = {
      ImtId: currEle.ImtId,
      Receivers: []
    }
    acc.push(obj)
  }

  obj.Receivers.push(receiverData)
  return acc
}, [])
console.log("groupedArr3:", JSON.stringify(groupedArr3, null, 2))
*/

//reduce + Map
const mapObj = arr.reduce((map, currEle) => {
  const receiverData = {
    id: currEle.id,
    displayName: currEle.displayName,
    emailAddress: currEle.emailAddress
  }

  if (!map.has(currEle.ImtId)) {
    map.set(currEle.ImtId, { ImtId: currEle.ImtId, Receivers: [] })
  }

  map.get(currEle.ImtId).Receivers.push(receiverData)
  return map
}, new Map())

const groupedArr4 = [...mapObj.values()]
console.log("groupedArr4:", JSON.stringify(groupedArr4, null, 2))

//Manual Approach
const groupedArr5 = []

for (let i = 0; i < arr.length; i++) {
  let currEle = arr[i]
  let obj
  const receiverData = {
    id: currEle.id,
    displayName: currEle.displayName,
    emailAddress: currEle.emailAddress
  }

  for (let j = 0; j < groupedArr5.length; j++) {
    if (groupedArr5[j].ImtId === currEle.ImtId) {
      obj = groupedArr5[j]
      break
    }
  }

  if (!obj) {
    obj = { ImtId: currEle.ImtId, Receivers: [] }
    groupedArr5.push(obj)
  }
  obj.Receivers.push(receiverData)
}
console.log("groupedArr5:", JSON.stringify(groupedArr5, null, 2))

/*
other Manual Approaches
Way 2
const groupedArr6 = []

for (let i = 0; i < arr.length; i++) {
  let currEle = arr[i]
  let objIndex = -1

  const receiverData = {
    id: currEle.id,
    displayName: currEle.displayName,
    emailAddress: currEle.emailAddress
  }

  for (let j = 0; j < groupedArr6.length; j++) {
    if (groupedArr6[j].ImtId === currEle.ImtId) {
      objIndex = j
      break
    }
  }

  if (objIndex === -1) {
    groupedArr6.push({ ImtId: curr.ImtId, Receivers: [] })
    objIndex = groupedArr6.length - 1
  }

  groupedArr6[objIndex].Receivers.push(receiverData)
}
console.log("groupedArr6:", JSON.stringify(groupedArr6, null, 2))
*/

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**       | **Complexity** | **Production**              |
| -------- | ------------------ | -------------- | --------------------------- |
| 1        | Map                | O(n)           | Excellent                   |
| 2        | reduce + Map       | O(n)           | Also best, functional style |
| 3        | Object frequency   | O(n)           | Very good                   |
| 4        | reduce + find      | O(n²)          | Good for small data         |
| 5        | Manual nested loop | O(n²)          | Worst                       |

1. Map
•	It is designed for key-value grouping
•	Single pass to build key-value grouping
•	has() method does not search one by one like an array. It does fast key lookup
•	Better than plain objects as it:
  o	preserves data types 
  o	avoids prototype issues 
  o	supports any key type
•	Best for large data sets


2. reduce + Map 
•	Less readable than Map approach otherwise it is similar to Map approach
•	Best for large datasets


3. Object frequency 
•	Only downside
  o	keys become strings
  o	prototype edge cases if object not created using Object.create(null)
  o	less robust than Map
•	But still excellent


4. Other approaches
•	All repeatedly scan arrays
•	Fine for small datasets
•	Not ideal for production-scale data
*/
