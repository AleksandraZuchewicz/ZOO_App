let zooSingleton;
let Animals;
let Employees;
let Items;

let getAnimalsHandler = (req, res, next) => {
  res.json(zooSingleton.getAnimals());
};
let deleteAnimalHandler = (req, res, next) => {
  res.json(zooSingleton.removeAnimal(req.params.id));
};
let getOneAnimalHandler = (req, res, next) => {
  res.json(zooSingleton.getOneAnimal(req.params.id));
};
let getOneEmployeeHandler = (req, res, next) => {
  res.json(zooSingleton.getOneEmployee(req.params.id));
};
let deleteRemoveEmployeeHandler = (req, res, next) => {
  res.json(zooSingleton.removeEmployee(req.params.id));
};
let getFeedAnimalByEmployeeHandler = (req, res, next) => {
  let feederId = req.params.idEmployee;
  let feeder = zooSingleton.getOneEmployee(feederId);
  let animalId = req.params.idAnimal;
  let animal = zooSingleton.getOneAnimal(animalId);
  feeder.feed(animal);
  res.json(animal);
};
let postNewAnimalHandler = (req, res, next) => {
  const reqAnimal = req.body;
  let newAnimal = new Animals[reqAnimal.kind](reqAnimal.name);
  zooSingleton.addAnimal(newAnimal);
  res.json(newAnimal);
};
let postNewEmployee = (req, res, next) => {
  const reqEmployee = req.body;
  let newEmployee = new Employees[reqEmployee.role](reqEmployee.name);
  zooSingleton.addEmployee(newEmployee);
  res.json(newEmployee);
};
let getEmployeeHandler = (req, res, next) => {
  res.json(zooSingleton.getEmployees());
};
let getEventsHandler = (req, res, next) => {
  res.json(zooSingleton.getEvents());
};
let getTrainAnimalByEmployeeHandler = (req, res, next) => {
  let trainerId = req.params.idEmployee;
  let trainer = zooSingleton.getOneEmployee(trainerId);
  let animalId = req.params.idAnimal;
  let animal = zooSingleton.getOneAnimal(animalId);
  let trick = req.params.trick;
  trick = trick.toLowerCase();
  trainer.train(animal, trick);
  res.json(animal);
};
let getTricksHandler = (req, res, next) => {
  res.json(Items.TRICK_NAMES);
};
module.exports = function(zoo, animals, employees, items) {
  zooSingleton = zoo;
  Animals = animals;
  Employees = employees;
  Items = items;
  return {
    getAnimalsHandler: getAnimalsHandler,
    deleteAnimalHandler: deleteAnimalHandler,
    getOneAnimalHandler: getOneAnimalHandler,
    getOneEmployeeHandler: getOneEmployeeHandler,
    deleteRemoveEmployeeHandler: deleteRemoveEmployeeHandler,
    getFeedAnimalByEmployeeHandler: getFeedAnimalByEmployeeHandler,
    postNewAnimalHandler: postNewAnimalHandler,
    postNewEmployee: postNewEmployee,
    getEmployeeHandler: getEmployeeHandler,
    getEventsHandler: getEventsHandler,
    getTrainAnimalByEmployeeHandler: getTrainAnimalByEmployeeHandler,
    getTricksHandler: getTricksHandler
  };
};
