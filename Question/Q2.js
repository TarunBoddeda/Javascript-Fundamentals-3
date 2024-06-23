let student = {
  name: "Tarun",
  age: 22,
  grade: "C",
};

function changeGrade(grade) {
  student.grade = grade;
}

changeGrade("A");
console.log(student);
