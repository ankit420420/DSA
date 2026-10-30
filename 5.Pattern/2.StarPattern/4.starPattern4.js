//Right Angled Triangle
/*
 *
 **
 ***
 ****
 *****
 */

const starPattern = lines => {
  for (let i = 1; i <= lines; i++) {
    const stars = "*".repeat(i)

    console.log(stars)
  }
}

starPattern(5)
