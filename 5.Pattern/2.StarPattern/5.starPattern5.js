//Inverted Right Angled Triangle
/*
 *****
 ****
 ***
 **
 *
 */

const starPattern = lines => {
  for (let i = lines; i >= 1; i--) {
    const stars = "*".repeat(i)

    console.log(stars)
  }
}

starPattern(5)
