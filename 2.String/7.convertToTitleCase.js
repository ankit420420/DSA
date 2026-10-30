const str = "Ankit iS good"

//replace
const titleCase1 = str
  .trim()
  .toLowerCase()
  .replace(/\b\w/g, char => char.toUpperCase())
console.log("replace:", titleCase1)

//split + map
const titleCase2 = str
  .trim()
  .toLowerCase()
  .split(" ")
  .map(ele => ele.charAt(0).toUpperCase() + ele.slice(1))
  .join(" ")
console.log("split + map:", titleCase2)

//User defined method
let titleCase3 = ""
let makeUpper = true

for (let i = 0; i < str.length; i++) {
  const ch = str[i]

  if (ch === " ") {
    titleCase3 += ch
    makeUpper = true
    continue
  }

  if (makeUpper) {
    titleCase3 += ch.toUpperCase()
  } else {
    titleCase3 += ch.toLowerCase()
  }
  makeUpper = false
}

console.log("user defined:", titleCase3.trim())

// other User defined methods
//Way 2 (Pure User defined Approach)
// let titleCase3 = ""
// let makeUpper = true

// for (let i = 0; i < str.length; i++) {
//   const ch = str[i]

//   if (ch === " ") {
//     titleCase3 += ch
//     makeUpper = true
//     continue
//   }

//   const code = ch.charCodeAt(0)

//   if (makeUpper && code >= 97 && code <= 122) { //if alphabet is small - convert to capital
//     titleCase3 += String.fromCharCode(code - 32)
//   } else if (!makeUpper && code >= 65 && code <= 90) { //if alphabet is capital - convert to small
//     titleCase3 += String.fromCharCode(code + 32)
//   } else {
//     titleCase3 += ch
//   }
//   makeUpper = false
// }

// console.log("user defined:", titleCase3.trim())
