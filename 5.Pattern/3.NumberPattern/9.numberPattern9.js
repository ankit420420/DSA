//Hollow Diamond
/*
____1
___1 2
__1   3
_1     4
1       5
_1     4
__1   3
___1 2
____1
*/

//2 Loops
const numberPattern = lines => {
  //Uppers Half
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

  //Lower Half
  for (let i = lines - 1; i >= 1; i--) {
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

numberPattern(5)

console.log("============================")

//Single Loop (Optimized and Best Approach)
const numberPatternDistanceFromCentre = lines => {
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    const dist = Math.abs(mid - i)
    let result = " ".repeat(dist)

    const counter = mid - dist
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
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    let result = ""

    const dist = i <= mid ? mid - i : i - mid
    for (let j = 1; j <= dist; j++) {
      result += " "
    }

    const counter = mid - dist
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
