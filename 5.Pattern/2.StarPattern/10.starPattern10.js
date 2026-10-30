/*
____*
___* *
__* * *
_* * * *
* * * * *
*/

//single loop
const singleLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(lines - i)
    const stars = "* ".repeat(i).trimEnd()

    console.log(spaces + stars)
  }
}

singleLoop(5)

console.log("============================")

//Using nested loop
const nestedLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    let result = ""
    for (j = 1; j <= lines - i; j++) {
      result += " "
    }
    for (k = 1; k <= i; k++) {
      result += "* "
    }

    console.log(result.trimEnd())
  }
}

nestedLoop(5)
