const str = "A man, a plan, a canal: Panama"

// Inbuilt (Third Best Way)
const cleanStr = clean(str)
const revInBuilt = cleanStr.split("").reverse().join("")

console.log(cleanStr === revInBuilt ? "It is a palindrome" : "It is not a palindrome")

//==== Helper functions ====
// Trim, convert string to lowercase and remove non-alphanumeric characters
function clean(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "")
}

// Recursion
let left1 = 0
let right1 = str.length - 1

function reverseRecursion(str, left, right) {
  while (left < right && !isAlphaNumeric(str[left])) {
    left++
  }
  while (left < right && !isAlphaNumeric(str[right])) {
    right--
  }
  if (left >= right) {
    return true
  }
  if (str[left].toLowerCase() != str[right].toLowerCase()) {
    return false
  }
  return reverseRecursion(str, left + 1, right - 1)
}

const revRecurBool = reverseRecursion(str, left1, right1)

console.log(revRecurBool ? "It is a palindrome" : "It is not a palindrome")

//==== Manual Approach ====
// a. Using 2 pointer (Best Way)
let left2 = 0
let right2 = str.length - 1
let isIdentical1 = true

while (left2 < right2) {
  while (left2 < right2 && !isAlphaNumeric(str[left2])) {
    left2++
  }
  while (left2 < right2 && !isAlphaNumeric(str[right2])) {
    right2--
  }
  if (left2 >= left2) {
    break
  }
  if (str[left2].toLowerCase() !== str[right2].toLowerCase()) {
    isIdentical1 = false
    break
  }
  left2++
  right2--
}

console.log(isIdentical1 ? "It is a palindrome" : "It is not a palindrome")

// b. Using Pure Manual Approach (Second Best Way)
let left3 = 0
let right3 = str.length - 1
let isIdentical2 = true

while (left3 < right3) {
  while (left3 < right3 && !isAlphaNumeric(str[left3])) {
    left3++
  }
  while (left3 < right3 && !isAlphaNumeric(str[right3])) {
    right3--
  }
  if (left2 >= left2) {
    break
  }
  if (toLower(str[left3]) !== toLower(str[right3])) {
    isIdentical2 = false
    break
  }
  left3++
  right3--
}

console.log(isIdentical2 ? "It is a palindrome" : "It is not a palindrome")

//==== Helper functions ====
// Check if element is either number or character
function isAlphaNumeric(ch) {
  const code = ch.charCodeAt(0)

  return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

// Convert uppercase character to lowercase
function toLower(ch) {
  const code = ch.charCodeAt(0)

  if (code >= 65 && code <= 90) {
    return String.fromCharCode(code + 32)
  }
  return ch
}
