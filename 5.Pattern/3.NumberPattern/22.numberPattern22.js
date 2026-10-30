/*
1       5
_1     4
__1   3
___1 2
____1
___1 2
__1   3
_1     4
1       5
*/

//2 Loops
const numberPattern = lines => {
  //Upper Half
  for (let i = 1; i <= lines; i++) {
    let result = " ".repeat(i - 1) + "1"
    if (i < lines) {
      const counter = lines - i + 1
      result += " ".repeat(2 * counter - 3) + counter
    }

    console.log(result)
  }

  //Lower Half
  for (let i = lines - 1; i >= 1; i--) {
    let result = " ".repeat(i - 1) + "1"
    const counter = lines - i + 1
    result += " ".repeat(2 * counter - 3) + counter

    console.log(result)
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

    let result = " ".repeat(mid - dist - 1)

    if (dist === 0) {
      result += "1"
    } else {
      const innerSpaces = " ".repeat(2 * dist - 1)
      result += `${1}${innerSpaces}${dist + 1}`
    }

    console.log(result)
  }
}

numberPatternDistanceFromCentre(5)

console.log("============================")

//Nested Loops
const numberPatternDistanceFromCentreNestedLoops = lines => {
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    let result = ""

    const dist = i <= mid ? mid - i : i - mid

    for (let j = 1; j <= mid - dist - 1; j++) {
      result += " "
    }

    if (dist === 0) {
      result += "1"
    } else {
      let innerSpaces = ""
      for (let k = 1; k <= 2 * dist - 1; k++) {
        innerSpaces += " "
      }
      result += `${"1"}${innerSpaces}${dist + 1}`
    }

    console.log(result)
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
