console.log(" . . . . . . . Fetch Api in Javascript .. . . . . . .  . ")

// button with id enrollbtn
let enrollbtn = document.getElementById("enrollbtn")

// div with id content
let content = document.getElementById("content")


// *   get Request using fetch Api    .*.*.*.*..*..*.*..*..*...*.*.*...*
// function getData(){
//     console.log("Started getData")


//     url = "ajeet.txt";
//     fetch(url).then((response)=>{
//         console.log(`inside first "then"`)
//         return response.text()

//     }).then((data)=>{
//         console.log(`inside second "then"`)
//         console.log(data)
//     })

// }


// console.log("Before running get Data")
// getData()
// console.log("After running get Data")


function getData(){
    url="https://api.github.com/users"
    fetch(url).then((response)=>{

        // return response.text()
        return response.json()

    }).then((data)=>{
        console.log(data)

    })
}
getData()




// **    Post Request using fetch Api

function postData(){

    url="https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"test","salary":"123","age":"23"}'           // data should be string(anotherwise we use json.stringyfy())                            object should have to be stringyfy but sting does not need to stringyfy
    params = {
        method : 'post',
        headers: {
            'content-Type': 'application/json'
        },
        // body: JSON.stringify(data)      Already data is in  string form
           body: data
    }
    // fetch(url, params).then((response)=>{
    //     return response.json()

    // }).then((data)=>{
    //     console.log(data)

    // })
    fetch(url, params).then(response => response.json())
    .then(data=>console.log(data)
    )
}
postData()
