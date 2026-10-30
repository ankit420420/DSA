/*
____1
___12
__123
_1234
12345
*/

//Single Loop
const singleLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join("")

    console.log(`${spaces}${numbers}`)
  }
}

singleLoop(5)

console.log("============================")

//Nested Loops
const nestedLoops = lines => {
  for (let i = 1; i <= lines; i++) {
    let spaces = ""
    let numbers = ""

    for (let j = 1; j <= lines - i; j++) {
      spaces += " "
    }

    for (let k = 1; k <= i; k++) {
      numbers += k
    }

    console.log(`${spaces}${numbers}`)
  }
}

nestedLoops(5)
