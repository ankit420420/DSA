//In Build
const palindromeInBuild = num => {
  const str = num.toString()
  const revInBuild = str.split("").reverse().join("")
  return revInBuild === str
}

const resultInBuild = palindromeInBuild(121)

if (resultInBuild) {
  console.log("It is a palindrome")
} else {
  console.log("It is not a palindrome")
}

//user Defined
const palindromeUser = num => {
  let original = num
  let revUser = 0

  while (num > 0) {
    const digit = num % 10
    revUser = revUser * 10 + digit
    num = Math.floor(num / 10)
  }
  return revUser === original
}

const resultUser = palindromeUser(121)

if (resultUser) {
  console.log("It is a palindrome")
} else {
  console.log("It is not a palindrome")
}

const obj = {
  name: "test",
  print: () => {
    console.log(this)
  }
}
