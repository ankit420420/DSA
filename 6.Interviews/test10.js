// Modify below code to retun 'Ankit'
// function server(){
//     setTimeout(()=>{
//         const response="Ankit"
//         resolve(response)
//     },1000)
// }

//  function client(){
//     const response= server()
//     console.log(response)
// }

function server() {
  return new Promise(resolve => {
    setTimeout(() => {
      const response = "Ankit"
      resolve(response)
    }, 1000)
  })
}

async function client() {
  const response = await server()
  console.log(response)
}

client()
