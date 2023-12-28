console.log("We are back after a long time");
console.log(`
promise : this is used in substitute of callback function
          reject    or    resolve    or     pending
`);

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("function : Your promise has been resolved.");
        resolve();
      } else {
        console.log(" function : Your promise has not been resolved.");
        reject("sorry not fulfilled");
      }
    }, 2000);
  });
}
func1()
  .then(function () {
    console.log("Ajeet : thanks for resolving");
  })
  .catch(function (error) {
    console.log("Ajeet : Very bad bro. Reason: " + error);
  });

const students = [
  { name: "harry", subject: "computer science" },
  { name: "Ajeet", subject: "javascript" },
];

function enrollStudent(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 5000);
}
function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });

    document.getElementById("students").innerHTML = str;
    console.log("Students have been feched");
  }, 1000);
}

let newStudent = { name: "Sunny", Subject: "JAvascript" };
enrollStudent(newStudent, getStudents);
// getStudents()
