/*
____1
___1 2
__1   3
_1     4
1       5
*/

//Single Loop
const numberPattern = lines => {
  for (let i = lines; i >= 1; i--) {
    let result = " ".repeat(i - 1) + "1"

    if (i < lines) {
      const counter = lines - i + 1
      const innerSpaces = " ".repeat(2 * counter - 3)
      result += `${innerSpaces}${counter}`
    }

    console.log(result)
  }
}

numberPattern(5)

console.log("============================")

//Single Loop- Distance from center logic (Optimized and Best Approach)
const numberPatternDistanceFromCentre = lines => {
  for (let i = 1; i <= lines; i++) {
    const dist = lines - i
    let result = " ".repeat(dist)

    const counter = lines - dist
    if (counter === 1) {
      result += "1"
    } else {
      const innerSpaces = " ".repeat(2 * counter - 3)
      result += `${"1"}${innerSpaces}${counter}`
    }

    console.log(result)
  }
}

numberPatternDistanceFromCentre(5)

console.log("============================")

//Nested Loops
const numberPatternDistanceFromCentreNestedLoops = lines => {
  for (let i = 1; i <= lines; i++) {
    let result = ""

    const dist = lines - i
    for (let j = 1; j <= dist; j++) {
      result += " "
    }

    const counter = lines - dist
    if (counter === 1) {
      result += "1"
    } else {
      let innerSpaces = ""
      for (let k = 1; k <= 2 * counter - 3; k++) {
        innerSpaces += " "
      }
      result += `${"1"}${innerSpaces}${counter}`
    }

    console.log(result)
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
