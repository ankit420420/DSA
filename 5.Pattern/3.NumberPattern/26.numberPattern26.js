/*
____1 2 3 4 5
___1 2 3 4 5
__1 2 3 4 5
_1 2 3 4 5
1 2 3 4 5
 */

const numberPattern = lines => {
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(lines - i)
    const numbers = Array.from({ length: lines }, (_ele, i) => i + 1).join(" ")

    console.log(`${spaces}${numbers}`)
  }
}

numberPattern(5)
