const clean = str => {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "")
}

const sort = str => {
  return clean(str).split("").sort().join("")
}

//In Build (good for short strings)
const isAnagram = (str1, str2) => {
  // if (sort(str1).localeCompare(sort(str2))) {
  if (sort(str1) === sort(str2)) {
    console.log("They are anagrams")
  } else {
    console.log("They are not anagrams")
  }
}

isAnagram("listen", "silent")

//User Defined [character count approach] (good for too long strings)
const isAnagramUser = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  const cleanStr1 = clean(str1)
  const cleanStr2 = clean(str2)
  const obj = Object.create(null)

  for (let ele of cleanStr1) {
    obj[ele] = (obj[ele] || 0) + 1
  }

  for (let ele of cleanStr2) {
    if (!obj[ele]) {
      return false
    }
    obj[ele]--
  }

  // for (let ele of cleanStr2) {
  // if (!Object.hasOwn(obj, ele)) {
  //    return false
  //   }

  //   let count = obj[ele]
  //   if (count === 1) {
  //     delete obj[ele]
  //   } else {
  //     obj[ele]--
  //   }
  // }
  return true
}

const result = isAnagramUser("listen", "silent")
console.log(result ? "They are anagrams" : "They are not anagrams")

//Map (Best)
const isAnagramUserMap = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }

  const cleanStr3 = clean(str1)
  const cleanStr4 = clean(str2)
  const map = new Map()

  for (let ele of cleanStr3) {
    map.set(ele, (map.get(ele) || 0) + 1)
  }

  for (const ele of cleanStr4) {
    const count = map.get(ele)

    if (!count) {
      return false
    }

    map.set(ele, count - 1)
  }

  return true
}

const result1 = isAnagramUserMap("listen", "silent")
console.log(result1 ? "They are anagrams" : "They are not anagrams")

/*
Other way to compare elements to verify if its anagram
for (const ele of cleanStr4) {
  if (!map.has(ele)) {
    return false
  }

  const count = map.get(ele)

  if (count === 1) {
    map.delete(ele)
  } else {
    map.set(ele, count - 1)
  }
}
*/
