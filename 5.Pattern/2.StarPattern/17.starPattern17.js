/*
* * * * * * * * * 
__*           * 
____*       *
______*   *
________*
 */

//single loop
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    let result = ""
    if (i === lines) {
      result = "* ".repeat(2 * i - 1).trimEnd()
    } else {
      result = "  ".repeat(lines - i) + "*"
      if (i > 1) {
        result += " ".repeat((i - 1) * 4 - 1) + "*"
      }
    }
    console.log(result)
  }
}

singleLoop(5)

console.log("============================")

//Using nested loop
const nestedLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    let result = ""
    if (i === lines) {
      for (let j = 1; j < 2 * i; j++) {
        result += "* "
      }
    } else {
      for (let j = 1; j <= (lines - i) * 2; j++) {
        result += " "
      }
      result += "*"
      if (i > 1) {
        for (let k = 1; k <= (i - 1) * 4 - 1; k++) {
          result += " "
        }
        result += "*"
      }
    }
    console.log(result)
  }
}

nestedLoop(5)
