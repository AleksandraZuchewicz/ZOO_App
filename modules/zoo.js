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
  removeAnimal(animal) {}
  getAnimals() {
    return this.animals;
  }
  addEmployee(employee) {}
  removeEmployee(employee) {}
  showEmployees() {}
  _makeHungry() {
    this.getAnimals().forEach(function(animal, index, animals) {
      animal.hunger--;
      if (animal.hunger < 0) {
        animals.splice(index, 1);
        let deadAnimal = new Event(
          this.kind + " named " + this.name + " died from hunger."
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
