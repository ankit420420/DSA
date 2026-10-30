/*
1
_1 2
__1 2 3
___1 2 3 4
____1 2 3 4 5
*/

//Single Loop
const singleLoop = lines => {
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(i - 1)
    const numbers = [...Array(i)].map((_ele, i) => i + 1).join(" ")

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

    for (let j = 1; j < i; j++) {
      spaces += " "
    }

    for (let k = 1; k <= i; k++) {
      numbers += k + " "
    }

    console.log(`${spaces}${numbers.trimEnd()}`)
  }
}

nestedLoops(5)
