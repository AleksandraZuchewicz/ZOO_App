let Items;
let Animals;
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
class Feeder extends Employee {
  constructor(id, name) {
    super(id, name);
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
  constructor(id, name) {
    super(id, name);
    this.role = "Trainer";
  }
  train(animal, trick) {
    animal[trick] = Items.tricks[trick];
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
