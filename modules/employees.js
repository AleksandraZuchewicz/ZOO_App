let currentId = 0;
let Items;
let Animals;
class Employee {
  constructor(name) {
    this.id = currentId;
    currentId++;
    this.name = name;
  }
}
class Feeder extends Employee {
  constructor(name) {
    super(name);
    this.role = "Feeder";
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
    super(name);
    this.role = "Trainer";
  }
  train(animal, trick) {
    animal[trick] = Items.tricks[trick];
    animal.tricks.push(trick);
  }
}
module.exports = function(items, animals) {
  Items = items;
  Animals = animals;
  return {
    Employee: Employee,
    Trainer: Trainer,
    Feeder: Feeder
  };
};
