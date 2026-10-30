const str1 = "Ank"
const str2 = "kna"

//way 1
const sortedStr1 = [...str1.toLowerCase()].sort().join("")
const sortedStr2 = [...str2.toLowerCase()].sort().join("")

const result = sortedStr1 === sortedStr2
console.log(result ? "Both strings are equal" : "Both strings are unequal")

//way2 (Best)
let isEqual = true
if (str1.length !== str2.length) {
  isEqual = false
} else {
  const sortedStr3 = [...str1.toLowerCase()].sort().join("")
  const sortedStr4 = [...str2.toLowerCase()].sort().join("")
  const map = new Map()
  for (const ele of sortedStr3) {
    map.set(ele, (map.get(ele) || 0) + 1)
  }

  for (const ele of sortedStr4) {
    const count = map.get(ele)

    if (!count) {
      isEqual = false
      break
    }

    map.set(ele, count - 1)
  }

  // for (const ele of cleanStr4) {
  //   if (!map.has(ele)) {
  //     isEqual = false
  //     break
  //   }

  //   const count = map.get(ele)

  //   if (count === 1) {
  //     map.delete(ele)
  //   } else {
  //     map.set(ele, count - 1)
  //   }
  // }
}

console.log(isEqual ? "Both strings are equal" : "Both strings are unequal")

//way3
let isEqual1 = true

if (str1.length !== str2.length) {
  isEqual1 = false
} else {
  const sortedStr3 = [...str1.toLowerCase()].sort().join("")
  const sortedStr4 = [...str2.toLowerCase()].sort().join("")
  const obj = Object.create(null)

  for (const ele of sortedStr3) {
    obj[ele] = (obj[ele] || 0) + 1
  }

  for (const ele of sortedStr4) {
    if (!obj[ele]) {
      isEqual1 = false
      break
    }
    obj[ele]--
  }

  // for (const ele of cleanStr4) {
  // if (!Object.hasOwn(obj, ele)) {
  //   isEqual1 = false
  //   break
  //   }

  //   let count = obj[ele]
  //   if (count === 1) {
  //     delete obj[ele]
  //   } else {
  //     obj[ele]--
  //   }
  // }
}

console.log(isEqual1 ? "Both strings are equal" : "Both strings are unequal")
