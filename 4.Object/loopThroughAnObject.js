const student = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"]
  //   hobbies: {
  //     sports: ["cricket"]
  //   }
}

const person = {
  gender: "male"
}

// inheriting property
student.__proto__ = person
console.log("student:", student)

for (let key in student) {
  console.log("key:", key)
  console.log("key-value:", key + " - " + student[key])
}
