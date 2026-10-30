/*
________1 
______1 2 3 
____1 2 3 4 5
__1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 9
__1 2 3 4 5 6 7 
____1 2 3 4 5
______1 2 3
________1
 */

//2 Loops
const numberPattern = lines => {
  //Upper Half
  for (let i = 1; i <= lines; i++) {
    const spaces = "  ".repeat(lines - i)
    const numbers = Array.from({ length: 2 * i - 1 }, (_ele, i) => i + 1).join(" ")

    console.log(`${spaces}${numbers}`)
  }

  //Lower Half
  for (let i = lines - 1; i >= 1; i--) {
    const spaces = "  ".repeat(lines - i)
    const numbers = Array.from({ length: 2 * i - 1 }, (_ele, i) => i + 1).join(" ")

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
    const spaces = "  ".repeat(dist)

    const counter = mid - dist
    const numbers = Array.from({ length: 2 * counter - 1 }, (_ele, i) => i + 1).join(" ")

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
    for (let j = 1; j <= 2 * dist; j++) {
      spaces += " "
    }

    const counter = mid - dist
    for (let k = 1; k <= 2 * counter - 1; k++) {
      numbers += k + " "
    }

    console.log(`${spaces}${numbers.trimEnd()}`)
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
