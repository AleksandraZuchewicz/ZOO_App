let currentId = 0;
let Items;
let Animals;
let Event;
class Employee {
  constructor(role, name) {
    this.id = currentId;
    currentId++;
    this.name = name;
    this.role = role;
    let newHiredEmployee = new Event(
      this.role + " named " + this.name + " has been hired."
    );
    newHiredEmployee.emit();
  }
}
class Feeder extends Employee {
  constructor(name) {
    super("Feeder", name);
  }
  feed(animal) {
    let food;
    if (animal instanceof Animals.Cat) {
      food = Items.MEATS.PORK;
    }
    if (animal instanceof Animals.Monkey) {
      food = Items.FRUITS.BANANA;
    }
    animal.eat(food);
  }
}
class Trainer extends Employee {
  constructor(name) {
    super("Trainer", name);
  }
  train(animal, trick) {
    animal[trick] = Items.tricks[trick];
    animal.tricks.push(trick);
  }
}
module.exports = function(items, animals, event) {
  Items = items;
  Animals = animals;
  Event = event;
  return {
    Employee: Employee,
    Trainer: Trainer,
    Feeder: Feeder
  };
};
