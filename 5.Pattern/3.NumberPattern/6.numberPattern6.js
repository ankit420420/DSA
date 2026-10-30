//Filled Half Diamond
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
 */

//2 Loops
const numberPattern = lines => {
  //Upper Half
  for (let i = 1; i <= lines; i++) {
    const result = Array.from({ length: i }, (_ele, i) => i + 1).join(" ")

    console.log(result)
  }

  //Lower Half
  for (let j = lines - 1; j >= 1; j--) {
    const result = Array.from({ length: j }, (_ele, i) => i + 1).join(" ")

    console.log(result)
  }
}

numberPattern(5)

console.log("============================")

//Single Loop (Optimized and Best Approach)
const numberPatternDistanceFromCentre = lines => {
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    const counter = i <= mid ? i : rows - i + 1
    const result = Array.from({ length: counter }, (_ele, i) => i + 1).join(" ")

    console.log(result)
  }
}

numberPatternDistanceFromCentre(5)

console.log("============================")

//Nested Loops
const numberPatternDistanceFromCentreNestedLoops = lines => {
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    let result = ""

    const counter = i <= mid ? i : rows - i + 1
    for (let k = 1; k <= counter; k++) {
      result += k + " "
    }

    console.log(result.trimEnd())
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
