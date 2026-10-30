const numbers = [1, 2, 45, 3, 2, 3]

//Way 1
const elementCount = {}

numbers.forEach(x => (elementCount[x] = (elementCount[x] || 0) + 1))
console.log(elementCount)

//Way 2
const elementMap = new Map()

numbers.forEach(x => {
  elementMap.set(x, (elementMap.get(x) || 0) + 1)
})
console.log(elementMap)
console.log(Object.fromEntries(elementMap))

//Way 3
const dupCount = {}

for (let i = 0; i < numbers.length; i++) {
  if (dupCount[numbers[i]]) {
    dupCount[numbers[i]]++
  } else {
    dupCount[numbers[i]] = 1
  }
}
console.log(dupCount)
