/*
____*
___* *
__*   *
_*     *
*       *
*/

//single loop
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    let result = " ".repeat(i - 1) + "*"
    if (i < lines) {
      // const counter = lines - i + 1
      // result += " ".repeat(2 * counter - 3) + "*"
      result += " ".repeat(2 * (lines - i) - 1) + "*"
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
    for (let j = i; j > 1; j--) {
      result += " "
    }
    result += "*"
    if (i < lines) {
      // const counter = lines - i + 1
      // for (let k = 1; k <= 2 * counter - 3; k++) {
      for (let k = 1; k <= 2 * (lines - i) - 1; k++) {
        result += " "
      }
      result += "*"
    }

    console.log(result)
  }
}

nestedLoop(5)
