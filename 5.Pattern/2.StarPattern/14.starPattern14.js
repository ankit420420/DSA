/*
*****
_****
__***
___**
____*
*/

//single loop
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    const spaces = " ".repeat(lines - i)
    const stars = "*".repeat(i)

    console.log(spaces + stars)
  }
}

singleLoop(5)

console.log("============================")

//Using nested loop
const nestedLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    let result = ""
    for (let j = 1; j <= lines - i; j++) {
      result += " "
    }
    for (let k = 1; k <= i; k++) {
      result += "*"
    }

    console.log(result)
  }
}

nestedLoop(5)
