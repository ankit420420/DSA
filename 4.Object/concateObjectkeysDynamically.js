const obj = {
  name: "ankit",
  age: 31,
  gender: "Male",
  country: "India"
}

const concatKeys = (obj, base = ":method :url :staus :resoponse-time") => {
  const concatedKeys = Object.keys(obj)
    .map(key => `:${key}`)
    .join(" ")

  return `${base} ${concatedKeys}`
}

const result = concatKeys(obj)
console.log(result)
