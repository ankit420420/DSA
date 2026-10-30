/*
1 2 3 4 5 6 7 8 9 
__1           4 
____1       3
______1   2
________1
 */

//Single Loop
const numberPattern = lines => {
  for (let i = lines; i >= 1; i--) {
    let result = ""

    if (i === lines) {
      result = Array.from({ length: 2 * i - 1 }, (_ele, i) => i + 1).join(" ")
    } else {
      result = "  ".repeat(lines - i) + "1"
      if (i > 1) {
        const counter = i - 1
        const innerSpaces = " ".repeat(4 * counter - 1)
        result += `${innerSpaces}${i}`
      }
    }

    console.log(result)
  }
}

numberPattern(5)

console.log("============================")

//Single Loop- Distance from center logic (Optimized and Best Approach)
const numberPatternDistanceFromCentre = lines => {
  for (let i = lines; i >= 1; i--) {
    const dist = lines - i

    let result = "  ".repeat(dist)

    if (dist === 0) {
      result += Array.from({ length: 2 * i - 1 }, (_ele, i) => i + 1).join(" ")
    } else {
      const counter = lines - dist
      if (counter === 1) {
        result += "1"
      } else {
        const innerSpaces = " ".repeat(4 * counter - 5)
        result += `${"1"}${innerSpaces}${counter}`
      }
    }

    console.log(result)
  }
}

numberPatternDistanceFromCentre(5)

console.log("============================")

//Nested Loops
const numberPatternDistanceFromCentreNestedLoops = lines => {
  for (let i = lines; i >= 1; i--) {
    let result = ""

    const dist = lines - i

    for (let j = 1; j <= 2 * dist; j++) {
      result += " "
    }

    if (dist === 0) {
      for (let k = 1; k <= 2 * i - 1; k++) {
        result += k + " "
      }
    } else {
      let innerSpaces = ""
      const counter = lines - dist
      if (counter === 1) {
        result += "1"
      } else {
        for (let m = 1; m <= 4 * counter - 5; m++) {
          innerSpaces += " "
        }
        result += `${"1"}${innerSpaces}${counter}`
      }
    }

    console.log(result.trimEnd())
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
