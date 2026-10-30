//Hollow Diamond
/*
____*
___* *
__*   *
_*     *
*       *
_*     *
__*   *
___* *
____*
*/

const starPattern = lines => {
  //Uppers Half
  for (let i = lines; i >= 1; i--) {
    let result = " ".repeat(i - 1) + "*"
    if (i < lines) {
      // const counter = lines - i + 1
      // result += " ".repeat(2 * counter - 3) + "*"
      result += " ".repeat(2 * (lines - i) - 1) + "*"
    }

    console.log(result)
  }

  //Lower Half
  for (let i = 2; i <= lines; i++) {
    let result = " ".repeat(i - 1) + "*"
    if (i < lines) {
      result += " ".repeat(2 * (lines - i) - 1) + "*"
    }
    console.log(result)
  }
}

starPattern(5)
