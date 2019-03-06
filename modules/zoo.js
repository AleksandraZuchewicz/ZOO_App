let Event;
class ZOO {
  constructor(name) {
    this.name = name;
    this.animals = [];
    this.employees = [];
    this.events = [];
  }
  addAnimal(animal) {
    this.animals.push(animal);
  }
  removeAnimal(animalId) {
    for (let i = 0; i < this.animals.length; i++) {
      let currentAnimal = this.animals[i];
      if (currentAnimal.id == animalId) {
        currentAnimal = this.animals.splice(i, 1);
        let removedAnimal = new Event(
          currentAnimal.kind +
            " named " +
            currentAnimal.name +
            " has been removed from ZOO."
        );
        removedAnimal.emit();
        return currentAnimal;
      }
    }
    return null;
  }
  getAnimals() {
    return this.animals;
  }
  getOneAnimal(id) {
    for (let i = 0; i < this.animals.length; i++) {
      let currentAnimal = this.animals[i];
      if (currentAnimal.id == id) {
        return currentAnimal;
      }
    }
    return null;
  }
  getOneEmployee(id) {
    for (let i = 0; i < this.employees.length; i++) {
      let currentEmplyee = this.employees[i];
      if (currentEmplyee.id == id) {
        return currentEmplyee;
      }
    }
    return this.employees[id];
  }
  getEvents() {
    return this.events;
  }
  getEmployees() {
    return this.employees;
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  removeEmployee(employeeId) {
    for (let i = 0; i < this.employees.length; i++) {
      let currentEmployee = this.employees[i];
      if (currentEmployee.id == employeeId) {
        currentEmployee = this.employees.splice(i, 1);
        let removedEmployee = new Event(
          currentEmployee.role +
            " named " +
            currentEmployee.name +
            " has been removed from ZOO."
        );
        removedEmployee.emit();
        return currentEmployee;
      }
    }
    return null;
  }
  showEmployees() {}
  _makeHungry() {
    const self = this;
    this.getAnimals().forEach(function(animal, index, animals) {
      animal.hunger--;
      if (animal.hunger < 0) {
        self.removeAnimal(animal);
        let deadAnimal = new Event(
          animal.kind + " named " + animal.name + " died from hunger."
        );
        deadAnimal.emit();
      }
    });
  }
  initialize(event) {
    Event = event;
    setInterval(this._makeHungry.bind(this), 1 * 10 * 1000);
  }
}
module.exports = ZOO;
