/*
* * * * *
_* * * *
__* * *
___* *
____*
___* *
__* * *
_* * * *
* * * * *
 */

const starPattern = lines => {
  //Upper Half
  for (let i = lines; i >= 1; i--) {
    let spaces = " ".repeat(lines - i)
    let stars = "* ".repeat(i).trimEnd()

    console.log(spaces + stars)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    let spaces = " ".repeat(lines - i)
    let stars = "* ".repeat(i).trimEnd()

    console.log(spaces + stars)
  }
}

starPattern(5)
