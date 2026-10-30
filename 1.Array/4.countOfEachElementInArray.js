const numbers = [1, 2, 45, 3, 2, 3]

//Map (Best Way)
const map = new Map()

numbers.forEach(x => {
  map.set(x, (map.get(x) || 0) + 1)
})
// console.log("elementCount1:", map)
console.log("elementCount1:", Object.fromEntries(map))

//Frequency map (Second Best Way)
const frequencyMap = Object.create(null)

numbers.forEach(x => {
  frequencyMap[x] = (frequencyMap[x] || 0) + 1
})
console.log("elementCount2:", { ...frequencyMap })

//Manual Approach
const eleCountObj = Object.create(null)

for (let i = 0; i < numbers.length; i++) {
  eleCountObj[numbers[i]] = (eleCountObj[numbers[i]] || 0) + 1
}
console.log("elementCount3:", { ...eleCountObj })

/*
other Manual Approaches
Way 2 (Pure Manual Approach)
const eleCountObj = Object.create(null)

for (let i = 0; i < numbers.length; i++) {
  if (eleCountObj[numbers[i]]) {
    eleCountObj[numbers[i]]++
  } else {
    eleCountObj[numbers[i]] = 1
  }
}
console.log("elementCount3:", { ...eleCountObj })
*/
