const arr = [
  { id: 1, name: "Ankit" },
  { id: 3, name: "Mummy" },
  { id: 2, name: "Shreyata" }
]

//sort (More efficient)
const sortByKey = (arr, key) => {
  return [...arr].sort((a, b) => {
    const value1 = a[key]
    const value2 = b[key]

    if (typeof value1 === "string" && typeof value2 === "string") {
      return value1.localeCompare(value2, undefined, { sensitivity: "base" })
    }

    return value1 - value2
  })
}
console.log("sort by id:", sortByKey(arr, "id"))
console.log("sort by name:", sortByKey(arr, "name"))

/*
Other ways to sort
Way 2
const sortByKey = (arr, key) => {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  })
}
console.log("sort by id:", sortByKey(arr, "id"))
console.log("sort by name:", sortByKey(arr, "name"))
*/

/*
****************Read Me****************
Approach Comparison
-------------------
| **Rank** | **Approach**       | **Complexity** | **Production**              |
| -------- | ------------------ | -------------- | --------------------------- |
| 1        | sort               | O(n log n)     | Excellent                   |
*/
