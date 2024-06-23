let carDetails = {
  make: "BMW",
  model: "BMW 7",
  year: 2018,
};

function carDetailsProp(car) {
  for (let property in car) {
    console.log(`${property} : ${car[property]}`);
  }
}
carDetailsProp(carDetails);
