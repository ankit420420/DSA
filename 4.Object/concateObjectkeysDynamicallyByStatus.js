const obj = {
  name: {
    value: "ankit",
    status: true
  },
  age: {
    value: 31,
    status: true
  },
  gender: {
    value: "Male",
    status: false
  },
  country: {
    value: "India",
    status: true
  }
}

const concatKeys = (obj, base = ":method :url :staus :resoponse-time") => {
  const concatedKeys = Object.entries(obj)
    .filter(([_, config]) => config.status)
    .map(([key]) => `:${key}`)
    .join(" ")
  return `${base} ${concatedKeys}`
}

const result = concatKeys(obj)
console.log(result)
