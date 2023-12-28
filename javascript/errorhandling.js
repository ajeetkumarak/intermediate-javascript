console.log(". . . . Error Handling & Try Catch in javascript . .  .")


// pretend this is coming from server
let aj = "Ajeet Bhai"
aj = undefined
if (aj !=undefined){

    throw new Error('This is not undefined')
    console.log('This is not undefined')
}
else{
    console.log('This is undefined')
}


try {
    // sfhghkhgfghjklkjhgfdssdfghnbvcx
    null.console
    console.log("we are inside try block")
    functionharry()

} catch (error) {
    console.log("Are you okay(there is error)?")
    console.log(error)
    console.log(error.name)
    console.log(error.message)
}
finally{
    console.log('finally We Will Run This')
}
console.log(`
ReferenceError. ...
SyntaxError. ...
TypeError. ...
URIError. ...
EvalError. ...
InternalError.`)



let content = document.getElementById("content")
let h1 = document.createElement("h1")
h1.className = "bg-primary mt-3",
h1.innerText="Errors in Js"
content.appendChild(h1)
console.log(content)
console.log(h1)

let newdiv = document.createElement("div")
newdiv.innerText =`
ReferenceError. ...
SyntaxError. ...
TypeError. ...
URIError. ...
EvalError. ...
InternalError.`
console.log(content)
content.append(newdiv)
