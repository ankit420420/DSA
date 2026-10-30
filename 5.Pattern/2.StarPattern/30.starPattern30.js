/*
__*__
__*__
*****
__*__
__*__
 */

const starPattern = lines => {
  for (let i = 1; i <= lines; i++) {
    const mid = Math.floor((lines + 1) / 2)
    let result = ""

    if (i === mid) {
      result = "*".repeat(lines)
    } else {
      result = " ".repeat(mid - 1) + "*" + " ".repeat(mid - 1)
    }

    console.log(result)
  }
}

starPattern(5)
