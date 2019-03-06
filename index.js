var express = require("express");
var app = express();
app.use(express.json());
let ZOO = require("./modules/zoo.js");
let zooSingleton = new ZOO("Wrocławskie Zoo");
let EventInitializer = require("./modules/event.js");
let Event = EventInitializer(zooSingleton);
zooSingleton.initialize(Event);
let AnimalsInitializer = require("./modules/animals.js");
let Animals = AnimalsInitializer(Event);
let ItemsInitializer = require("./modules/items.js");
let Items = ItemsInitializer(Event);
let EmployeesInitializer = require("./modules/employees.js");
let Employees = EmployeesInitializer(Items, Animals);

let baboonMax = new Animals.Baboon(1, "Max");
zooSingleton.addAnimal(baboonMax);
baboonMax.eat(Items.FRUITS.BANANA);
let trainerMark = new Employees.Trainer(1, "Mark");
trainerMark.train(baboonMax, Items.TRICK_NAMES.HOP);
baboonMax.hop();
let feederTom = new Employees.Feeder(1, "Tom");
console.log(zooSingleton.animals);
console.log(zooSingleton.events);

setTimeout(function() {
  console.log(zooSingleton.getAnimals());
}, 15 * 1000);
setTimeout(function() {
  feederTom.feed(baboonMax);
  console.log(zooSingleton.getAnimals());
  console.log(zooSingleton.events);
}, 16 * 1000);

app.get("/animals", (req, res, next) => {
  res.json(zooSingleton.getAnimals());
});
app.delete("/animals/:id", (req, res, next) => {
  res.json(zooSingleton.removeAnimal(req.params.id));
});
app.get("/animals/:id", (req, res, next) => {
  res.json(zooSingleton.getOneAnimal(req.params.id));
});
app.get("/employees/:id", (req, res, next) => {
  res.json(zooSingleton.getOneEmployee(req.params.id));
});
app.delete("/employees/:id", (req, res, next) => {
  res.json(zooSingleton.removeEmployee(req.params.id));
});
app.get("/employees/:idEmployee/feed/:idAnimal", (req, res, next) => {
  let feederId = req.params.idEmployee;
  let feeder = zooSingleton.getOneEmployee(feederId);
  let animalId = req.params.idAnimal;
  let animal = zooSingleton.getOneAnimal(animalId);
  feeder.feed(animal);
  res.json(animal);
});
app.post("/animals", (req, res, next) => {
  const reqAnimal = req.body;
  let newAnimal = new Animals[reqAnimal.kind](reqAnimal.id, reqAnimal.name);
  zooSingleton.addAnimal(newAnimal);
  res.json(newAnimal);
  //console.log(req.body);
});
app.post("/employees", (req, res, next) => {
  const reqEmployee = req.body;
  let newEmployee = new Employees[reqEmployee.role](
    reqEmployee.id,
    reqEmployee.name
  );
  zooSingleton.addEmployee(newEmployee);
  res.json(newEmployee);
});
app.get("/employees", (req, res, next) => {
  res.json(zooSingleton.getEmployees());
});
app.get("/events", (req, res, next) => {
  res.json(zooSingleton.getEvents());
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
