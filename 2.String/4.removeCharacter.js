const str = "Ankit is a boy"
const ele = "i"

//Removing first match only

//replace
const result1 = str.replace(ele, "")
console.log("replace:", result1)

//indexOf + slice
const val1 = str.indexOf(ele)
const result2 = str.slice(0, val1) + str.slice(val1 + ele.length)
console.log("slice:", result2)

//indexOf + substring
const val2 = str.indexOf(ele)
const result3 = str.substring(0, val2) + str.substring(val2 + ele.length)
console.log("substring:", result3)

//Removing all matches

//replace
const result4 = str.replace(/i/gi, "")
console.log("replace gi:", result4)

//replace + RegExp
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
const result5 = str.replace(new RegExp(escapeRegExp(ele), "gi"), "")
console.log("replace RegExp:", result5)

//split
const result6 = str.split(ele).join("")
console.log("split(ele):", result6)

//split + filter
const result7 = str
  .split("")
  .filter(c => c !== ele)
  .join("")
console.log("split(''):", result7)

//spread operator + filter
const result8 = [...str].filter(c => c != ele).join("")
console.log("spread operator:", result8)

//Array.from + filter
const result9 = Array.from(str)
  .filter(c => c != ele)
  .join("")
console.log("Array.from:", result9)

//User defined method
let result10 = ""

for (let i = 0; i < str.length; i++) {
  if (str[i] != ele) {
    result10 += str[i]
  }
}
console.log("user defined:", result10)
