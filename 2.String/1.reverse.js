const str = "Lovely day"

//==== Inbuilt ====
// a. Using split + reverse + join (Second Best Way)
const revStrInbuild1 = str.split("").reverse().join("")
console.log("revStrInbuild1:", revStrInbuild1)

// b. Using spread + reverse + join (Best Way)
const revStrInbuild2 = [...str].reverse().join("")
console.log("revStrInbuild2:", revStrInbuild2)

// c. Using Array.from + reverse + join (Best Way)
const revStrInbuild3 = Array.from(str).reverse().join("")
console.log("revStrInbuild3:", revStrInbuild3)

// d. Using Array.from + join (Third Best Way)
const revStrInbuild5 = Array.from({ length: str.length }, (_, i) => str[str.length - i - 1]).join(
  ""
)
console.log("revStrInbuild5:", revStrInbuild5)

// e. Using spread + map + join
const revStrInbuild4 = [...str].map((_, i, arr) => arr[arr.length - i - 1]).join("")
console.log("revStrInbuild4:", revStrInbuild4)

//f. Using spread + reduce
const revStrInbuild6 = [...str].reduce((acc, curr) => curr + acc, "")
console.log("revStrInbuild6:", revStrInbuild6)

// g. Using spread + reduceRight
const revStrInbuild7 = [...str].reduceRight((acc, curr) => acc + curr, "")
console.log("revStrInbuild7:", revStrInbuild7)

//==== Recursion ====
// a. Using index
function indexBasedRec(str, index = str.length - 1) {
  if (index < 0) {
    return ""
  }

  return str[index] + indexBasedRec(str, index - 1)
}

const revStrRec1 = indexBasedRec(str)
console.log("revStrRec1:", revStrRec1)

/* Another approach using index
function indexBasedRec(str, index = str.length - 1, result = "") {
  if (index < 0) {
    return result
  }

  return indexBasedRec(str, index - 1, result + str[index])
}
*/

// b. Using slice
function substringBasedRec(str) {
  if (str === "") {
    return ""
  }
  return substringBasedRec(str.slice(1)) + str[0]
}

const revStrRec2 = substringBasedRec(str)
console.log("revStrRec2:", revStrRec2)

//==== Manual Approach ====
// a. Using reverse array (Third Best Way)
const revArr1 = []

for (let i = str.length - 1; i >= 0; i--) {
  revArr1.push(str[i])
}

const revStrManual1 = revArr1.join("")
console.log("revStrManual1:", revStrManual1)

// b. Using 2 pointer
const arr1 = str.split("")
let left1 = 0
let right1 = arr1.length - 1
let temp1

while (left1 < right1) {
  temp1 = arr1[left1]
  arr1[left1] = arr1[right1]
  arr1[right1] = temp1

  left1++
  right1--
}

const revStrManual2 = arr1.join("")
console.log("revStrManual2:", revStrManual2)

/*Other way to swap array elements, without third varibale
while (left1 < right1) {
  ;[arr1[left], arr1[right]] = [arr1[right], arr1[left]]

  left1++
  right1--
}
  */

// c. Using for...of
// 1. Using reverse string concatenation
let revStrManual3 = ""

for (const ch of str) {
  revStrManual3 = ch + revStrManual3
}

console.log("revStrManual3:", revStrManual3)

// 2. Using array + push/pop
const arr2 = []
let revStrManual4 = ""

for (const ch of str) {
  arr2.push(ch)
}

while (arr2.length > 0) {
  revStrManual4 += arr2.pop()
}

console.log("revStrManual4:", revStrManual4)

// d. Pure Manual Approach
// 1. Using string concatenation
let revStrManual5 = ""

for (let i = 0; i < str.length; i++) {
  revStrManual5 = str[i] + revStrManual5
}

console.log("revStrManual5:", revStrManual5)

// 2. Using array
const arr3 = []
let revStrManual6 = ""

for (let i = 0; i < str.length; i++) {
  arr3[i] = str[i]
}

for (let i = 0; i < arr3.length; i++) {
  revStrManual6 = arr3[i] + revStrManual6
}

console.log("revStrManual6:", revStrManual6)

// 3. Using reverse array
const revArr2 = []
let revStrManual7 = ""

for (let i = str.length - 1; i >= 0; i--) {
  revArr2[str.length - i - 1] = str[i]
}

for (let i = 0; i < revArr2.length; i++) {
  revStrManual7 += revArr2[i]
}

console.log("revStrManual7:", revStrManual7)

// 4. Using 2 pointer
const arr4 = []
let left2 = 0
let temp2
let revStrManual8 = ""

for (let i = 0; i < str.length; i++) {
  arr4[i] = str[i]
}

let right2 = arr4.length - 1

while (left2 < right2) {
  temp2 = arr4[left2]
  arr4[left2] = arr4[right2]
  arr4[right2] = temp2

  left2++
  right2--
}

for (let i = 0; i < arr4.length; i++) {
  revStrManual8 += arr4[i]
}

console.log("revStrManual8:", revStrManual8)

//==== Full Unicode grapheme String ====
const str1 = "Lovely👨‍👩‍👧‍👦day"

const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" })
const revFullGrapheme = [...segmenter.segment(str1)]
  .map(ele => ele.segment)
  .reverse()
  .join("")

// console.log("Grapheme- original string:", str1)
console.log("Grapheme- revFullGrapheme:", revFullGrapheme)

/*
****************Read Me****************
Approach Comparison (Ordinary String)
-------------------
| **Rank** | **Approach**                     | **Type**  | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | -------------------------------- | --------- | -------------------- | -------------------- | -------------- |
| 1        | Spread + reverse + join          | Inbuilt   | O(n)                 | O(n)                 | Excellent      |
| 1        | Array.from + reverse + join      | Inbuilt   | O(n)                 | O(n)                 | Excellent      |
| 2        | Split + reverse + join           | Inbuilt   | O(n)                 | O(n)                 | Excellent      |
| 3        | Reverse loop + array             | Manual    | O(n)                 | O(n)                 |                |
| 4        | Split + two pointers             | Manual    | O(n)                 | O(n)                 |                |
| 5        | Spread + map + join              | Inbuilt   | O(n)                 | O(n)                 |                |
| 5        | Array.from with reverse indexing | Inbuilt   | O(n)                 | O(n)                 |                |
| 6        | for...of + prepend               | Manual    | O(n)–O(n²)*          | O(n) or more         |                |
| 7        | for...of + stack                 | Manual    | O(n)–O(n²)*          | O(n) or more         |                |
| 8        | Indexed string concatenation     | Manual    | O(n)–O(n²)*          | O(n) or more         |                |
| 9        | Manual reversed array            | Manual    | O(n)–O(n²)*          | O(n) or more         |                |
| 10       | Spread + reduceRight             | Inbuilt   | O(n)–O(n²)*          | O(n) or more         |                |
| 10       | Spread + reduce                  | Inbuilt   | O(n)–O(n²)*          | O(n) or more         |                |
| 11       | Manual array + prepend           | Manual    | O(n)–O(n²)*          | O(n) or more         |                |
| 12       | Pure manual two pointers         | Manual    | O(n)–O(n²)*          | O(n) or more         |                |
| 13       | Index-based recursion            | Recursion | O(n)–O(n²)*          | O(n) or more         |                |
| 14       | Slice-based recursion            | Recursion | O(n²) worst case     | O(n²) worst case     |                |

Approach Comparison (Emoji String)
-------------------
| **Rank** | **Approach**                     | **Type**  | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | -------------------------------- | --------- | -------------------- | -------------------- | -------------- |
| 1        | Spread + reverse + join          | Inbuilt   | O(n)                 | O(n)                 | Excellent      |
| 1        | Array.from + reverse + join      | Inbuilt   | O(n)                 | O(n)                 | Excellent      |
| 2        | for...of + prepend               | Manual    | O(n)–O(n²)*          | O(n) or more         |                |
| 3        | for...of + stack                 | Manual    | O(n)–O(n²)*          | O(n) or more         |                |
| 4        | Split + reduceRight              | Inbuilt   | O(n)–O(n²)*          | O(n) or more         |                |
| 4        | Split + reduce                   | Inbuilt   | O(n)–O(n²)*          | O(n) or more         |                |


Approach Comparison (Grapheme String)
-------------------
| **Rank** | **Approach**                     | **Type**  | **Time Complexity**  | **Space Complexity** | **Production** |
| -------- | -------------------------------- | --------- | -------------------- | -------------------- | -------------- |
| 1        | Grapheme                         | Inbuilt   | O(n)                 | O(n)                 | Excellent      |

1. Full unicode grapheme 
•	Best for preserving the family emoji as one grapheme cluster 
•	Best for large datasets

2. Inbuilt Method
•	Short, readable, clean 
•	Best for large datasets


3. Manual Loop (using 2 pointer) 
•	Shows logic clearly
•	Does not consume unnecessary memory by creating new strings
•	Best for large datasets


4. Manual Loop (using array) 
•	Shows logic clearly
•	Does not consume unnecessary memory by creating new strings
•	Best for large datasets


5. Manual Loop (using string concat) 
•	Repeatedly creates new strings during concatenation
•	Consume unnecessary memory with each new string
•	Not ideal for production-scale data


6. Recursion
•	Repeatedly creates new substrings using slice()
•	Repeatedly creates new strings during concatenation
•	Adds each recursion call to same function to call-stack memory and can cause stack overflow for large inputs
•	Worst method
•	Not ideal for production-scale data
*/
