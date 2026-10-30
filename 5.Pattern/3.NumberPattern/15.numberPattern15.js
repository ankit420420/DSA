/*
____1
___12
__123
_1234
12345
_1234
__123
___12
____1
*/

//2 Loops
const numberPattern = lines => {
  //Upper Half
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join("")

    console.log(`${spaces}${numbers}`)
  }

  //Lower Half
  for (let i = lines - 1; i >= 1; i--) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join("")

    console.log(`${spaces}${numbers}`)
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
    const spaces = " ".repeat(dist)

    const counter = mid - dist
    const numbers = Array.from({ length: counter }, (_ele, i) => i + 1).join("")

    console.log(`${spaces}${numbers}`)
  }
}

numberPatternDistanceFromCentre(5)

console.log("============================")

//Nested Loops
const numberPatternDistanceFromCentreNestedLoops = lines => {
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    let spaces = ""
    let numbers = ""

    const dist = i <= mid ? mid - i : i - mid
    for (let j = 1; j <= dist; j++) {
      spaces += " "
    }

    const counter = mid - dist
    for (let k = 1; k <= counter; k++) {
      numbers += k
    }

    console.log(`${spaces}${numbers}`)
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
