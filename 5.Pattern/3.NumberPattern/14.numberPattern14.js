/*
12345
_1234
__123
___12
____1
*/

//Single Loop
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join("")

    console.log(`${spaces}${numbers}`)
  }
}

singleLoop(5)

console.log("============================")

//Nested Loops
const nestedLoops = lines => {
  for (let i = lines; i >= 1; i--) {
    let spaces = ""
    let numbers = ""

    for (let j = lines; j > i; j--) {
      spaces += " "
    }

    for (let k = 1; k <= i; k++) {
      numbers += k
    }

    console.log(`${spaces}${numbers}`)
  }
}

nestedLoops(5)
