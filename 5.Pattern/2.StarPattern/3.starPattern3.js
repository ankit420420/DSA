//Half Diamond
/*
*
_**
__***
___****
____*****
___****
__***
_**
*
*/

//Using single loop (Preffered due to usage of single loop and repeat to string of length n)
const singleLoop = lines => {
  //Uppers Half
  for (let i = 1; i <= lines; i++) {
    const spaces = " ".repeat(i - 1)
    const stars = "*".repeat(i)

    console.log(spaces + stars)
  }

  //Lower Half
  for (let j = lines - 1; j >= 1; j--) {
    const spaces = " ".repeat(j - 1)
    const stars = "*".repeat(j)

    console.log(spaces + stars)
  }
}

singleLoop(5)

console.log("============================")

//Using nested loop
const nestedLoop = lines => {
  //Upper Half
  for (let i = 1; i <= lines; i++) {
    let result = ""
    for (let j = 1; j < i; j++) {
      result += " "
    }
    for (let k = 1; k <= i; k++) {
      result += "*"
    }

    console.log(result)
  }

  //Lower Half
  for (let i = lines - 1; i >= 1; i--) {
    let result = ""
    for (let j = 1; j < i; j++) {
      result += " "
    }
    for (let k = 1; k <= i; k++) {
      result += "*"
    }

    console.log(result)
  }
}

nestedLoop(5)
