/*
 **********
 ****  ****
 ***    ***
 **      **
 *        *
 **      **
 ***    ***
 ****  ****
 **********
 */

const starPattern = lines => {
  //Upper Half
  for (let i = lines; i >= 1; i--) {
    let result = "*".repeat(i)
    result += "  ".repeat(lines - i)
    result += "*".repeat(i)

    console.log(result)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    let result = "*".repeat(i)
    result += "  ".repeat(lines - i)
    result += "*".repeat(i)

    console.log(result)
  }
}

starPattern(5)
