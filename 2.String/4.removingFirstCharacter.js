const str = "Ankit is a boy"
//==== Inbuilt ====

// a. slice (Best Way)
const result1 = str.slice(1)
console.log("slice:", result1)

// b. substring (Best Way)
const result2 = str.substring(1)
console.log("substring:", result2)

// c. substr (Deprecated)
const result3 = str.substr(1)
console.log("substr:", result3)

// d. spread + slice + join (Second Best Way)
const result4 = [...str].slice(1).join("")
console.log("spread operator:", result4)

// e. Array.from + slice + join (Second Best Way)
const result5 = Array.from(str).slice(1).join("")
console.log("Array.from:", result5)

// f. replace
const result6 = str.replace(/^./, "")
console.log("replace:", result6)

//==== Manual Approach ====
const result7 = []

for (let i = 1; i < str.length; i++) {
  result7.push(str[i])
}

console.log("user defined;", result7.join(""))

// For emoji  handling
const str1 = "👨👩👧👦y"

// a. Using charCodeAt
const firstCodePoint = str1.codePointAt(0)
const index = firstCodePoint > 0xffff ? 2 : 1
const result8 = str1.slice(index)

console.log("codePointAt:", result8)

// b. Using replace
const result9 = str1.replace(/^[\s\S]/u, "")
console.log("replaceUniCode:", result9)

//==== Full Unicode grapheme String ====
const str2 = "👨‍👩‍👧‍👦B"

const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" })
const first = segmenter.segment(str2)[Symbol.iterator]().next().value
const revFullGrapheme = first ? str2.slice(first.segment.length) : ""

console.log("Grapheme- original string:", str2)
console.log("Grapheme- revFullGrapheme:", revFullGrapheme)

/*
****************Read Me****************
Approach Comparison (Ordinary String)
-------------------
| **Rank** | **Approach**              | **Time Complexity**  | **Space Complexity** | **Production**         |
| -------- | ------------------------- | -------------------- | -------------------- | ---------------------- |
| 1        | slice                     | O(n)                 | O(n)                 | Excellent              |
| 1        | substring                 | O(n)                 | O(n)                 | Excellent              |
| 2        | spread + slice + join     | O(n)                 | O(n)                 | Excellent              |
| 2        | Array.from + slice + join | O(n)                 | O(n)                 | Excellent              |
| 3        | replace                   | O(n)                 | O(n)                 | Excellent              |
| 4        | Manual                    | O(n)                 | O(n)                 |                        |
| 5        | substr                    | O(n)                 | O(n)                 | Deprecated, legacy API |

Approach Comparison (Emoji String)
-------------------
| **Rank** | **Approach** | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | ------------ | -------------------- | -------------------- | -------------- |
| 1        | codePointAt  | O(n)                 | O(1)                 | Excellent      |
| 2        | replace      | O(n)                 | O(1)                 | Excellent      |

Approach Comparison (Grapheme String)
-------------------
| **Rank** | **Approach**   | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | -------------- | -------------------- | -------------------- | -------------- |
| 1        | Intl.Segmenter | O(n)                 | O(n)                 | Excellent      |

*/
