/*
 1234512345
 1234  1234
 123    123
 12      12
 1        1
 12      12
 123    123
 1234  1234
 1234512345
 */

//2 Loops
const numberPattern = lines => {
  //Upper Half
  for (let i = lines; i >= 1; i--) {
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join("")
    const innerSpaces = "  ".repeat(lines - i)

    console.log(`${numbers}${innerSpaces}${numbers}`)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join("")
    const innerSpaces = "  ".repeat(lines - i)

    console.log(`${numbers}${innerSpaces}${numbers}`)
  }
}

numberPattern(5)

console.log("============================")

//Single Loop (Optimized and Best Approach)
const numberPatternDistanceFromCentre = lines => {
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    const dist = Math.abs(mid - i)
    const numbers = Array.from({ length: dist + 1 }, (_ele, i) => i + 1).join("")
    const innerSpaces = "  ".repeat(mid - dist - 1)

    console.log(`${numbers}${innerSpaces}${numbers}`)
  }
}

numberPatternDistanceFromCentre(5)

console.log("============================")

//Nested Loops
const numberPatternDistanceFromCentreNestedLoops = lines => {
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    let numbers = ""
    let innerSpaces = ""

    const dist = i <= mid ? mid - i : i - mid

    for (let j = 1; j <= dist + 1; j++) {
      numbers += j
    }

    for (let k = 1; k <= mid - dist - 1; k++) {
      innerSpaces += "  "
    }

    console.log(`${numbers}${innerSpaces}${numbers}`)
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
