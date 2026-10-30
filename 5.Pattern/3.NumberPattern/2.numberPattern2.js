/*
____1 2 3 4 5
___1 2 3 4
__1 2 3
_1 2
1
*/

//Single Loop
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    const spaces = " ".repeat(i - 1)
    const numbers = [...Array(i)].map((_ele, i) => i + 1).join(" ")

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
