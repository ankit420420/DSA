/*
12345
1234
123
12
1
12
123
1234
12345
 */

//2 Loops
const numberPattern = lines => {
  //Upper Half
  for (let i = lines; i >= 1; i--) {
    const result = Array.from({ length: i }, (_ele, i) => i + 1).join("")

    console.log(result)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    const result = Array.from({ length: i }, (_ele, i) => i + 1).join("")

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
    const dist = Math.abs(mid - i)
    const result = Array.from({ length: dist + 1 }, (_ele, i) => i + 1).join("")

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

    const dist = i <= mid ? mid - i : i - mid

    for (let j = 1; j <= dist + 1; j++) {
      result += j
    }

    console.log(result.trimEnd())
  }
}

numberPatternDistanceFromCentreNestedLoops(5)
