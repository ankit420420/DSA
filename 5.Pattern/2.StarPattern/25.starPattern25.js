/*
* * * * * * * * * 
__* * * * * * * 
____* * * * *
______* * *
________*
______* * * 
____* * * * *
__* * * * * * *
* * * * * * * * *
 */

const starPattern = lines => {
  //Upper Half
  for (let i = lines; i >= 1; i--) {
    const spaces = "  ".repeat(lines - i)
    const stars = "* ".repeat(2 * i - 1).trimEnd()

    console.log(spaces + stars)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    const spaces = "  ".repeat(lines - i)
    const stars = "* ".repeat(2 * i - 1).trimEnd()

    console.log(spaces + stars)
  }
}

starPattern(5)
