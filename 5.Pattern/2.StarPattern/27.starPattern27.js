/*
 * * * * *
 *       *
 *       *
 *       *
 * * * * *
 */

//single loop
const singleLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    let result = ""
    if (i === 1 || i === lines) {
      result = "* ".repeat(lines).trimEnd()
    } else {
      result = "*" + " ".repeat(2 * lines - 3) + "*"
    }
    console.log(result)
  }
}

singleLoop(5)

console.log("============================")

//Using nested loop
const nestedLoop = lines => {
  const rows = lines
  const columns = lines

  for (let i = 1; i <= rows; i++) {
    let result = ""
    for (let j = 1; j <= columns; j++) {
      if (i === 1 || i === rows || j === 1 || j === columns) {
        result += "* "
      } else {
        result += "  "
      }
    }
    console.log(result.trimEnd())
  }
}

nestedLoop(5)
