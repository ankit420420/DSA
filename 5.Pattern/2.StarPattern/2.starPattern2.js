/*
____*****
___****
__***
_**
*
*/

//Using single loop (Preffered due to usage of single loop and repeat to string of length n)
const singleLoop = lines => {
  for (let i = lines; i >= 1; i--) {
    const spaces = " ".repeat(i - 1)
    const stars = "*".repeat(i)

    console.log(spaces + stars)
  }
}

singleLoop(5)

console.log("============================")

//Using nested loop
const nestedLoop = lines => {
  for (let i = lines; i >= 1; i--) {
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
