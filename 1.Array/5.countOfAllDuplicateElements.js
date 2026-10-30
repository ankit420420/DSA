const numbers = [1, 2, 3, 4, 3, 2, 3, 5, 6, 64, 4]

//Map (Best Way)
const map = new Map()

numbers.forEach(ele => {
  map.set(ele, (map.get(ele) || 0) + 1)
})

const dupCount1 = [...map].filter(([_ele, count]) => count > 1).map(([key]) => key).length
console.log("dupCount1:", dupCount1)

//Frequency map (Second Best Way)
const frequencyMap = Object.create(null)

numbers.forEach(ele => (frequencyMap[ele] = (frequencyMap[ele] || 0) + 1))

const dupCount2 = Object.keys(frequencyMap).filter(ele => frequencyMap[ele] > 1).length
console.log("dupCount2:", dupCount2)

/*
Other ways to get count of duplicate elements from frequency map
Way 2
const dupCount2 = Object.values(frequencyMap).filter(val => val > 1).length
console.log("dupCount2:", dupCount2)
*/
