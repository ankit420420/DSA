function manualTrim(str) {
  let start = 0
  let end = str.length - 1

  // Move start forward while spaces
  while (start <= end && str[start] === " ") {
    start++
  }

  // Move end backward while spaces
  while (end >= start && str[end] === " ") {
    end--
  }

  let result = ""
  for (let i = start; i <= end; i++) {
    result += str[i]
  }

  return result
}
