console.log(". . . . *. . . . Async / Await . . . . .* . . . ");

// function ajeet(){
//     return "Ajeet"
// }
// console.log(ajeet())
// let aj = ajeet()
// console.log(aj)


// async function harry(){
//     console.log("inside Harry function")
//     return "Harry"
// }

// console.log(`before calling Harry`)
// let sir = harry()
// console.log(`After calling Harry`)
// console.log(sir)
// console.log("Last line of function code")





async function harry(){
        console.log("inside Harry function")
        const response = await fetch('https://api.github.com/users')
        console.log("before response")

        const users = await response.json()
        console.log("Users resolved")
        return users



        // return "Harry"
    }
    
    console.log(`before calling Harry`)
    let sir = harry()
    console.log(`After calling Harry`)
    console.log(sir)
    sir.then(data => console.log(data))
    console.log("Last line of function code")
    