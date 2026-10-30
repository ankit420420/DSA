const a = [1, 2, 3, 4, 2, 3, 6, 7, 8, 5, 6]
const b = [1, 4, 6, 7]

//sorting the filtered array and then storing in set
const c = [...new Set(a.filter((x, i) => b.indexOf(x) !== -1).sort())]
const d = new Set(a.filter((x, i) => b.indexOf(x) !== -1).sort())

//creating an array from set and the sorting
const e = Array.from(new Set(a.filter((x, i) => b.indexOf(x) !== -1))).sort()

//sorting a set using user defined function
const f = sortSet(new Set(a.filter((x, i) => b.indexOf(x) !== -1)))
function sortSet(set) {
  const entries = []
  for (const ele of set) {
    entries.push(ele)
  }
  set.clear()

  for (const ele of entries.sort()) {
    set.add(ele)
  }
  return set
}

console.log(c)
console.log(d)
console.log(e)
console.log(f)
