/*
1 2 3 4 5 6 7 8 9 
__1           4 
____1       3
______1   2
________1
______1   2 
____1       3
__1           4
1 2 3 4 5 6 7 8 9
 */

//2 Loops
const numberPattern = lines => {
  //Upper Half
  for (let i = lines; i >= 1; i--) {
    let result = ""
    if (i === lines) {
      result = Array.from({ length: 2 * i - 1 }, (_ele, i) => i + 1).join(" ")
    } else {
      result = "  ".repeat(lines - i) + "1"
      if (i > 1) {
        result += " ".repeat(4 * (i - 1) - 1) + i
      }
    }

    console.log(result)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    let result = ""
    if (i === lines) {
      result = Array.from({ length: 2 * i - 1 }, (_ele, i) => i + 1).join(" ")
    } else {
      result = "  ".repeat(lines - i) + "1"
      result += " ".repeat(4 * (i - 1) - 1) + i
    }

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

    let result = "  ".repeat(mid - dist - 1)

    if (dist === mid - 1) {
      result += Array.from({ length: 2 * dist + 1 }, (_ele, i) => i + 1).join(" ")
    } else if (dist === 0) {
      result += "1"
    } else {
      const innerSpaces = " ".repeat(4 * dist - 1)
      result += `${"1"}${innerSpaces}${dist + 1}`
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
      result += "  "
    }

    if (dist === mid - 1) {
      for (let k = 1; k <= 2 * dist + 1; k++) {
        result += k + " "
      }
    } else if (dist === 0) {
      result += "1"
    } else {
      let innerSpaces = ""
      for (let l = 1; l <= 4 * dist - 1; l++) {
        innerSpaces += " "
      }
      result += `${"1"}${innerSpaces}${dist + 1}`
    }

    console.log(result.trimEnd())
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
