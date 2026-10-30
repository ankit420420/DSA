/*
*       *
_*     *
__*   *
___* *
____*
___* *
__*   *
_*     *
*       *
 */

const starPattern = lines => {
  //Upper Half
  for (let i = 1; i <= lines; i++) {
    let result = " ".repeat(i - 1) + "*"
    if (i < lines) {
      result += " ".repeat(2 * (lines - i) - 1) + "*"
    }

    console.log(result)
  }

  //Lower Half
  for (let i = lines - 1; i >= 1; i--) {
    let result = " ".repeat(i - 1) + "*"
    // result += " ".repeat(2 * (lines - i + 1) - 3) + "*"
    result += " ".repeat(2 * (lines - i) - 1) + "*"

    console.log(result)
  }
}

starPattern(5)
