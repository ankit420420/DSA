/*
____1
___1 2
__1 2 3
_1 2 3 4
1 2 3 4 5
*/

//Single Loop
const singleLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: i }, (_ele, i) => i + 1).join(" ")

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

    for (let j = i; j < lines; j++) {
      spaces += " "
    }

    for (let k = 1; k <= i; k++) {
      numbers += k + " "
    }

    console.log(`${spaces}${numbers.trimEnd()}`)
  }
}

nestedLoops(5)
