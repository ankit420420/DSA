/*
____*
___**
__***
_****
*****
_****
__***
___**
____*
*/

const starPattern = lines => {
  //Upper Half
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(lines - i)
    const stars = "*".repeat(i)

    console.log(spaces + stars)
  }

  //Lower Half
  for (let i = lines - 1; i >= 1; i--) {
    const spaces = " ".repeat(lines - i)
    const stars = "*".repeat(i)

    console.log(spaces + stars)
  }
}

starPattern(5)
