/*
1 2 3 4 5 6 7 8 9
__1 2 3 4 5 6 7 
____1 2 3 4 5
______1 2 3
________1
 */

//Single Loop
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    const spaces = "  ".repeat(lines - i)
    const numbers = Array.from({ length: 2 * i - 1 }, (_ele, i) => i + 1).join(" ")

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

    for (let j = 1; j <= 2 * (lines - i); j++) {
      spaces += " "
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      numbers += k + " "
    }

    console.log(`${spaces}${numbers.trimEnd()}`)
  }
}

nestedLoops(5)
