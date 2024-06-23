let obj = {
  name: "Tarun",
  age: 22,
  rollNo: 52002,
};

function check(prop) {
  return obj.hasOwnProperty(prop);
}

// False
console.log(check("nam"));

// True
console.log(check("name"));
