/*
 1 2 3 4 5
 1       5
 1       5
 1       5
 1 2 3 4 5
 */

//Row Based Approach
const numberPattern = lines => {
  for (let i = 1; i <= lines; i++) {
    let result = ""
    if (i === 1 || i === lines) {
      result = Array.from({ length: lines }, (_ele, i) => i + 1).join(" ")
    } else {
      const innerSpaces = " ".repeat(2 * lines - 3)
      result = `${"1"}${innerSpaces}${lines}`
    }

    console.log(result)
  }
}

numberPattern(5)

console.log("============================")

//Grid Based Approach
const numberPatternGridBased = lines => {
  const rows = lines
  const columns = lines

  for (let i = 1; i <= rows; i++) {
    let result = ""

    for (let j = 1; j <= columns; j++) {
      if (i === 1 || i === rows || j === 1 || j === columns) {
        result += j + " "
      } else {
        result += "  "
      }
    }

    console.log(result.trimEnd())
  }
}

numberPatternGridBased(5)
