/*
1 2 3 4 5
_1 2 3 4
__1 2 3
___1 2
____1
*/

//Single Loop
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join(" ")

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

    for (j = 1; j <= lines - i; j++) {
      spaces += " "
    }

    for (k = 1; k <= i; k++) {
      numbers += k + " "
    }

    console.log(`${spaces}${numbers.trimEnd()}`)
  }
}

nestedLoops(5)
