//Half Diamond
/*
1
_1 2
__1 2 3
___1 2 3 4
____1 2 3 4 5
___1 2 3 4
__1 2 3
_1 2
1
*/

//2 Loops
const numberPattern = lines => {
  //Uppers Half
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(i - 1)
    const numbers = [...Array(i)].map((_ele, i) => i + 1).join(" ")

    console.log(`${spaces}${numbers}`)
  }

  //Lower Half
  for (let j = lines - 1; j >= 1; j--) {
    const spaces = " ".repeat(j - 1)
    const numbers = [...Array(j)].map((_ele, i) => i + 1).join(" ")

    console.log(`${spaces}${numbers}`)
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
    const spaces = " ".repeat(mid - dist - 1)

    const counter = mid - dist
    const numbers = [...Array(counter)].map((_ele, i) => i + 1).join(" ")

    console.log(`${spaces}${numbers}`)
  }
}

numberPatternDistanceFromCentre(5)

//Another Approach
// const numberPatternDistanceFromCentre = lines => {
//   const rows = 2 * lines - 1
//   const mid = lines

//   for (let i = 1; i <= rows; i++) {
//     const counter = i <= mid ? i : rows - i + 1
//     const spaces = " ".repeat(counter - 1)
//     const numbers = [...Array(counter)].map((_ele, i) => i + 1).join(" ")

//     console.log(`${spaces}${numbers}`)
//   }
// }

// numberPatternDistanceFromCentre(5)
console.log("============================")

//Nested Loops
const numberPatternDistanceFromCentreNestedLoops = lines => {
  const rows = 2 * lines - 1
  const mid = lines

  for (let i = 1; i <= rows; i++) {
    let spaces = ""
    let numbers = ""

    const dist = i <= mid ? mid - i : i - mid
    for (let j = 1; j <= mid - dist - 1; j++) {
      spaces += " "
    }

    const counter = mid - dist
    for (let k = 1; k <= counter; k++) {
      numbers += k + " "
    }

    console.log(`${spaces}${numbers.trimEnd()}`)
  }
}

numberPatternDistanceFromCentreNestedLoops(5)

console.log("============================")

//Another Approach
// const numberPatternDistanceFromCentreNestedLoops = lines => {
//   const rows = 2 * lines - 1
//   const mid = lines

//   for (let i = 1; i <= rows; i++) {
//     let spaces = ""
//     let numbers = ""

//     const counter = i <= mid ? i : rows - i + 1

//     for (let j = 1; j <= counter - 1; j++) {
//       spaces += " "
//     }

//     for (let k = 1; k <= counter; k++) {
//       numbers += k + " "
//     }

//     console.log(`${spaces}${numbers.trimEnd()}`)
//   }
// }

// numberPatternDistanceFromCentreNestedLoops(5)
