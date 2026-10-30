/*
*       *
_*     *
__*   *
___* *
____*
*/

//single loop
const singleLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    let result = " ".repeat(i - 1) + "*"
    if (i < lines) {
      result += " ".repeat(2 * (lines - i) - 1) + "*"
    }

    console.log(result)
  }
}

singleLoop(5)

console.log("============================")

//Using nested loop
const nestedLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    let result = ""
    for (j = 1; j < i; j++) {
      result += " "
    }
    result += "*"
    if (i < lines) {
      for (k = 1; k <= 2 * (lines - i) - 1; k++) {
        result += " "
      }
      result += "*"
    }

    console.log(result)
  }
}

nestedLoop(5)
