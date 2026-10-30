/*
____* * * * *
___* * * * *
__* * * * *
_* * * * *
* * * * *
 */

const starPattern = lines => {
  for (let i = lines; i >= 1; i--) {
    const spaces = " ".repeat(i - 1)
    const stars = "* ".repeat(lines).trimEnd()

    console.log(spaces + stars)
  }
}

starPattern(5)
