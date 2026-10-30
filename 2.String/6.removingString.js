const str = "Ankit is a is boy"
const ele = "is"

//Removing first match only

//replace
const result1 = str.replace(ele, "")
console.log("replace:", result1)

//replace (also removing extra spaces between words)
const result2 = str.replace(ele, "").replace(/\s+/g, " ")
console.log("replace:", result2)

//indexOf + slice
const val1 = str.indexOf(ele)
const result3 = (str.slice(0, val1) + str.slice(val1 + ele.length)).replace(/\s+/g, " ")
console.log("slice:", result3)

//indexOf + substring
const val2 = str.indexOf(ele)
const result4 = (str.substring(0, val2) + str.substring(val2 + ele.length)).replace(/\s+/g, " ")
console.log("substring:", result4)

//Removing all matches

//replace
const result5 = str.replace(/is/gi, "").replace(/\s+/g, " ")
console.log("replace gi:", result5)

//replace + RegExp
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
const result6 = str.replace(new RegExp(escapeRegExp(ele), "gi"), "").replace(/\s+/g, " ")
console.log("replace RegExp:", result6)

//split
const result7 = str.split(ele).join("").replace(/\s+/g, " ")
console.log("split(ele):", result7)

//split + filter
const result8 = str
  .split(" ")
  .filter(c => c != ele)
  .join(" ")
console.log("split(''):", result8)

//User defined method
let result9 = ""

const arr = str.split(" ")
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != ele) {
    result9 += arr[i] + " "
  }
}
console.log("user defined:", result9.trimEnd())
