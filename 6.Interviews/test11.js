function counter() {
  let count = 0

  return () => ++count
}

const c = counter()

console.log(c()) // 1
console.log(c()) // 2
