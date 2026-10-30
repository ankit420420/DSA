const numbers = [1, 2, 3, 4, 3, 2, 3, 5, 6, 64, 4]

//Map (Best Way)
const map = new Map()

numbers.forEach(ele => {
  map.set(ele, (map.get(ele) || 0) + 1)
})

const uniCount1 = [...map].filter(([_ele, count]) => count === 1).map(([key]) => key).length
console.log("uniCount1:", uniCount1)

//Frequency map (Second Best Way)
const frequencyMap = Object.create(null)

numbers.forEach(ele => (frequencyMap[ele] = (frequencyMap[ele] || 0) + 1))

const uniCount2 = numbers.filter(ele => frequencyMap[ele] === 1).length
console.log("uniCount2:", uniCount2)

/*
Other ways to get count of unique elements from frequency map
Way 2
const uniCount2 = Object.keys(frequencyMap).filter(ele => frequencyMap[ele] === 1).length
console.log("uniCount2:", uniCount2)

Way 3
const uniCount2 = Object.values(frequencyMap).filter(val => val === 1).length
console.log("uniCount2:", uniCount2)
*/
