//Inverted Right Angled Triangle
/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
 */

//Single Loop
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    const result = Array.from({ length: i }, (_ele, i) => i + 1).join(" ")

    console.log(result)
  }
}

singleLoop(5)

console.log("============================")

//Nested Loops
const nestedLoops = lines => {
  for (let i = lines; i >= 1; i--) {
    let result = ""

    for (let j = 1; j <= i; j++) {
      result += j + " "
    }

    console.log(result.trimEnd())
  }
}

nestedLoops(5)
