const arr1 = [1, 3, 2]
const arr2 = [1, 2, 3]

// sort
const sortArr1 = [...arr1].sort()
const sortArr2 = [...arr2].sort()
const result =
  sortArr1.length === sortArr2.length && sortArr1.every((ele, i) => ele === sortArr2[i])

console.log(result ? "Both arrays are equal" : "Both arrays are unequal")

// Map
let isEqual = true

if (arr1.length != arr2.length) {
  isEqual = false
} else {
  const map = new Map()
  for (const ele of arr1) {
    map.set(ele, (map.get(ele) || 0) + 1)
  }

  for (const ele of arr2) {
    const count = map.get(ele)

    if (!count) {
      isEqual = false
      break
    }

    map.set(ele, count - 1)
  }

  // for (const ele of arr2) {
  //   if (!map.has(ele)) {
  //     isEqual = false
  //     break
  //   }

  //   let count = map.get(ele)
  //   if (count === 1) {
  //     map.delete(ele)
  //   } else {
  //     map.set(ele, count - 1)
  //   }
  // }
}

console.log(isEqual ? "Both arrays are equal" : "Both arrays are unequal")

// Object frequency
let isEqual1 = true

if (arr1.length != arr2.length) {
  isEqual1 = false
} else {
  const obj = Object.create(null)

  for (const ele of arr1) {
    obj[ele] = (obj[ele] || 0) + 1
  }

  for (const ele of arr2) {
    if (!obj[ele]) {
      isEqual1 = false
      break
    }

    obj[ele]--
  }

  // for (const ele of arr2) {
  //   if (!Object.hasOwn(obj, ele)) {
  //     isEqual1 = false
  //     break
  //   }

  //   let count = obj[ele]
  //   if (count === 1) {
  //     delete obj[ele]
  //   } else {
  //     obj[ele]--
  //   }
  // }
}

console.log(isEqual1 ? "Both arrays are equal" : "Both arrays are unequal")
