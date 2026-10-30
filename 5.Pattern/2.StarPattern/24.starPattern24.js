/*
* * * * * * * * * 
__*           * 
____*       *
______*   *
________*
______*   * 
____*       *
__*           *
* * * * * * * * *
 */

const starPattern = lines => {
  //Upper Half
  for (let i = lines; i >= 1; i--) {
    let result = ""
    if (i === lines) {
      result = "* ".repeat(2 * i - 1).trimEnd()
    } else {
      result = "  ".repeat(lines - i) + "*"
      if (i > 1) {
        result += " ".repeat(4 * (i - 1) - 1) + "*"
      }
    }

    console.log(result)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    let result = ""
    if (i === lines) {
      result = "* ".repeat(2 * i - 1).trimEnd()
    } else {
      result = "  ".repeat(lines - i) + "*"
      if (i < lines) {
        result += " ".repeat(4 * (i - 1) - 1) + "*"
      }
    }
    console.log(result)
  }
}

starPattern(5)
