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

let baboonMax = new Animals.Baboon(1, "Baboon", "Max");
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
