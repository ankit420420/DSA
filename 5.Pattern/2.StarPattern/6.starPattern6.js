//Filled Half Diamond
/*
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
 */

const starPattern = lines => {
  //Upper Half
  for (let i = 1; i <= lines; i++) {
    const stars = "*".repeat(i)

    console.log(stars)
  }

  //Lower Half
  for (let j = lines - 1; j >= 1; j--) {
    const stars = "*".repeat(j)

    console.log(stars)
  }
}

starPattern(5)
