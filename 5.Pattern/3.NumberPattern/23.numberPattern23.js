/*
1 2 3 4 5
_1 2 3 4
__1 2 3
___1 2
____1
___1 2
__1 2 3
_1 2 3 4
1 2 3 4 5
 */

//2 Loops
const numberPattern = lines => {
  //Upper Half
  for (let i = lines; i >= 1; i--) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join(" ")

    console.log(`${spaces}${numbers}`)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join(" ")

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
    const spaces = " ".repeat(mid - dist - 1)
    const numbers = Array.from({ length: dist + 1 }, (_ele, i) => i + 1).join(" ")

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

    for (let j = 1; j <= mid - dist - 1; j++) {
      spaces += " "
    }

    for (let k = 1; k <= dist + 1; k++) {
      numbers += k + " "
    }

    console.log(`${spaces}${numbers.trimEnd()}`)
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
