console.log("Count the Number of Key in an Object Using for...in")
const data = {
  name: "Ankit",
  age: 23,
  hobbies: {
    sports: ["cricket"]
  }
}
console.log("data before inheriting proto:", data)

//calculating no of keys in data object
let count = 0
for (let key in data) {
  console.log("hasOwnProperty:", key, data.hasOwnProperty(key))
  ++count
}
console.log("count:", count)

const person = {
  gender: "male"
}
data.__proto__ = person
console.log("data after inheriting proto:", data)

//calculating no of keys in data object
let count1 = 0
for (let key in data) {
  console.log("hasOwnProperty:", key, data.hasOwnProperty(key))
  ++count1
}
console.log("count1:", count1)
//giving
console.log("Object.keys(data):", Object.keys(data))
console.log("Object.getOwnPropertyNames(data):", Object.getOwnPropertyNames(data))

//using hasOwnProperty to check if key is a direct peoperty of data object
console.log("data.__proto__:", data.__proto__)
console.log("data.gender:", data.gender)
console.log("hasOwnProperty-name:", data.hasOwnProperty("name"))
console.log("hasOwnProperty-gender:", data.hasOwnProperty("gender"))

console.log("=================")

console.log("Count the Number of Key in an Object Using Object.key()")
const data1 = {
  name: "Ankit",
  age: 23,
  hobbies: {
    sports: ["cricket"]
  }
}
console.log("data:", data1)
console.log("keys:", Object.keys(data1))
console.log("keyLength:", Object.keys(data1).length)
for (let k in data1) {
  console.log(k)
}

const person1 = {
  gender: "male"
}
data1.__proto__ = person1

console.log("data:", data1)
console.log("keys:", Object.keys(data1))
console.log("keyLength:", Object.keys(data1).length)

for (let k in data1) {
  console.log(k)
}
console.log("Object.entries(data):", Object.entries(data1))

for (let k in data1) {
  if (data.hasOwnProperty(k)) {
    console.log("Own:", k)
  } else {
    console.log("Inherited:", k)
  }
}

Object.defineProperty(person1, "city", {
  value: "lucknow",
  enumerable: false
})
Object.defineProperty(data1, "id", {
  value: 9,
  enumerable: false
})
console.log("=======After Object.defineProperty=======")
for (let k in data1) {
  console.log(k)
}
console.log("data1:", data1)
console.log(Object.getOwnPropertyNames(data1))
console.log(Object.getOwnPropertyDescriptors(data1))
console.log(Object.getOwnPropertyDescriptor(data1, "id"))
console.log(data1.id)
console.log("id" in data1) //true- even if id property is non-enummerable
console.log("gender" in data1)
console.log("city" in data1)
console.log(Object.hasOwn(data1, "id")) //true- even if id property is non-enummerable
console.log(data1.hasOwnProperty("id")) //true- even if id property is non-enummerable
