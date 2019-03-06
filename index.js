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
let HandlersInitializer = require("./modules/handlers.js");
let Handlers = HandlersInitializer(zooSingleton, Animals, Employees, Items);

app.get("/animals", Handlers.getAnimalsHandler);
app.delete("/animals/:id", Handlers.deleteAnimalHandler);
app.get("/animals/:id", Handlers.getOneAnimalHandler);
app.get("/employees/:id", Handlers.getOneEmployeeHandler);
app.delete("/employees/:id", Handlers.deleteRemoveEmployeeHandler);
app.get(
  "/employees/:idEmployee/feed/:idAnimal",
  Handlers.getFeedAnimalByEmployeeHandler
);
app.post("/animals", Handlers.postNewAnimalHandler);
app.post("/employees", Handlers.postNewEmployee);
app.get("/employees", Handlers.getEmployeeHandler);
app.get("/events", Handlers.getEventsHandler);
app.get(
  "/employees/:idEmployee/train/:trick/:idAnimal",
  Handlers.getTrainAnimalByEmployeeHandler
);
app.get("/tricks", Handlers.getTricksHandler);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
