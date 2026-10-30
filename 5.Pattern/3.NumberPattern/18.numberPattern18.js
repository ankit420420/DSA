/*
________1 
______1   2 
____1       3
__1           4
1 2 3 4 5 6 7 8 9
__1           4 
____1       3
______1   2
________1
 */

//2 Loops
const numberPattern = lines => {
  //Uppers Half
  for (let i = 1; i <= lines; i++) {
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

  //Lower Half
  for (let i = lines - 1; i >= 1; i--) {
    const dist = lines - i
    let result = "  ".repeat(dist)

    const counter = lines - dist
    if (counter === 1) {
      result += "1"
    } else {
      const innerSpaces = " ".repeat(4 * counter - 5)
      result += `${"1"}${innerSpaces}${counter}`
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

    let result = "  ".repeat(dist)

    if (dist === 0) {
      result += Array.from({ length: 2 * i - 1 }, (_ele, i) => i + 1).join(" ")
    } else {
      const counter = mid - dist
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
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    let result = ""

    const dist = i <= mid ? mid - i : i - mid

    for (let j = 1; j <= 2 * dist; j++) {
      result += " "
    }

    if (dist === 0) {
      for (let k = 1; k <= 2 * i - 1; k++) {
        result += k + " "
      }
    } else {
      let innerSpaces = ""
      const counter = mid - dist
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
