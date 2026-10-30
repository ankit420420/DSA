/*
________* 
______* * * 
____* * * * *
__* * * * * * *
* * * * * * * * *
 */

//single loop
const singleLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    const spaces = "  ".repeat(lines - i)
    const stars = "* ".repeat(2 * i - 1).trimEnd()

    console.log(spaces + stars)
  }
}

singleLoop(5)

console.log("============================")

//Using nested loop
const nestedLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    let result = ""

    for (let j = 1; j <= (lines - i) * 2; j++) {
      result += " "
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += "* "
    }

    console.log(result.trimEnd())
  }
}

nestedLoop(5)
