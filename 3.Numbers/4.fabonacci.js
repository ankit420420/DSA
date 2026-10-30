const fabonacci = num => {
  const arr = [0, 1]

  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr
}

console.log(fabonacci(5))

const f1 = n => {
  if (n < 2) {
    return n
  } else {
    return f1(n - 1) + f1(n - 2)
  }
}
const f = num => {
  const r = []
  for (let i = 0; i < num; i++) {
    // r.push(f1(i))
    if (i < 2) {
      r.push(i)
    } else {
      r.push(f(i - 1) + f(i - 2))
    }
  }
  return r
}
console.log(f(5))
