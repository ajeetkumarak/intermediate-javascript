console.log("We here to learn about Callback functions");

// callback functions are actually are functions inside functions
// callback functions can be synchronous as well as asynchronous
// foreach function is synchronous 
// settimeout function & xhr argument are asynchronous


// pretend that this response is coming from the server
const students=[
    {name :"Harry", subject:"computer science"},
    {name :"Ajeet", subject:"Machine learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled")
        callback();
    }, 1000);
}
function getStudents(){
    setTimeout(function()  {
        let str = "";
        students.forEach(function(student){
             str += `<li>${student.name}</li>`
        })

        document.getElementById("students").innerHTML = str;
        console.log("Students have been feched")
    }, 3000);
}


let newStudent = {name:"Sunny", Subject:"JAvascript"}
enrollStudent(newStudent, getStudents);
getStudents()