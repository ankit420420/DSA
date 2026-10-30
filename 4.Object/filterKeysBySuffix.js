const obj = {
  apiname_dev: "dev-api",
  db_dev: "dev-db",
  apiname_prod: "prod-api",
  db_prod: "prod-db"
}

const filterKey = "prod"

// Using direct propery access
const apiname = obj[`apiname_${filterKey}`]
const db = obj[`db_${filterKey}`]
console.log({ apiname, db })

// Using computed property names
const { [`apiname_${filterKey}`]: apiname1, [`db_${filterKey}`]: db1 } = obj
console.log({ apiname1, db1 })

// Using Object.entries+filter+map+Obejct.fromEntries
const { apiname: apiname2, db: db2 } = Object.fromEntries(
  Object.entries(obj)
    .filter(([key]) => key.endsWith(filterKey))
    .map(([key, value]) => [key.replace(`_${filterKey}`, ""), value])
)
console.log({ apiname2, db2 })
