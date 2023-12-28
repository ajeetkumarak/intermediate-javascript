const students = [
  { name: "harry", subject: "computer science" },
  { name: "Ajeet", subject: "javascript" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
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
enrollStudent(newStudent)
  .then(function () {
    getStudents();
  })
  .catch(function () {
    console.log("Some error occured.");
  });
// getStudents()
