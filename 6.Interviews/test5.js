var result = []

for (var i = 0; i < 10; i++) {
  result.push(function () {
    return i
  })
}

console.log(result[1]())
